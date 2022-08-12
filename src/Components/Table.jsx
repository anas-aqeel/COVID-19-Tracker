import React from "react";
import "./components.css";

export let countries = [
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
  {
    country: "Pakistan",
    cases: 233,
    recovered: 32,
    deaths: 32,
    population: 3323233,
    flag: "https://disease.sh/assets/img/flags/af.png",
  },
];

const Table = () => {
  return (
    <div className="table">
      <th>
        <td style={{marginRight:'40px'}}>Countries </td>
        <td>Cases</td>
        <td>Recovered</td>
        <td>Deaths</td>
        <td>Population</td>
      </th>
      {countries.map((country) => (
        <tr onClick={()=>console.log(country)}>
          <td>
            {country.country} <img src={country.flag} width={20} />
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
