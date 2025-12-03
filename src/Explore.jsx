import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Explore = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Titolo della pagina */}
      <Typography variant="h4" gutterBottom>
        Explore
      </Typography>

      {/* Testo descrittivo */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        Interaktive Exploration der Fussgängerdaten. Hier können verschiedene
        Orte, Variablen und Zeiträume ausgewählt werden.
      </Typography>

      {/* Placeholder del grafico */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">
          Hier kommt später ein Diagramm für die Exploration.
        </Typography>
      </Paper>
    </Box>
  );
};
