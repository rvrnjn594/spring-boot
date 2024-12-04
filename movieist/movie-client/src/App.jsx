import "./App.css";
import api from "./api/axiosConfig.js";
import { useState, useEffect } from "react";

import { Layout } from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";

function App() {
  const [movies, setMovies] = useState(null);

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
      // console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => getMovies, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
