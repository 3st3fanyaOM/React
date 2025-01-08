//import React from 'react'

function MovieList() {
  const movies = ["Titanic", "Poltergueist", "Regreso al futuro"];
  const htmlMovies = movies.map((e, i) => {
    return (
      <p key={e}>
        {i} | {e}
      </p>
    );
  });
  return (
    <section>
      <h2>Movies</h2>

      {htmlMovies}
    </section>
  );
}

export default MovieList;
