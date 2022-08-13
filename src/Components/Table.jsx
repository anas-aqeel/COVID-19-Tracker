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
    <table  className="table">
      <thead>
        <tr>
          <td className="col-1">Countries </td>
          <td>Cases</td>
          <td>Recovered</td>
          <td>Deaths</td>
          <td>Population</td>
        </tr>
      </thead>
      <tbody>
        {countryData
            ?.sort((a, b) => b.cases - a.cases)
            ?.map((country) => (
              <tr key={country.country} onClick={() => fetchQueryData(`countries/${country.country}`)}>
                <td className="col-1">
                  <img
                    src={country.countryInfo.flag}
                    alt={country.country}
                    width={20}
                  />
                  {country.country}{" "}
                </td>
                <td className="col-2">{`+${numeral(country.cases).format("0.0a")}`}</td>
                <td>{`+${numeral(country.recovered).format("0.0a")}`}</td>
                <td>{`+${numeral(country.deaths).format("0.0a")}`}</td>
                <td>{`+${numeral(country.population).format("0.0a")}`}</td>
              </tr>
            ))
          }

      </tbody>
    </table>
  );
};

export default Table;
