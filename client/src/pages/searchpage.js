import React from 'react'
import SearchBar from "../components/Searchbar"
import MovieCard from "../components/Cards"

function SearchPage() {
    return(<>
    <SearchBar/>
    
    <div class="cardContainer">
        <MovieCard />

    </div>
    </>
    )
}

export default SearchPage;