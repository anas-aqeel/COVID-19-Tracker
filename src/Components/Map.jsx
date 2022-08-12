import React from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

function Maps() {
  const position = [51.505, -0.09]

  return (
      <div className="map">
        <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
}




export default Maps;
