import React from "react";
import "./components.css";

export let countries = [
  { country: "Pakistan", cases: 233 },
  { country: "India", cases: 2333 },
  { country: "China", cases: 211 },
  { country: "Pakistan", cases: 233 },
  { country: "India", cases: 2333 },
  { country: "China", cases: 211 },
  { country: "Pakistan", cases: 233 },
  { country: "India", cases: 2333 },
  { country: "China", cases: 211 },
  { country: "Pakistan", cases: 233 },
  { country: "India", cases: 2333 },
  { country: "China", cases: 211 },
  { country: "Pakistan", cases: 233 },
  { country: "India", cases: 2333 },
  { country: "China", cases: 211 },
];

const Table = () => {
  return (
    <div className="table">
      <th>
        <td>Country</td>
        <td>Cases</td>
        <td>Recovered</td>
        <td>Deaths</td>
        <td>Population</td>
      </th>
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{country.cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
