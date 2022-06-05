import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Homepage() {
  const position = [51.505, -0.09];
  return (
    <div>
      <h1>Home</h1>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '500px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Homepage;
