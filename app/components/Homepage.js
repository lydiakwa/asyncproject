import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//to synch component with state
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//use selector is global state

import { getMaps } from '../redux/maps';

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getMaps(token));
    }
  }, []);
  //empty second argument means it only synchs once

  const maps = useSelector((state) => state.maps);
  console.log(maps);

  const position = [51.505, -0.09];
  return (
    <div>
      <h1>Home</h1>
      {maps.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="map-container">
          <MapContainer
            center={[maps[0].lat, maps[0].long]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '500px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[maps[0].lat, maps[0].long]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default Homepage;
