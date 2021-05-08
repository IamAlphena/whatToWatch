import React, { useState } from "react";
import MovieCard from "../components/Cards";
// import { ADD_FAVORITE } from "../utils/action";
// import { useStoreContext } from "../utils/GlobalState"
import API from "../utils/API";
import { Button } from 'react-bulma-components';

function SearchPage() {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState("");
  // const [state, dispatch] = useStoreContext()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getMovie(title).then((res) => {
      // console.log(res.data.results);
      const movieSearch = res.data.results.map((info) => ({
        title: info.title,
        id: info.id,
        release: info.release_date,
        image: `https://image.tmdb.org/t/p/w500/${info.poster_path}`,
      }));
      setResults(movieSearch);
    });
    // console.log("the button was click");
    // console.log(title);
    console.log(results);
  };

  // const addFavorite = () => {
  //   dispatch({
  //     type:ADD_FAVORITE,
  //     movie: results
  //   })
  // }

  // console.log(state)

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="searchBar"
          value={title}
          type="text"
          name="search"
          placeholder="Search for Movies"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button 
          color="danger"
          type="submit"
          value="Submit" > Search </Button>
        {/* <input className="button is-small" type="submit" value="Submit" /> */}
        {/* 
        <div>
          <input type="checkbox" id="tv" name="tv" />
          <label htmlFor="tv">Tv Show</label>
          <input type="checkbox" id="movie" name="movie" />
          <label htmlFor="movie">Movie</label>
        </div> */}
      </form>

      <div className="cardContainer">
        {results.length === 0 ? (
          <h2 className="fill"> No Results</h2>
        ) : (
          results.map((card) => (
            <MovieCard
              key={card.id}
              image={card.image}
              title={card.title}
              id={card.id}
            />
          ))
        )}
      </div>
    </>
  );
}

export default SearchPage;
