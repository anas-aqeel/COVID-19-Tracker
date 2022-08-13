import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MyContext } from "../Context/GlobalContext";
import { showDataOnMap } from "./graphCircles";
// import 'leaflet/dist/leaflet.css';

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function Maps({ queryType }) {
  let {
    data: { queryData },
  } = useContext(MyContext);
  let [position, setPosition] = useState([30, 70]);
  useEffect(() => {
    if (queryData.countryInfo) {
      setPosition([queryData.countryInfo.lat, queryData.countryInfo.long]);
    }
  }, [queryData]);

  let {
    data: { countryData },
  } = useContext(MyContext);
  return (
    <div className="map">
      <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countryData, queryType)}
        <ChangeMapView coords={position} />
      </MapContainer>
    </div>
  );
}

export default Maps;
