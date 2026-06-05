import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Movies from './components/Movies';
import { getWeather, getMovies } from './api/api';
import './App.css';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  async function handleSearch(city, lat, lon) {
    try {
      setError(null);

      // Save basic location info
      setLocation({ city, lat, lon });

      // WEATHER REQUEST
      const weatherData = await getWeather(lat, lon);
      setWeather(weatherData);
      // Weather Check
      console.log("weatherData:", weatherData);
      console.log("isArray:", Array.isArray(weatherData));
      // MOVIES REQUEST
      const movieData = await getMovies(city);
      setMovies(movieData);
      
    } catch (err) {
      console.error(err);
      setError('Something went wrong fetching data.');
    }
  }

  return (
    <div className="app-container">

      <h1>🌆 City Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {error && <p className="error">{error}</p>}

      {location && (
        <div className="results">

          <h2>📍 Results for {location.city}</h2>

          <Weather weather={weather} />
          <Movies movies={movies} />

        </div>
      )}

    </div>
  );
}