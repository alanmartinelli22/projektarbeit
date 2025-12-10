import Typography from "@mui/material/Typography";
import { FokusChart } from "./FokusChart";

export const Fokusfrage = () => {
  return (
    <div className="page">
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Fokusfrage
        </Typography>
      </div>

      <div className="pageIntro">
        <Typography variant="body1">
          Wann gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger in
          Richtung LTR als in Richtung RTL
        </Typography>
      </div>

      <div className="fokusChartWrapper">
        <FokusChart />
      </div>
    </div>
  );
};
