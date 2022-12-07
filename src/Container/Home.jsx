import { useEffect, useState } from "react";
import "./Home.scss";
import MovieTile from "../component/MovieTile";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import MultiRangeSlider from "multi-range-slider-react";
import ReactSlider from "react-slider";

function Home() {
  const [movies, setMovies] = useState([]);
  const [minValue, set_minValue] = useState(77);
  const [maxValue, set_maxValue] = useState(200);

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
  const getMoviesBasedOnRuntime = async () => {
    const test1 = minValue;
    const test2 = maxValue;
    let url = `http://localhost:8080/movies/${test1}/${test2}`;
    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
    console.log("test", maxValue);
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
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);

    console.log(minValue, maxValue);
  };
  useEffect(
    () => {
      getMoviesBasedOnRuntime();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [minValue]
  );
  useEffect(
    () => {
      getMoviesBasedOnRuntime();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps

    [maxValue]
  );

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
      <div>
        <MultiRangeSlider
          min={0}
          max={300}
          step={10}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <div></div>

      <section className="movie-list">
        {movies.map((movie) => (
          <MovieTile movie={movie} />
        ))}
      </section>
    </>
  );
}

export default Home;
