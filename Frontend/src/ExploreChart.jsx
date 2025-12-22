import { useEffect, useMemo, useState } from "react";
import { VegaEmbed } from "react-vega";

export const ExploreChart = ({
  url,
  adults = true,
  children = true,
  direction = "LTR",
}) => {
  const [spec, setSpec] = useState(null);
  const [error, setError] = useState("");

  // Basis-Spec (Vega-Lite) ist statisch
  // Daten (values) werden später dynamisch eingesetzt
  const baseSpec = useMemo(() => {
    return {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      width: 600,
      height: 320,
      mark: "bar",
      encoding: {
        x: { field: "hour", type: "ordinal", title: "Stunde" },
        y: { field: "count", type: "quantitative", title: "Anzahl" },
        color: { field: "person", type: "nominal", title: "Personen" },
        tooltip: [
          { field: "hour", type: "ordinal", title: "Stunde" },
          { field: "person", type: "nominal", title: "Person" },
          { field: "count", type: "quantitative", title: "Anzahl" },
        ],
      },
    };
  }, []);

  useEffect(() => {
    setSpec(null);
    setError("");

    // Ohne URL keine Abfrage möglich
    if (!url) return;

    fetch(url)
      .then((res) => {
        // HTTP-Fehler direkt anzeigen
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Erwartet wird ein Array von Datensätzen vom Backend
        if (!Array.isArray(data)) {
          setError("Backend did not return an array of data.");
          return;
        }

        // direction normalisieren (z.B. "rtl " -> "RTL")
        const dir = String(direction).trim().toUpperCase();
        const useLTR = dir === "LTR";

        // Input-Format (vom Backend): wide format
        // [{hour, adult_ltr, adult_rtl, child_ltr, child_rtl}, ...]
        // Output-Format (für Vega-Lite): long format
        // [{hour, person, count}, ...]
        const rows = [];

        const adultKey = useLTR ? "adult_ltr" : "adult_rtl";
        const childKey = useLTR ? "child_ltr" : "child_rtl";

        for (const r of data) {
          const hour = Number(r.hour);

          if (adults) {
            rows.push({
              hour,
              person: "Erwachsene",
              count: Number(r[adultKey] ?? 0),
            });
          }

          if (children) {
            rows.push({
              hour,
              person: "Kinder",
              count: Number(r[childKey] ?? 0),
            });
          }
        }

        // Wenn keine Kategorie ausgewählt ist, gibt es keine Zeilen
        if (rows.length === 0) {
          setError("Keine Daten für die gewählten Filter.");
          return;
        }

        // Wenn alle counts = 0 sind, ist das Ergebnis fachlich leer
        const hasAnyCount = rows.some((x) => x.count > 0);
        if (!hasAnyCount) {
          setError("Keine Daten für die gewählten Filter.");
          return;
        }

        // Neue Spec: gleiche Basis, aber mit neuen Daten
        const newSpec = {
          ...baseSpec,
          title: `Explore ${dir}`,
          data: { values: rows },
        };

        setSpec(newSpec);
      })
      .catch((err) => {
        // Fehlerbehandlung (z.B. Server nicht erreichbar)
        console.error("Fehler beim Laden ExploreChart", err);
        setError(String(err));
      });
  }, [url, adults, children, direction, baseSpec]);

  // Einfache Zustände für UI-Feedback
  if (!url) return <div>Kein Diagramm…</div>;
  if (error) return <div>{error}</div>;
  if (!spec) return <div>Lade Diagramm…</div>;

  return <VegaEmbed spec={spec} />;
};
