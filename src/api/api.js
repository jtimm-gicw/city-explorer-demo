import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

// WEATHER
export async function getWeather(lat, lon) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: { lat, lon }
  });

  return response.data;
}

// MOVIES
export async function getMovies(city) {
  const response = await axios.get(`${BASE_URL}/movies`, {
    params: { searchQuery: city }
  });

  return response.data;
}