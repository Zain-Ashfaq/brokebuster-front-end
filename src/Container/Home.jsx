import "./Home.scss";

function Home() {
  return (
    <>
      <nav className="navbar">
        <h1>Top movie db</h1>
      </nav>
      <section className="movie-list">
        <p className="movie">movie 1</p>
        <p className="movie">movie 2</p>
        <p className="movie">movie 3</p>
        <p className="movie">movie 4</p>
        <p className="movie">movie 5</p>
        <p className="movie">movie 6</p>
        {/* <p className="movie">movie 7</p>
        <p className="movie">movie 8</p>
        <p className="movie">movie 9</p>
        <p className="movie">movie 10</p> */}
      </section>
    </>
  );
}

export default Home;
