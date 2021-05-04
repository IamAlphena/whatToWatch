import React, { useState } from "react";
import MovieCard from "../components/Cards";
import API from "../utils/API"

function SearchPage() {
  const [title, setTitle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getBoth(title);
    console.log("the button was click");
    console.log(title);
  };


  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input 
        value={title}
        type="text" 
        name="search"
        placeholder="Search" 
        onChange={(e)=>setTitle(e.target.value)}
        />

        <input className="button is-small" type="submit" value="Submit" />

        <div>
          <input type="checkbox" id="tv" name="tv" />
          <label htmlFor="tv">Tv Show</label>
          <input type="checkbox" id="movie" name="movie" />
          <label htmlFor="movie">Movie</label>
        </div>
      </form>

      <div className="cardContainer">
        <MovieCard />
      </div>
    </>
  );
}

export default SearchPage;
