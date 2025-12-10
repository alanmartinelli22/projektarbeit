import { VegaEmbed } from "react-vega";

// import dello spec generato da Altair
import fokusfrage from "./json_spec/fokusfrage.json";

export const FokusChart = () => {
  return (
    <div>
      <VegaEmbed spec={fokusfrage} />
    </div>
  );
};
