import { Icon } from 'leaflet';
import './App.css';
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet"

const App = () => {
  const [lonlats, setLonLat] = useState([]);
  const [names, setNames] = useState([]);
  const [address, setAddress] = useState([]);

  const zusIcon = new Icon({
    iconUrl: 'https://zuscoffee.com/wp-content/uploads/2022/03/zus_logo.png',
    iconSize: [38, 38]
  })

  useEffect(() => {
    fetch('/lonlat')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setLonLat(data);
    })
    .catch((err) => {
      console.error(err.message);
    });
    fetch('/name')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setNames(data);
    })
    .catch((err) => {
      console.error(err.message);
    });
    fetch('/address')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setAddress(data);
    })
    .catch((err) => {
      console.error(err.message);
    });
  }, [lonlats])

  return (
    <MapContainer center={[2.2686, 102.292]} zoom={13}>
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {lonlats.map((lonlat, index) => (
        <Marker
        key={index}
        position={[lonlat[1], lonlat[0]]}
        icon={zusIcon}>
          <Popup maxWidth={200}>
              <strong>{names[index]}</strong> <br />
              <hr />
              <strong>Address:</strong><br />{address[index]}
            </Popup>
          <Circle
              center={[lonlat[1], lonlat[0]]}
              radius={5000} // 5KM radius
              color="blue"
            />
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
