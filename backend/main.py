from datetime import date
import numpy as np
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
DF = pd.read_csv("backend/Gesamtdatensatz.csv")
DF["timestamp"] = pd.to_datetime(DF["timestamp"])
DF["date"] = DF["timestamp"].dt.date
DF["hour"] = DF["timestamp"].dt.hour


@app.get("/api/locations/{location_id}/focus")
def focus(location_id: int):
    target_date = date(2024, 8, 10)  # o la data che hai scelto

    df_loc = DF[DF["location_id"] == location_id].copy()
    df_day = df_loc[df_loc["date"] == target_date].copy()

    df_group = (
        df_day.groupby("hour")
        .agg(
          adult_ltr_pedestrians_count=("adult_ltr_pedestrians_count", "sum"),
          adult_rtl_pedestrians_count=("adult_rtl_pedestrians_count", "sum"),
        )
        .reset_index()
    )

    df_group["delta"] = (
      df_group["adult_ltr_pedestrians_count"]
      - df_group["adult_rtl_pedestrians_count"]
    )

    df_group["winner"] = np.where(
      df_group["delta"] > 0,
      "LTR",
      "RTL",
    )

    return df_group.to_dict(orient="records")
