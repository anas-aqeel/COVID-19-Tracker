import numeral from "numeral";
import React, { useContext } from "react";
import { MyContext } from "../Context/GlobalContext";
import "./components.css";

const Table = () => {
  let {
    data: { countryData },
    fetchQueryData
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

      {countryData
        ? countryData
          ?.sort((a, b) => b.cases - a.cases)
          ?.map((country) => (
            <tr onClick={() => fetchQueryData(`countries/${country.country}`)}>
              <td>
                <img
                  src={country.countryInfo.flag}
                  alt={country.country}
                  width={20}
                />
                {country.country}{" "}
              </td>
              <td>{`+${numeral(country.cases).format("0.0a")}`}</td>
              <td>{`+${numeral(country.recovered).format("0.0a")}`}</td>
              <td>{`+${numeral(country.deaths).format("0.0a")}`}</td>
              <td>{`+${numeral(country.population).format("0.0a")}`}</td>
            </tr>
          ))
        : ""}
    </div>
  );
};

export default Table;
