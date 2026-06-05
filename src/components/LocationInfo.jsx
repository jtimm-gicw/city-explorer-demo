export default function LocationInfo({ location }) {
  return (
    <div className="location-info">
      <h2>📍 {location.city}</h2>
      <p>Lat: {location.lat}</p>
      <p>Lon: {location.lon}</p>
    </div>
  );
}