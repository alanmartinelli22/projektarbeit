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
        <Typography variant="h6">
          Wann gibt es an der Bahnhofstrasse Nord während der Street Parade am
          10. August 2024 mehr erwachsene Fussgänger in Richtung LTR als in
          Richtung RTL?
        </Typography>

        <Typography variant="body2">
          Vormittags ist die Differenz meist positiv: In Richtung LTR werden
          mehr Erwachsene gezählt als in Richtung RTL. Am Nachmittag kippt das
          Muster: Zwischen etwa 14 und 21 Uhr überwiegt häufig die Richtung RTL.
          Die grössten Abweichungen treten in den Hauptverkehrszeiten auf.
        </Typography>
      </div>

      <div className="fokusChartWrapper">
        <FokusChart />
      </div>
    </div>
  );
};
