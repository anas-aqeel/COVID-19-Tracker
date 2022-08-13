import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "../Components/Table";
import Map from "../Components/Map";
import InfoCard from "../Components/InfoCard";
import "./wrapper.css";
import { MyContext } from "../Context/GlobalContext";
import { useContext } from "react";

export default function StatsContainer() {
  let {
    data: { queryData },
  } = useContext(MyContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <div className="card_container">
            <InfoCard
              title="Cases"
              active={true}
              total={queryData?.cases}
              cases={queryData?.todayCases}
              isRed={true}
            />
            <InfoCard
              title="Recovered"
              active={false}
              total={queryData?.recovered}
              cases={queryData?.todayRecovered}
              isRed={false}
            />
            <InfoCard
              title="Deaths"
              active={false}
              total={queryData?.deaths}
              cases={queryData?.todayDeaths}
              isRed={true}
            />
            <InfoCard
              title="Population"
              active={false}
              total={queryData?.population}
              cases={queryData?.population}
              isRed={false}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Map />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Table />
        </Grid>
      </Grid>
    </Box>
  );
}
