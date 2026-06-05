import { useState } from 'react';

function SearchBar({ onSearch }) {

  // WHAT:
  // Store city input.
  //
  // WHY:
  // React controls the form data.

  const [city, setCity] = useState('');

  // Mock Seattle coordinates for demo purposes.
  const [lat, setLat] = useState('47.6062');
  const [lon, setLon] = useState('-122.3321');


  function handleSubmit(event) {

    event.preventDefault();

    onSearch(city, lat, lon);
  }


  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) =>
          setCity(event.target.value)
        }
      />

      <input
        type="text"
        placeholder="Latitude"
        value={lat}
        onChange={(event) =>
          setLat(event.target.value)
        }
      />

      <input
        type="text"
        placeholder="Longitude"
        value={lon}
        onChange={(event) =>
          setLon(event.target.value)
        }
      />

      <button type="submit">
        Explore
      </button>

    </form>
  );
}

export default SearchBar;