import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GraphCard from "../Components/GraphCard";
import SelectLabels from "../Components/Select";
import linegraph from "../assets/images/linegraph.png";
import piegraph from "../assets/images/piegraph.png";
import bargraph from "../assets/images/bargraph.png";
import DoughnutGraph from "../Components/Graphs/DoughnutGraph";
import LineGraph from "../Components/Graphs/LineGraph";
import BarGraph from "../Components/Graphs/BarGraph";
import MenuItem from "@mui/material/MenuItem";

import "./wrapper.css";

export default function GraphsContainer() {
  let [MyGraph, SetMyGraph] = useState(<DoughnutGraph />);

  return (
    <div className="graph_container">
      <div className="select_container">
        <SelectLabels>
            <MenuItem value="WorldWide">WorldWide</MenuItem>
            <MenuItem value="cases">Top 10 Countries by cases</MenuItem>
            <MenuItem value="deaths">Top 10 Countries by deaths</MenuItem>
            <MenuItem value="recoveries">Top 10 Countries by recoveries</MenuItem>
        </SelectLabels>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <div className="card_container">
              <GraphCard
                title="Line Graph"
                onClick={() => SetMyGraph(<LineGraph />)}
                imgSrc={linegraph}
              />
              <GraphCard
                title="Pie Graph"
                onClick={() => SetMyGraph(<DoughnutGraph />)}
                imgSrc={piegraph}
              />
              <GraphCard
                title="Bar Graph"
                onClick={() => SetMyGraph(<BarGraph />)}
                imgSrc={bargraph}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={9.9}>
            {MyGraph}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
