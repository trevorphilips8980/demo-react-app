import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const UserLocationMap = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          setErrorMessage(null); // Clear any error messages
        },
        (error) => {
          // Handle error based on the error code
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage(
                "Please allow location access to display the map."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setErrorMessage("The request to get your location timed out.");
              break;
            default:
              setErrorMessage("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1 className="text-lg my-2">Your Location on Map:</h1>
      {location ? (
        <MapContainer
          center={[location.lat, location.lon]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>Your current location</Popup>
          </Marker>
        </MapContainer>
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p> // Display error message
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default UserLocationMap;
