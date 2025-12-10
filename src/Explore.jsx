import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

const locationOptions = [
  { value: "Bahnhofstrasse (Nord)", label: "Bahnhofstrasse (Nord)" },
  { value: "Bahnhofstrasse (Mitte)", label: "Bahnhofstrasse (Mitte)" },
  { value: "Bahnhofstrasse (Süd)", label: "Bahnhofstrasse (Süd)" },
  { value: "Lintheschergasse", label: "Lintheschergasse" },
];

const weatherOptions = [
  { value: "clear-night", label: "klar (Nacht)" },
  { value: "partly-cloudy-night", label: "teilweise bewölkt (Nacht)" },
  { value: "partly-cloudy-day", label: "teilweise bewölkt (Tag)" },
  { value: "cloudy", label: "bewölkt" },
  { value: "clear-day", label: "klar (Tag)" },
  { value: "rain", label: "Regen" },
  { value: "fog", label: "Nebel" },
  { value: "snow", label: "Schnee" },
];

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
        Interaktive Exploration der Fussgängerdaten. Unten können Datum,
        Standort, Personenart, Richtung und Wetterbedingungen ausgewählt werden.
      </Typography>

      {/* Bereich mit Filtern */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filter
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {/* Datum */}
          <FormControl fullWidth>
            <TextField
              label="Datum"
              type="date"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>

          {/* Standort */}
          <FormControl fullWidth>
            <InputLabel id="location-label">Standort</InputLabel>
            <Select
              labelId="location-label"
              label="Standort"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locationOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Erwachsene / Kinder */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <FormGroup>
            <Typography variant="subtitle1">Personen</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showAdults}
                  onChange={(e) => setShowAdults(e.target.checked)}
                />
              }
              label="Erwachsene"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showChildren}
                  onChange={(e) => setShowChildren(e.target.checked)}
                />
              }
              label="Kinder"
            />
          </FormGroup>

          {/* LTR / RTL */}
          <FormGroup>
            <Typography variant="subtitle1">Richtung</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showLTR}
                  onChange={(e) => setShowLTR(e.target.checked)}
                />
              }
              label="LTR"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showRTL}
                  onChange={(e) => setShowRTL(e.target.checked)}
                />
              }
              label="RTL"
            />
          </FormGroup>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Wetter */}
        <FormControl fullWidth>
          <InputLabel id="weather-label">Wetter</InputLabel>
          <Select
            labelId="weather-label"
            label="Wetter"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            {weatherOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      {/* Platzhalter für Diagramm */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Explorationsdiagramm
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Hier kommt später die Visualisierung mit den gefilterten Daten.
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Aktuell ausgewählte Filter (nur zur Kontrolle):
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
  );
};
