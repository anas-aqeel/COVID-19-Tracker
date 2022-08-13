import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../components.css'
import formatData, {options} from "../../utils/graphsConfig";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutGraph({ filteredData }) {
  let formattedData = formatData(filteredData)

  return (
    <div className="graph">
      <Doughnut className="doughnut_graph" options={options} data={formattedData} />
    </div>
  );
}
