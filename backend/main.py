from datetime import date as dt_date
from pathlib import Path
from typing import Optional

import numpy as np
import pandas as pd
import altair as alt
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

BASE_DIR = Path(__file__).parent
DATA_PATH = BASE_DIR / "Gesamtdatensatz.csv"

app = FastAPI(title="Projektarbeit API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DF = pd.read_csv(DATA_PATH)
DF["timestamp"] = pd.to_datetime(DF["timestamp"])

DF["date"] = DF["timestamp"].dt.date
DF["hour"] = DF["timestamp"].dt.hour

DF = DF.where(pd.notnull(DF), None)


@app.get("/")
def root():
    return {"status": "ok", "rows": len(DF)}


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


@app.get("/api/locations/{location_id}/focus")
def focus(location_id: int):
    target_date = dt_date(2024, 8, 10)

    df_loc = DF[DF["location_id"] == location_id].copy()
    df_day = df_loc[df_loc["date"] == target_date].copy()

    df_group = (
        df_day.groupby("hour")
        .agg(
            adult_ltr_pedestrians_count=("adult_ltr_pedestrians_count", "sum"),
            adult_rtl_pedestrians_count=("adult_rtl_pedestrians_count", "sum"),
        )
        .reset_index()
        .sort_values("hour")
    )

    df_group["delta"] = (
        df_group["adult_ltr_pedestrians_count"]
        - df_group["adult_rtl_pedestrians_count"]
    )

    df_group["winner"] = np.where(df_group["delta"] > 0, "LTR", "RTL")

    return df_group.to_dict(orient="records")


@app.get("/api/explore/chart")
def explore_chart(
    date: Optional[str] = None,
    location_name: Optional[str] = None,
    adults: bool = True,
    children: bool = True,
    direction: str = "LTR",
):
    df = DF.copy()

    if location_name and "location_name" in df.columns:
        df = df[df["location_name"] == location_name]

    if date:
        target_date = pd.to_datetime(date).date()
        df = df[df["date"] == target_date]

    adult_ltr = "adult_ltr_pedestrians_count"
    adult_rtl = "adult_rtl_pedestrians_count"
    child_ltr = "child_ltr_pedestrians_count"
    child_rtl = "child_rtl_pedestrians_count"

    required = [adult_ltr, adult_rtl, child_ltr, child_rtl]
    missing = [c for c in required if c not in df.columns]
    if missing:
        return {"error": "Missing columns in CSV", "missing": missing}

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

    all_hours = pd.DataFrame({"hour": list(range(24))})
    df_hour = all_hours.merge(df_hour, on="hour", how="left").fillna(0)

    rows = []

    if direction == "LTR":
        if adults:
            for _, r in df_hour.iterrows():
                rows.append(
                    {
                        "hour": int(r["hour"]),
                        "person": "Erwachsene",
                        "count": int(r["adult_ltr"]),
                    }
                )
        if children:
            for _, r in df_hour.iterrows():
                rows.append(
                    {
                        "hour": int(r["hour"]),
                        "person": "Kinder",
                        "count": int(r["child_ltr"]),
                    }
                )

    if direction == "RTL":
        if adults:
            for _, r in df_hour.iterrows():
                rows.append(
                    {
                        "hour": int(r["hour"]),
                        "person": "Erwachsene",
                        "count": int(r["adult_rtl"]),
                    }
                )
        if children:
            for _, r in df_hour.iterrows():
                rows.append(
                    {
                        "hour": int(r["hour"]),
                        "person": "Kinder",
                        "count": int(r["child_rtl"]),
                    }
                )

    chart_df = pd.DataFrame(rows)

    if chart_df.empty:
        empty_spec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "No data",
            "data": {"values": []},
            "mark": "bar",
        }
        return {"chart": empty_spec}

    chart = (
        alt.Chart(chart_df)
        .mark_bar()
        .encode(
            x=alt.X("hour:O", title="Stunde"),
            y=alt.Y("sum(count):Q", title="Anzahl"),
            color=alt.Color("person:N", title="Personen"),
            tooltip=[
                alt.Tooltip("hour:O", title="Stunde"),
                alt.Tooltip("person:N", title="Person"),
                alt.Tooltip("sum(count):Q", title="Anzahl"),
            ],
        )
        .properties(
            width=600,
            height=320,
            title=f"Explore {direction}",
        )
    )

    return {"chart": chart.to_dict()}
