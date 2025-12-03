// src/Map.jsx
import { MapContainer, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        marginTop: "1.5rem",
        border: "2px solid #ccc", // così vedi chiaramente il contenitore
      }}
    >
      <MapContainer
        center={[47.3734, 8.538]} // Bahnhofstrasse circa
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
