import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { FokusChart } from "./FokusChart";

export const Fokusfrage = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Titolo della pagina */}
      <Typography variant="h4" gutterBottom>
        Fokusfrage
      </Typography>

      {/* Testo introduttivo della domanda */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        Wann gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger in
        Richtung LTR als in Richtung RTL
      </Typography>

      {/* Solo il grafico, grande, al centro */}
      <Paper sx={{ p: 2 }}>
        <FokusChart />
      </Paper>
    </Box>
  );
};
