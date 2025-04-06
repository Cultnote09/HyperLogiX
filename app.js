import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaTemperatureLow, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

export default function App() {
  const position = [28.6139, 77.2090]; // New Delhi coords
  const markers = [
    { position: [28.6139, 77.2090], label: "Vehicle 1" },
    { position: [28.6200, 77.2100], label: "Vehicle 2" },
    { position: [28.6250, 77.2150], label: "Vehicle 3" }
  ];

  return (
    <div className="p-6 font-sans bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Logistics Dashboard</h1>
        <div className="flex gap-4">
          <button className="bg-white border px-4 py-2 rounded">🚨 Alerts</button>
          <button className="bg-black text-white px-4 py-2 rounded">📦 New Shipment</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Fleet Tracking */}
        <div className="col-span-2 bg-gray-100 rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Live Fleet Tracking</h2>
          <MapContainer center={position} zoom={12} className="h-[400px] rounded">
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.label}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <Metric label="Fuel Efficiency" value={85} />
          <Metric label="CO₂ Emissions" value={75} />
          <Metric label="Delivery Accuracy" value={92} />
        </div>

        {/* IoT Sensor Data */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">IoT Sensor Data</h2>
          <div className="flex flex-col gap-3">
            <Sensor icon={<FaTemperatureLow />} label="24°C" />
            <Sensor icon={<WiHumidity />} label="65% RH" />
            <Sensor icon={<FaLock />} label="Secured" />
            <Sensor icon={<FaMapMarkerAlt />} label="On Route" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Metric = ({ label, value }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded">
      <div className="h-full bg-black rounded" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Sensor = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-lg">
    {icon}
    <span>{label}</span>
  </div>
);
