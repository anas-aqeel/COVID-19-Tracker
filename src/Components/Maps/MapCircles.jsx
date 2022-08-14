import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    multiplier: 3000,
  },
  recovered: {
    multiplier: 4200,
  },
  deaths: {
    multiplier: 4800,
  },
  population: {
    multiplier: 3600,
  },
};

export const showDataOnMap = (data, casesType = "cases") =>{

  return data.map((country) => ( 
   
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color="#CC1034"
      fillColor="red"
      fillOpacity={0.4}
      radius={
        Math.sqrt(Math.sqrt(country[casesType])) *
        casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ))};
