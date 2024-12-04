import React from "react";
import Hero from "../hero/Hero.jsx";

function Home({ movies }) {
  return <Hero movies={movies}></Hero>;
}

export default Home;
