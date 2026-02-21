import  { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Form from "./Form";

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const GoogleMapComponent = ({ locationLink }) => {
  // Parse the link to extract latitude and longitude
  const coordinates = locationLink.match(/@([-\d.]+),([-\d.]+)/);
  if (!coordinates || coordinates.length < 3) {
    // Handle case where coordinates are not found or in an unexpected format
    return <div className="text-red-500">Error: Invalid location link</div>;
  }

  const latitude = coordinates[1];
  const longitude = coordinates[2];

  const position = [parseFloat(latitude), parseFloat(longitude)];

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (event, formData) => {
    event.preventDefault();
    console.log(formData);
    // Add your form submission logic here
    setIsFormOpen(false);
  };

  return (
    <div className="w-full h-full rounded-xl relative p-8 max-w-8xl mx-auto">
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Form onClose={handleFormClose} onSubmit={handleFormSubmit} />
        </div>
      )}
      <MapContainer
        center={position}
        zoom={13}
        className="h-full rounded-2xl z-0 ring shadow-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={redIcon}>
          <Popup>
            <span className="font-semibold p-3">
              <span className="text-blue-600">Neuro</span>
              <span>Revive</span>
              <span className="text-green-600"> 360</span>
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMapComponent;



