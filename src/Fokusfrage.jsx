import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Sidebar } from "./Sidebar";
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
        Richtung LTR als in Richtung RTL?
      </Typography>

      {/* Griglia: Sidebar (sinistra) + Grafico (destra) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 2,
        }}
      >
        {/* Sidebar a sinistra */}
        <Sidebar />

        {/* Grafico placeholder (Vega-Lite lo aggiungiamo dopo) */}
        <Paper sx={{ p: 2 }}>
          <FokusChart />
        </Paper>
      </Box>
    </Box>
  );
};
