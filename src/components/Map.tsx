import React, { useRef, useEffect, useState, FC, SetStateAction, Dispatch } from "react";
import L, { LatLngTuple } from 'leaflet'
import "leaflet/dist/leaflet.css";

interface IProps{
    coordinates: LatLngTuple,
    data: any
}

const Map: FC<IProps> = ({coordinates, data}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      console.log(coordinates);
      
      const map = L.map(mapRef.current, {
        center: coordinates,
        zoom: 13,
        layers: [
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          })
        ]
      });
      L.marker(coordinates).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
  }, [mapRef]);

  return <div ref={mapRef} style={{ height: '100vh', width: '100vw' }} />;
};

export default Map;
