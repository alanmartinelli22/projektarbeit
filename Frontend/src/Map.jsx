import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Feste Messstandorte entlang der Bahnhofstrasse.
// Diese Daten sind klein und ändern sich nicht, deshalb sind sie im Frontend definiert.
const messpunkte = [
  { id: 331, name: "Bahnhofstrasse (Nord)", coords: [47.375465, 8.539143] },
  { id: 329, name: "Bahnhofstrasse (Mitte)", coords: [47.372007, 8.538433] },
  { id: 330, name: "Bahnhofstrasse (Süd)", coords: [47.368568, 8.539722] },
  { id: 670, name: "Lintheschergasse", coords: [47.37538, 8.538287] },
];

// Erstellt einen externen Link zu Google Street View für einen Standort
function streetViewLink(lat, lon) {
  return `https://www.google.com/maps?layer=c&cbll=${lat},${lon}`;
}

export const Map = () => {
  return (
    <div style={{ height: "60vh", width: "100%", marginTop: "1.5rem" }}>
      {/* Zentrale Karte der Bahnhofstrasse */}
      <MapContainer
        center={[47.3729, 8.5388]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Hintergrundkarte von OpenStreetMap */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker für alle Messstandorte */}
        {messpunkte.map((p) => (
          <Marker key={p.id} position={p.coords}>
            <Popup>
              <strong>{p.name}</strong>
              <br />
              {/* Externer Link für zusätzliche manuelle Exploration */}
              <a
                href={streetViewLink(p.coords[0], p.coords[1])}
                target="_blank"
                rel="noreferrer"
              >
                Street View öffnen
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
