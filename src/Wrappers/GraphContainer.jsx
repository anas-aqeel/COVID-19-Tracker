import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Map from "../Components/Map";
import GraphCard from "../Components/GraphCard";
import SelectLabels from "../Components/Select";
import "./wrapper.css";
export default function GraphsContainer() {
  return (
    <div className="graph_container">
      <div className="select_container">
        <SelectLabels/>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <div className="card_container">
              <GraphCard
                title="Cases"
                active={true}
                cases={21}
                isRed={true}
                total={32}
              />
              <GraphCard
                title="Recovered"
                active={false}
                cases={21}
                isRed={false}
                total={32}
              />
              <GraphCard
                title="Deaths"
                active={false}
                cases={21}
                isRed={true}
                total={32}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={9.9}>
            <Map />
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}
