from datetime import date as dt_date
from pathlib import Path
from typing import Optional

import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Basisverzeichnis der Applikation
BASE_DIR = Path(__file__).parent
# Pfad zur CSV-Datei mit den Messdaten
DATA_PATH = BASE_DIR / "Gesamtdatensatz.csv"

# Erstellen der FastAPI-Applikation
app = FastAPI(title="Projektarbeit API")

# CORS-Konfiguration: erlaubt Zugriff vom React-Frontend (localhost:5173)
app.add_middleware(
    CORSMiddleware,
    # Zugriff von React regeln
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# CSV-Daten einmalig beim Start des Servers einlesen
DF = pd.read_csv(DATA_PATH)

# Zeitstempel vorbereiten für Filter und Aggregationen
DF["timestamp"] = pd.to_datetime(DF["timestamp"])
DF["date"] = DF["timestamp"].dt.date
DF["hour"] = DF["timestamp"].dt.hour


# Root-Endpoint: einfacher Health-Check des Backends
@app.get("/")
def root():
    return {"status": "ok", "rows": len(DF)}

# Liefert alle verfügbaren Locations (REST-Ressource)
@app.get("/api/locations")
def locations():
    if "location_id" in DF.columns and "location_name" in DF.columns:
        df_loc = (
            DF[["location_id", "location_name"]]
            .drop_duplicates()
            .sort_values("location_name")
        )
        return df_loc.to_dict(orient="records")
    return []

# Fokusfrage: Aggregierte Daten pro Stunde für eine bestimmte Location
# Path-Parameter: location_id identifiziert die Location
@app.get("/api/locations/{location_id}/focus")
def focus(location_id: int):
    # Feste Untersuchungsdatum für die Fokusfrage
    target_date = dt_date(2024, 8, 10)

    # Filtern nach Location und Datum
    df_loc = DF[DF["location_id"] == location_id].copy()
    df_day = df_loc[df_loc["date"] == target_date].copy()
    
    # Aggregation pro Stunde (Summe der Passanten)
    df_group = (
        df_day.groupby("hour")
        .agg(
            adult_ltr_pedestrians_count=("adult_ltr_pedestrians_count", "sum"),
            adult_rtl_pedestrians_count=("adult_rtl_pedestrians_count", "sum"),
        )
        .reset_index()
        .sort_values("hour")
    )
    
    # Differenz zwischen LTR und RTL
    df_group["delta"] = (
        df_group["adult_ltr_pedestrians_count"]
        - df_group["adult_rtl_pedestrians_count"]
    )
    
    # Gewinner-Richtung pro Stunde bestimmen
    df_group["winner"] = df_group["delta"].apply(
    lambda x: "LTR" if x > 0 else "RTL"
)

    return df_group.to_dict(orient="records")


# Explore-Endpoint: Aggregierte Daten pro Stunde für interaktive Exploration
# Query-Parameter: date und location_name dienen als Filter
@app.get("/api/explore/chart")
def explore_chart(
    date: Optional[str] = None,
    location_name: Optional[str] = None,
):
    df = DF.copy()
    # Optionaler Filter nach Location
    if location_name and "location_name" in df.columns:
        df = df[df["location_name"] == location_name]
    
    # Optionaler Filter nach Datum
    if date:
        target_date = pd.to_datetime(date).date()
        df = df[df["date"] == target_date]

    # Spaltennamen aus dem CSV
    adult_ltr = "adult_ltr_pedestrians_count"
    adult_rtl = "adult_rtl_pedestrians_count"
    child_ltr = "child_ltr_pedestrians_count"
    child_rtl = "child_rtl_pedestrians_count"

    df_hour = (
        df.groupby("hour")
        .agg(
            adult_ltr=(adult_ltr, "sum"),
            adult_rtl=(adult_rtl, "sum"),
            child_ltr=(child_ltr, "sum"),
            child_rtl=(child_rtl, "sum"),
        )
        .reset_index()
        .sort_values("hour")
    )

    # Umwandlung in JSON-kompatibles Format
    result = []

    for _, r in df_hour.iterrows():
        result.append({
            "hour": int(r["hour"]),
            "adult_ltr": int(r["adult_ltr"]),
            "adult_rtl": int(r["adult_rtl"]),
            "child_ltr": int(r["child_ltr"]),
            "child_rtl": int(r["child_rtl"]),
        })

    return result

