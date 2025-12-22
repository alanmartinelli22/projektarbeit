import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// Feste Auswahlmöglichkeiten für die Standorte
// (könnten später auch vom Backend geladen werden)
const locationOptions = [
  { value: "Bahnhofstrasse (Nord)", label: "Bahnhofstrasse (Nord)" },
  { value: "Bahnhofstrasse (Mitte)", label: "Bahnhofstrasse (Mitte)" },
  { value: "Bahnhofstrasse (Süd)", label: "Bahnhofstrasse (Süd)" },
  { value: "Lintheschergasse", label: "Lintheschergasse" },
];

// Sidebar-Komponente für alle Filtereinstellungen
// Die Sidebar verwaltet selbst keine Daten,
// sondern ändert den State in der Explore-Komponente
export const Sidebar = ({
  date,
  setDate,
  location,
  setLocation,
  showAdults,
  setShowAdults,
  showChildren,
  setShowChildren,
  direction,
  setDirection,
  onRun,
  loading,
}) => {
  return (
    <div>
      {/* Titel des Filterbereichs */}
      <Typography variant="h6" gutterBottom>
        Filter
      </Typography>

      {/* Datumsfilter */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="Datum"
          type="date"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FormControl>

      {/* Standort-Auswahl */}
      <FormControl fullWidth sx={{ mb: 2 }}>
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

      <Divider sx={{ my: 2 }} />

      {/* Auswahl der Personenkategorien */}
      <FormGroup sx={{ mb: 2 }}>
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

      <Divider sx={{ my: 2 }} />

      {/* Auswahl der Bewegungsrichtung */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="direction-label">Richtung</InputLabel>
        <Select
          labelId="direction-label"
          label="Richtung"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <MenuItem value="LTR">LTR</MenuItem>
          <MenuItem value="RTL">RTL</MenuItem>
        </Select>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Button zum Starten der Explore-Abfrage */}
      <Button variant="contained" fullWidth onClick={onRun} disabled={loading}>
        GRAFIK ERSTELLEN
      </Button>
    </div>
  );
};
