import { useEffect, useState } from "react";
import Header from "../components/Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const pawIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -30],
});

const CARD_COLORS = [
  "bg-sunny-yellow",
  "bg-berry-pink",
  "bg-grass-green",
  "bg-sky-blue",
  "bg-berry-pink",
  "bg-sunny-yellow",
];

export default function Contact() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/data/locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-sky-blue paper-texture flex flex-col">
      <Header />

      <div className="shrink-0 px-10 py-4">
        <h1 className="font-display font-black text-4xl mb-1">
          Contactează‑ne!
        </h1>
        <p className="font-handwriting text-lg opacity-70">
          Ne găsești în mai multe orașe din România: 
        </p>
      </div>

      <div className="flex-grow grid grid-cols-2 gap-6 px-8 pb-10">

        <div className="grid grid-cols-2 gap-1 h-full">
          {locations.slice(0, 6).map((loc, index) => (
            <div
              key={loc.city}
              className={`
                max-h-[200px]
                max-w-[300px]
                rounded-wiggly
                sketch-border
                flex flex-col items-center justify-center
                text-center
                p-2
                ${CARD_COLORS[index % CARD_COLORS.length]}
              `}
            >
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-display font-black text-xl mb-1">
                {loc.city}
              </h3>

              <p className="font-sketch text-lg opacity-80 mb-2">
                {loc.address}
              </p>

              <div className="font-sketch text-sm space-y-1">
                <div>📞 {loc.phone}</div>
                <div>✉️ {loc.email}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full rounded-wiggly overflow-hidden sketch-border">
          <MapContainer
            center={[45.9432, 24.9668]}
            zoom={6}
            className="h-full w-full"
          >
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((loc) => (
              <Marker
                key={loc.city}
                position={loc.position}
                icon={pawIcon}
              >
                <Popup>
                  <strong>{loc.city}</strong><br />
                  {loc.address}<br />
                  📞 {loc.phone}<br />
                  ✉️ {loc.email}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </div>
  );
}