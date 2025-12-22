import { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import { Sidebar } from "./Sidebar";
import { ExploreChart } from "./ExploreChart";

export const Explore = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bahnhofstrasse (Nord)");
  const [showAdults, setShowAdults] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [direction, setDirection] = useState("LTR");

  const [chartUrl, setChartUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    if (date) params.set("date", date);
    if (location) params.set("location_name", location);

    params.set("adults", String(showAdults));
    params.set("children", String(showChildren));
    params.set("direction", direction);

    return params.toString();
  }, [date, location, showAdults, showChildren, direction]);

  const runExplore = () => {
    const url = `http://localhost:8000/api/explore/chart?${queryString}`;
    setLoading(true);
    setChartUrl(url);
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Explore
        </Typography>
      </div>

      <div className="exploreLayout">
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
            loading={loading}
          />
        </div>

        <div className="chartPanel">
          <Typography variant="h6" gutterBottom>
            Explorationsdiagramm
          </Typography>

          <ExploreChart url={chartUrl} />
        </div>
      </div>
    </div>
  );
};
