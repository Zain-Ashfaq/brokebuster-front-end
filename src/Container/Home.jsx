import { useEffect, useState } from "react";
import "./Home.scss";
import MovieTile from "../component/MovieTile";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let url = "http://localhost:8080/movies";
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };
  const getMoviesBasedOnGenre = async (genre) => {
    let url = `http://localhost:8080/movies/${genre}`;
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleSelect = async (e) => {
    if (e === "noOption") {
      getMovies();
    } else {
      console.log(e);

      getMoviesBasedOnGenre(e);
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
          <Dropdown.Item eventKey="Adventure">Adventure</Dropdown.Item>
          <Dropdown.Item eventKey="Animation">Animation</Dropdown.Item>
          <Dropdown.Item eventKey="Crime">Crime</Dropdown.Item>
          <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
          <Dropdown.Item eventKey="Fantasy">Fantasy</Dropdown.Item>
          <Dropdown.Item eventKey="Sci-Fi">Sci-Fi</Dropdown.Item>
        </DropdownButton>
      </div>

      <section className="movie-list">
        {movies.map((movie) => (
          <MovieTile movie={movie} />
        ))}
      </section>
    </>
  );
}

export default Home;
