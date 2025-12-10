import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Sidebar } from "./Sidebar";

export const Explore = () => {
  const [date, setDate] = useState(""); // yyyy mm dd
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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Explore
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Interaktive Exploration der Fussgängerdaten. Links können Datum,
        Standort, Personenart, Richtung und Wetterbedingungen gewählt werden.
        Rechts aktualisiert sich das Diagramm entsprechend.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
          gap: 2,
        }}
      >
        {/* Sidebar con i filtri */}
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

        {/* Area del grafico di esplorazione */}
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Explorationsdiagramm
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Hier kommt später die Visualisierung mit den gefilterten Daten.
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Aktuell ausgewählte Filter nur zur Kontrolle
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: "#f5f5f5",
              p: 1,
              borderRadius: 1,
              fontSize: 12,
              overflowX: "auto",
            }}
          >
            {JSON.stringify(currentFilters, null, 2)}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
