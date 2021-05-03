import React from "react";

function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="Search" />

        <div>
          <input type="checkbox" id="tv" name="tv" />
          <label for="tv">Tv Show</label>
          <input type="checkbox" id="movie" name="movie" />
          <label for="movie">Movie</label>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
