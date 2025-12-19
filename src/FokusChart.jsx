import { VegaEmbed } from "react-vega";
import fokusfrage from "./json_spec/fokusfrage.json";

export const FokusChart = () => {
  return (
    <div>
      <VegaEmbed spec={fokusfrage} />
    </div>
  );
};
