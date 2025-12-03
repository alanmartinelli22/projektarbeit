import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { VegaEmbed } from "react-vega";

// import dello spec generato da Altair
import fokusfrage from "./json_spec/fokusfrage.json";

export const FokusChart = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, backgroundColor: "#111", color: "white" }}>
        <Typography variant="body1" gutterBottom>
          Diagramm zur Fokusfrage
        </Typography>

        {/* Qui disegniamo il grafico */}
        <VegaEmbed spec={fokusfrage} />
      </Paper>
    </Box>
  );
};
