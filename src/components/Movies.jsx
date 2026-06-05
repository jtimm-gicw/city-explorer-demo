function Movies({ movies }) {

  if (!movies || movies.length === 0) {

    return (
      <section className="movies-section">

        <h2>Movies</h2>

        <p>No movies found.</p>

      </section>
    );
  }


  return (
    <section className="movies-section">

      <h2>Movies Related to Your Search</h2>

      <div className="movies-container">

        {movies.map((movie) => (

          <article
            key={`${movie.title}-${movie.released_on}`}
            className="movie-card"
          >

            {movie.image_url && (

              <img
                src={movie.image_url}
                alt={movie.title}
                className="movie-poster"
              />

            )}

            <h3>{movie.title}</h3>

            <p>
              <strong>Released:</strong>{' '}
              {movie.released_on}
            </p>

            <p>
              <strong>Average Votes:</strong>{' '}
              {movie.average_votes}
            </p>

            <p>
              <strong>Total Votes:</strong>{' '}
              {movie.total_votes}
            </p>

            <p>
              <strong>Popularity:</strong>{' '}
              {movie.popularity}
            </p>

            <p>{movie.overview}</p>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Movies;