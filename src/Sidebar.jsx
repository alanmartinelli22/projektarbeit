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
  { value: "Bahnhofstrasse (Süd)", label: "Bahnhofstrasse (Sued)" },
  { value: "Lintheschergasse", label: "Lintheschergasse" },
];

const weatherOptions = [
  { value: "clear-night", label: "klar Nacht" },
  { value: "partly-cloudy-night", label: "teilweise bewölkt Nacht" },
  { value: "partly-cloudy-day", label: "teilweise bewölkt Tag" },
  { value: "cloudy", label: "bewölkt" },
  { value: "clear-day", label: "klar Tag" },
  { value: "rain", label: "Regen" },
  { value: "fog", label: "Nebel" },
  { value: "snow", label: "Schnee" },
];

export const Sidebar = ({
  date,
  setDate,
  location,
  setLocation,
  showAdults,
  setShowAdults,
  showChildren,
  setShowChildren,
  showLTR,
  setShowLTR,
  showRTL,
  setShowRTL,
  weather,
  setWeather,
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filter
      </Typography>

      {/* Data e location */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr" },
          gap: 2,
        }}
      >
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

      {/* Persone */}
      <FormGroup sx={{ mb: 1 }}>
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

      {/* Direzione */}
      <FormGroup sx={{ mb: 2 }}>
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

      <Divider sx={{ my: 2 }} />

      {/* Meteo */}
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
  );
};
