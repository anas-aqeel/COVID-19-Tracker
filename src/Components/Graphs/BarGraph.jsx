import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import formatData, {options} from "../../utils/graphsConfig";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function BarGraph({filteredData}) {
  let formattedData = formatData(filteredData)

  return (
    <div className="graph">
      <Bar  options={options} data={formattedData} />
    </div>
  );
}
