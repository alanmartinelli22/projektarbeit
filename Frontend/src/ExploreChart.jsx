import { useEffect, useState } from "react";
import { VegaEmbed } from "react-vega";

export const ExploreChart = ({ url }) => {
  const [spec, setSpec] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setSpec(null);
    setError("");

    if (!url) return;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json.chart) {
          setError("Backend did not return 'chart'.");
          return;
        }
        setSpec(json.chart);
      })
      .catch((err) => {
        console.error("Errore fetch ExploreChart", err);
        setError(String(err));
      });
  }, [url]);

  if (!url) return <div>Kein Diagramm…</div>;
  if (error) return <div>{error}</div>;
  if (!spec) return <div>Lade Diagramm…</div>;

  return <VegaEmbed spec={spec} />;
};
