import { useEffect, useState } from "react";
import "./Home.scss";
import MovieTile from "../component/MovieTile";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Home() {
  const [movies, setMovies] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [genre, setGenre] = useState("");

  const getMovies = async () => {
    let url = "http://localhost:8080/movies";
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };
  const getMoviesBasedOnGenre = async () => {
    let url = `http://localhost:8080/movies/${genre}`;
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  console.log(movieGenreList);

  const handleSelect = (e) => {
    console.log(e);
    setGenre(e);
    getMoviesBasedOnGenre();
    if (e === "noOption") {
      getMovies();
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>Top movie db</h1>
      </nav>
      <div>
        <DropdownButton
          alignRight
          title="Choose Genre"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="noOption">Get all movies</Dropdown.Item>
          <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
          <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
        </DropdownButton>
      </div>

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
