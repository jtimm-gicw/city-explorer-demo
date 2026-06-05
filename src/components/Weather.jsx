function Weather({ weather }) {

  if (!weather || weather.length === 0) {

    return (
      <section className="weather-section">

        <h2>Weather Forecast</h2>

        <p>No weather data available.</p>

      </section>
    );
  }


  return (
    <section className="weather-section">

      <h2>Weather Forecast</h2>

      <div className="weather-container">

        {weather.map((forecast, index) => (

          <article
            key={index}
            className="weather-card"
          >

            <h3>{forecast.date}</h3>

            <p>{forecast.description}</p>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Weather;