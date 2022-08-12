import React, { useContext } from "react";
import { MyContext } from "../Context/GlobalContext";
import "./components.css";

const Table = () => {
  let {
    data: { countryData },
  } = useContext(MyContext);
  return (
    <div className="table">
      <th>
        <td>Countries </td>
        <td>Cases</td>
        <td>Recovered</td>
        <td>Deaths</td>
        <td>Population</td>
      </th>
      {countryData?.sort((a, b) => b - a)?.map((country) => (
          <tr onClick={() => console.log(country)}>
            <td>
              {country.country}{" "}
              <img
                src={country.countryInfo.flag}
                alt={country.country}
                width={20}
              />
            </td>
            <td>{country.cases}</td>
            <td>{country.recovered}</td>
            <td>{country.deaths}</td>
            <td>{country.population}</td>
          </tr>
        ))}
    </div>
  );
};

export default Table;
