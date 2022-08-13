import React, { useCallback, useContext, useEffect, useState } from "react";
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
import {
  sortByCases,
  sortByDeaths,
  sortByRecoveries,
  filterListData,
} from "../utils/filterCountries";

import "./wrapper.css";
import { MyContext } from "../Context/GlobalContext";
import { useMemo } from "react";

export default function GraphsContainer() {
  let {
    data: { countryData },
  } = useContext(MyContext);

  let initialFilter = filterListData(countryData);
  let [filteredList, setFilteredList] = useState(initialFilter);

  let [MyGraph, SetMyGraph] = useState(
    <LineGraph filteredData={filteredList} />
  );
  let [sortCases, setSortedCases] = useState({
  })
  useEffect(()=>{
    setSortedCases({
      cases: sortByCases(countryData),
      deaths: sortByDeaths(countryData),
      recovery: sortByRecoveries(countryData),
    })
  },[])
  return (
    <div className="graph_container">
      <div className="select_container">
        <SelectLabels
          onClick={() => {
            let a = filterListData(countryData)
            setFilteredList(a);
            SetMyGraph(<LineGraph filteredData={a} />)
          }}
        >
          <MenuItem
            onClick={() => {
              let a = filterListData(sortCases.cases);
              setFilteredList(a);
              SetMyGraph(<LineGraph filteredData={a} />);
            }}
            value="cases"
          >
            Top 10 Countries by cases
          </MenuItem>
          <MenuItem
            onClick={() => {
              let a = filterListData(sortCases.deaths);
              setFilteredList(a);
              SetMyGraph(<LineGraph filteredData={a} />);
            }}
            value="deaths"
          >
            Top 10 Countries by deaths
          </MenuItem>
          <MenuItem
            onClick={() => {
              let a = filterListData(sortCases.recovery);
              setFilteredList(a);
              SetMyGraph(<LineGraph filteredData={a} />);
            }}
            value="recoveries"
          >
            Top 10 Countries by recoveries
          </MenuItem>
        </SelectLabels>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <div className="card_container">
              <GraphCard
                title="Line Graph"
                onClick={() =>
                  SetMyGraph(<LineGraph filteredData={filteredList} />)
                }
                imgSrc={linegraph}
              />
              <GraphCard
                title="Pie Graph"
                onClick={() =>
                  SetMyGraph(<DoughnutGraph filteredData={filteredList} />)
                }
                imgSrc={piegraph}
              />
              <GraphCard
                title="Bar Graph"
                onClick={() => {
                  SetMyGraph(<BarGraph filteredData={filteredList} />);
                }}
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
