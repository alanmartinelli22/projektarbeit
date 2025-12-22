import { useEffect, useState } from "react";
import { VegaEmbed } from "react-vega";
import fokusfrageBase from "./json_spec/fokusfrage.json";

export const FokusChart = () => {
  const [spec, setSpec] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/locations/331/focus")
      .then((res) => res.json())
      .then((json) => {
        console.log("Dati backend Fokusfrage:", json);

        const newSpec = {
          ...fokusfrageBase,
          data: {
            values: json, // qui inseriamo i dati del backend
          },
        };

        setSpec(newSpec);
      })
      .catch((err) => {
        console.error("Errore fetch Fokusfrage", err);
      });
  }, []);

  if (!spec) {
    return <div>Lade Fokusfrage Diagramm…</div>;
  }

  return (
    <div>
      <VegaEmbed spec={spec} />
    </div>
  );
};
