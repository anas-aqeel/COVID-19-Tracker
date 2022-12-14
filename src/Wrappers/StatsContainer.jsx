import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MyTable from "../Components/Table/MuiTable";
import Map from "../Components/Maps/Map";
import InfoCard from "../Components/Card/InfoCard";
import "./wrapper.css";
import { MyContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { useState } from "react";

export default function StatsContainer() {
  let [queryType, setQueryType] = useState('cases')
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
              active={queryType=='cases'}
              total={queryData?.cases}
              cases={queryData?.todayCases}
              isRed={true}
              onClick={()=>setQueryType('cases')}
            />
            <InfoCard
              title="Recovered"
              active={queryType=='recovered'}
              total={queryData?.recovered}
              cases={queryData?.todayRecovered}
              isRed={false}
              onClick={()=>setQueryType('recovered')}

            />
            <InfoCard
              title="Deaths"
              active={queryType=='deaths'}
              total={queryData?.deaths}
              cases={queryData?.todayDeaths}
              isRed={true}
              onClick={()=>setQueryType('deaths')}
              
              />
            <InfoCard
              title="Population"
              onClick={()=>setQueryType('population')}
              active={queryType=='population'}
              total={queryData?.population}
              cases={queryData?.population}
              isRed={false}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Map queryType={queryType} />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <MyTable />
        </Grid>
      </Grid>
    </Box>
  );
}
