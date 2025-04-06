// File: src/App.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTemperatureHigh, FaLock, FaMapMarkerAlt } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

export default function App() {
  const markers = [
    { position: [28.6139, 77.209], label: 'Truck 1' },
    { position: [28.6145, 77.210], label: 'Truck 2' },
    { position: [28.615, 77.211], label: 'Truck 3' },
  ];

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">HyperLogiX</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Alerts</button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">New Shipment</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Live Fleet Tracking */}
        <div className="col-span-2 bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Live Fleet Tracking</h2>
          <MapContainer center={[28.6139, 77.209]} zoom={12} scrollWheelZoom={false} className="h-96 rounded">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, idx) => (
              <Marker key={idx} position={marker.position}>
                <Popup>{marker.label}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
          <div className="mb-2">
            <span>Fuel Efficiency</span>
            <div className="w-full bg-gray-300 rounded h-3 mt-1">
              <div className="bg-black h-3 rounded" style={{ width: '85%' }}></div>
            </div>
            <span className="text-sm">85%</span>
          </div>
          <div className="mb-2">
            <span>CO₂ Emissions</span>
            <div className="w-full bg-gray-300 rounded h-3 mt-1">
              <div className="bg-black h-3 rounded" style={{ width: '75%' }}></div>
            </div>
            <span className="text-sm">75%</span>
          </div>
          <div>
            <span>Delivery Accuracy</span>
            <div className="w-full bg-gray-300 rounded h-3 mt-1">
              <div className="bg-black h-3 rounded" style={{ width: '92%' }}></div>
            </div>
            <span className="text-sm">92%</span>
          </div>
        </div>

        {/* IoT Sensor Data */}
        <div className="bg-gray-100 p-4 rounded shadow-md col-span-1">
          <h2 className="text-lg font-semibold mb-4">IoT Sensor Data</h2>
          <div className="flex items-center gap-2 mb-2">
            <FaTemperatureHigh />
            <span>24°C</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <WiHumidity />
            <span>65% RH</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaLock />
            <span>Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>On Route</span>
          </div>
        </div>
      </div>
    </div>
  );
}
