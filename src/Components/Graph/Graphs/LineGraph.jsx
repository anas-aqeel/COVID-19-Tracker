import React from "react";
import "../graph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import formatData, {options} from "../../../utils/graphsConfig";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


 

const LineGraph = ({filteredData}) => {
  let formattedData = formatData(filteredData)
  return (
    <div className="graph">
    <Line options={options} data={formattedData} />
  </div>
  )
}

export default LineGraph;

