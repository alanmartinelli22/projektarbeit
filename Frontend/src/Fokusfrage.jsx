import Typography from "@mui/material/Typography";
import { FokusChart } from "./FokusChart";

export const Fokusfrage = () => {
  return (
    <div className="page">
      <div className="pageTitle">
        {/* Titel der Fokusfrage-Seite */}
        <Typography variant="h4" gutterBottom>
          Fokusfrage
        </Typography>
      </div>

      <div className="pageIntro">
        {/* Die konkrete Forschungsfrage, die wir mit der Visualisierung beantworten */}
        <Typography variant="h6">
          Wann gibt es an der Bahnhofstrasse Nord während der Street Parade am
          10. August 2024 mehr erwachsene Fussgänger in Richtung LTR als in
          Richtung RTL?
        </Typography>

        {/* Kurze Interpretation: was sieht man typischerweise im Diagramm */}
        <Typography variant="body2">
          Am Vormittag ist die Differenz häufig positiv: In Richtung LTR werden
          mehr Erwachsene gezählt als in Richtung RTL. Am Nachmittag verändert
          sich das Muster oft: In mehreren Stunden überwiegt die Richtung RTL.
          Die grössten Abweichungen liegen tendenziell in Zeiten mit hoher
          Frequenz.
        </Typography>
      </div>

      {/* Diagramm-Komponente: zeigt die Daten zur Beantwortung der Frage */}
      <div className="fokusChartWrapper">
        <FokusChart />
      </div>
    </div>
  );
};
