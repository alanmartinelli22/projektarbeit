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

const locationOptions = [
  { value: "Bahnhofstrasse (Nord)", label: "Bahnhofstrasse (Nord)" },
  { value: "Bahnhofstrasse (Mitte)", label: "Bahnhofstrasse (Mitte)" },
  { value: "Bahnhofstrasse (Süd)", label: "Bahnhofstrasse (Süd)" },
  { value: "Lintheschergasse", label: "Lintheschergasse" },
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
  direction,
  setDirection,
  onRun,
  loading,
}) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Filter
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Datum
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={date ? dayjs(date) : null}
          onChange={(newValue) => {
            setDate(newValue ? newValue.format("YYYY-MM-DD") : "");
          }}
        />
      </LocalizationProvider>

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
      <Button variant="contained" fullWidth onClick={onRun} disabled={loading}>
        GRAFIK ERSTELLEN
      </Button>
    </div>
  );
};
