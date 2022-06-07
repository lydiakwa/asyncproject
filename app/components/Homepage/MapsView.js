import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function MapCentre({ map }) {
  const leafletMap = useMap();

  //does the condition based on the second argument, dependency array
  useEffect(() => {
    console.log(map);
    leafletMap.setView([map.lat, map.long]);
  }, [map.lat, map.long]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[map.lat, map.long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

const MapsView = () => {
  const maps = useSelector((state) => state.maps);

  const { id } = useParams();

  const map = maps.find((map) => map.id === parseInt(id)) || maps[0];
  return (
    <div className="map-container">
      <MapContainer
        center={[map.lat, map.long]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '500px' }}
      >
        <MapCentre map={map} />
      </MapContainer>
    </div>
  );
};

export default MapsView;
