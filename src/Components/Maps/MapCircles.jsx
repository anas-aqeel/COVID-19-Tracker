import React from "react";
import numeral from "numeral";
import { Circle, Popup,useMapEvents } from "react-leaflet";
import { useContext } from "react";
import { MyContext } from "../../Context/GlobalContext";

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

function QueryData(query) {
  const map = useMapEvents({
    popupopen(){
      query()
    }
  })
}

export const ShowDataOnMap = ({data, casesType}) =>{
  let {
    fetchQueryData,
  } = useContext(MyContext);

  return data.map((country) => ( 
    <>
      {/* fetchQueryData(`countries/${country.country}`) */}
    
    <Circle
    
      key={country.countryInfo.iso3}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color="#CC1034"
      fillColor="red"
      fillOpacity={0.4}
      radius={
        Math.sqrt(Math.sqrt(country[casesType])) *
        casesTypeColors[casesType].multiplier
      }
    >
      <Popup closeOnEscapeKey={true}>
        
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
    </>
  ))};
