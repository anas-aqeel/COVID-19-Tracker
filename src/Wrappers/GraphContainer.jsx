import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GraphCard from "../Components/GraphCard";
import SelectLabels from "../Components/Select";
import linegraph from "../assets/images/linegraph.png";
import piegraph from "../assets/images/piegraph.png";
import bargraph from "../assets/images/bargraph.png";
import Graphs from "../Components/Graphs";
import "./wrapper.css";
export default function GraphsContainer() {
  return (
    <div className="graph_container">
      <div className="select_container">
        <SelectLabels />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <div className="card_container">
              <GraphCard title="Line Graph" imgSrc={linegraph} />
              <GraphCard title="Pie Graph" imgSrc={piegraph} />
              <GraphCard title="Bar Graph" imgSrc={bargraph} />
            </div>
          </Grid>

          <Grid item xs={12} md={9.9}>
            
            <Graphs />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
