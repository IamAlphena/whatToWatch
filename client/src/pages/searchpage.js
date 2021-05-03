import React, { useEffect, useState } from "react";
import MovieCard from "../components/Cards";
import axios from "axios";

const SearchPage = () => {
  const [title, setTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getMovie = async (title) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/search/multi/?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;

    let movieData = await axios.get(url);
    console.log(movieData);
  };

  useEffect(() => {
    getMovie(title);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* onclick on button */}

        <div>
          <input type="checkbox" id="tv" name="tv" />
          <label htmlFor="tv">Tv Show</label>
          <input type="checkbox" id="movie" name="movie" />
          <label htmlFor="movie">Movie</label>
        </div>
      </form>
      <h5>this is the sreach title{title}</h5>
      <div className="cardContainer">
        <MovieCard />
      </div>
    </>
  );
};

export default SearchPage;
