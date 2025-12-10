import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Sidebar } from "./Sidebar";

export const Explore = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bahnhofstrasse (Nord)");
  const [showAdults, setShowAdults] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [showLTR, setShowLTR] = useState(true);
  const [showRTL, setShowRTL] = useState(true);
  const [weather, setWeather] = useState("clear-day");

  const currentFilters = {
    date,
    location,
    persons: {
      adults: showAdults,
      children: showChildren,
    },
    direction: {
      LTR: showLTR,
      RTL: showRTL,
    },
    weather,
  };

  return (
    <div className="page">
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Explore
        </Typography>
      </div>

      <div className="pageIntro">
        <Typography variant="body1">
          Interaktive Exploration der Fussgängerdaten. Links kannst du Datum,
          Standort, Personenart, Richtung und Wetter wählen. Rechts wird später
          das Diagramm mit den gefilterten Daten angezeigt.
        </Typography>
      </div>

      <div className="exploreLayout">
        {/* sidebar completa a sinistra */}
        <div className="sidebarPanel">
          <Sidebar
            date={date}
            setDate={setDate}
            location={location}
            setLocation={setLocation}
            showAdults={showAdults}
            setShowAdults={setShowAdults}
            showChildren={showChildren}
            setShowChildren={setShowChildren}
            showLTR={showLTR}
            setShowLTR={setShowLTR}
            showRTL={showRTL}
            setShowRTL={setShowRTL}
            weather={weather}
            setWeather={setWeather}
          />
        </div>

        {/* grafico che riempie la parte destra */}
        <div className="chartPanel">
          <Typography variant="h6" gutterBottom>
            Explorationsdiagramm
          </Typography>
          <Typography variant="body2">
            Hier kommt der Vega Lite Plot hin. Unten siehst du vorerst nur die
            aktuell ausgewählten Filter.
          </Typography>

          <pre
            style={{
              marginTop: 16,
              padding: 8,
              backgroundColor: "#f5f5f5",
              borderRadius: 4,
              fontSize: 12,
              overflowX: "auto",
            }}
          >
            {JSON.stringify(currentFilters, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
