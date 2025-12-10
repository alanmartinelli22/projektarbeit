import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import teildatensatz from "./assets/Teildatensatz.json";

const messpunkte = [
  { id: 329, name: "Bahnhofstrasse (Mitte)", coords: [47.3729, 8.5377] },
  { id: 331, name: "Bahnhofstrasse (Nord)", coords: [47.376, 8.5388] },
  { id: 330, name: "Bahnhofstrasse (Süd)", coords: [47.3694, 8.5383] },
];

export const Map = () => {
  return (
    <div style={{ height: "60vh", width: "100%", marginTop: "1.5rem" }}>
      <MapContainer
        center={[47.3737, 8.5385]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {messpunkte.map((p) => {
          const rows = teildatensatz.filter((d) => d.location_id === p.id);
          const first = rows[0];

          return (
            <Marker key={p.id} position={p.coords}>
              <Popup>
                <strong>{p.name}</strong>
                <br />
                Beispielstunde: {first?.timestamp}
                <br />
                Fussgänger gesamt: {first?.pedestrians_count}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
