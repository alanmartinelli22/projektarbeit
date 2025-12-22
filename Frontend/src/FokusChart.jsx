import { useEffect, useState } from "react";
import { VegaEmbed } from "react-vega";

// Statische Vega-Lite-Spezifikation für die Fokusfrage
import fokusfrage from "./json_spec/fokusfrage.json";

// Komponente für das Fokusdiagramm (statische Fragestellung)
export const FokusChart = () => {
  // State für die Vega-Spezifikation
  const [spec, setSpec] = useState(null);

  // Daten werden einmal beim Laden der Komponente vom Backend abgefragt
  useEffect(() => {
    fetch("http://localhost:8000/api/locations/331/focus")
      .then((res) => res.json())
      .then((json) => {
        // Debug-Ausgabe der Backend-Daten
        console.log("Dati backend Fokusfrage:", json);

        // Vega-Spec: statische Struktur + dynamische Daten
        const newSpec = {
          ...fokusfrage,
          data: {
            values: json, // qui inseriamo i dati del backend
          },
        };

        setSpec(newSpec);
      })
      .catch((err) => {
        // Fehlerbehandlung bei fehlender Backend-Verbindung
        console.error("Errore fetch Fokusfrage", err);
      });
  }, []);

  // Ladeanzeige solange die Spec noch nicht bereit ist
  if (!spec) {
    return <div>Lade Fokusfrage Diagramm…</div>;
  }

  // Darstellung des Diagramms mit VegaEmbed
  return (
    <div>
      <VegaEmbed spec={spec} />
    </div>
  );
};
