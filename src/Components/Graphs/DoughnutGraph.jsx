import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "./LineGraph";
import '../components.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutGraph({labels}) {
  return (
    <div className="graph">
      <Doughnut className="doughnut_graph"  data={{...data, labels}} />
    </div>
  );
}
