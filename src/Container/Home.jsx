import { useEffect, useState } from "react";
import "./Home.scss";
import MovieTile from "../component/MovieTile";

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let url = "http://localhost:8080/movies";
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <nav className="navbar">
        <h1>Top movie db</h1>
      </nav>
      <section className="movie-list">
        {movies.map((movie) => (
          // <p className="movie">{movie.title}</p>
          <MovieTile movie={movie} />
        ))}
      </section>
    </>
  );
}

export default Home;
