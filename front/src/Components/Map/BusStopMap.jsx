import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom bus stop icon
const busStopIcon = new L.Icon({
  iconUrl: "https://media.istockphoto.com/id/1484547334/photo/blue-map-pointer-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=YxG1uoDUfpbBF9uyYbPpHnWVjowP0a-IGk9ugyFVwbo=",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const BusStopMap = () => {
  const busStops = [
    { id: 1, name: "Stop 1", position: [31.5204, 74.3587] }, // Lahore
    { id: 2, name: "Stop 2", position: [29.5190, 71.6369] }, // Bahawalpur
    { id: 3, name: "Stop 3", position: [33.6844, 73.0479] }, // Islamabad
    { id: 4, name: "Stop 4", position: [24.8607, 67.0011] }, // Karachi
    { id: 5, name: "Stop 5", position: [33.9061, 73.3903] }, // Murree
    { id: 6, name: "Stop 6", position: [ 30.1798, 66.9750] }, // Quetta
    { id: 7, name: "Stop 7", position: [ 34.0151, 71.5249] }, // Peshawar
    { id: 7, name: "Stop 7", position: [ 35.8818 , 74.4642] }, //gilgit
    { id: 8, name: "Stop 8", position: [  30.1575 , 71.5249] }, //Multan
  ];

  return (
    <>
      <h1 className="py-8 font-mono text-4xl font-bold text-center text-red-700 bg-gray-100">
        Find Our Bus Stops
      </h1>
      <div className="flex items-center justify-center py-12 bg-gray-100">
        <div className="w-full max-w-4xl h-96">
          <MapContainer
            center={[31.5204, 74.3587]}
            zoom={7}
            className="w-full h-full rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {busStops.map((stop) => (
              <Marker
                key={stop.id}
                position={stop.position}
                icon={busStopIcon}
              >
                <Popup>{stop.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default BusStopMap;
