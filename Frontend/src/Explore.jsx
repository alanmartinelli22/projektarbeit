import { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import { Sidebar } from "./Sidebar";
import { ExploreChart } from "./ExploreChart";

export const Explore = () => {
  // State für Filter (vom Sidebar gesteuert)
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bahnhofstrasse (Nord)");
  const [showAdults, setShowAdults] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [direction, setDirection] = useState("LTR");

  // URL für den Explore-API-Endpoint
  const [chartUrl, setChartUrl] = useState("");

  // Query-String für das Backend (nur Filter, die das Backend braucht)
  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    if (date) params.set("date", date);
    if (location) params.set("location_name", location);

    return params.toString();
  }, [date, location]);

  // Wird ausgelöst, wenn der Benutzer auf "Grafik erstellen" klickt
  const runExplore = () => {
    const url = `http://localhost:8000/api/explore/chart?${queryString}`;
    setChartUrl(url);
  };

  return (
    <div className="page">
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Explore
        </Typography>
        <Typography variant="body2" gutterBottom>
          Auf dieser Seite können die gewünschten Daten mithilfe der Filter
          ausgewählt werden. Durch Klicken auf „Grafik erstellen“ wird das
          entsprechende Diagramm generiert.
        </Typography>
      </div>

      <div className="exploreLayout">
        {/* Sidebar mit allen Filter-Einstellungen */}
        <div className="sidebarPanel">
          <Sidebar
            date={date}
            setDate={setDate}
            location={location}
            setLocation={setLocation}
            showAdults={showAdults}
            setShowAdults={setShowAdults}
            showChildren={showChildren}
            setShowChildren={setShowChildren}
            direction={direction}
            setDirection={setDirection}
            onRun={runExplore}
          />
        </div>

        {/* Diagramm-Bereich */}
        <div className="chartPanel">
          <Typography variant="h6" gutterBottom>
            Explorationsdiagramm
          </Typography>

          {/* Übergabe der Filter an ExploreChart */}
          <ExploreChart
            url={chartUrl}
            adults={showAdults}
            children={showChildren}
            direction={direction}
          />
        </div>
      </div>
    </div>
  );
};
