import "./MovieTile.scss";

const MovieTile = ({ movie }) => {
  const {
    id,
    title,
    runtime,
    genres,
    director,
    actors,
    plot,
    posterUrl,
    year,
  } = movie;

  return (
    <div className="movie-list-grid" onClick={() => alert(id)}>
      <p>{title}</p>
      <img src={posterUrl} alt="movie poster"></img>
      <p>Directed by {director}</p>
      <p>Starring {actors}</p>
      <p>plot: {plot}</p>
      <p>Runtime {runtime}</p>
      <p>Year Released {year}</p>
      <p>Genres {genres}</p>

      <p>Edit</p>
      <p>Delete</p>
    </div>
  );
};

export default MovieTile;
