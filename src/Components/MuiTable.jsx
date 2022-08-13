import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./components.css";

import numeral from "numeral";
import React, { useContext } from "react";
import { MyContext } from "../Context/GlobalContext";

export default function MyTable() {
  let {
    data: { countryData },
    fetchQueryData,
  } = useContext(MyContext);

  const rows = countryData
    ?.sort((a, b) => b.cases - a.cases)
    ?.map((country) => {
      return {
        name: country.country,
        flag: country.countryInfo.flag,
        cases: country.cases,
        recovered: country.recovered,
        deaths: country.deaths,
        population: country.population,
      };
    });
  console.log(rows);

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableBody>
          <TableRow>
            <TableCell
              className={"sticky"}
              component="th"
              scope="row"
              sx={{ width: 100 }}
            >
              Country
            </TableCell>
            <TableCell align="center">Cases&nbsp;</TableCell>
            <TableCell align="center">Recovered&nbsp;</TableCell>
            <TableCell align="center">Deaths</TableCell>
            <TableCell align="center">Population&nbsp;</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          {rows.map((row) => {
            console.log(row);
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={"sticky"}
                  component="th"
                  scope="row"
                  sx={{ width: 100 }}
                >
                  <img
                    style={{marginRight:'8px'}}
                    src={row.flag}
                    alt={row.country}
                    width={20}
                  />
                  {row.name}
                </TableCell>

                <TableCell align="center">{row.cases}&nbsp;</TableCell>
                <TableCell align="center">{row.recovered}&nbsp;</TableCell>
                <TableCell align="center">{row.deaths}&nbsp;</TableCell>
                <TableCell align="center">
                  {Number(row.population) === 0
                    ? row.cases + row.recovered
                    : row.population}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
