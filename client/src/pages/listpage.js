import React, { useState } from "react";
import ListCard from "../components/Cards";
import { REMOVE_FAVORITE } from "../utils/action";
import { useStoreContext } from "../utils/GlobalState"

// import API from "../utils/API"  -- possible need to get things connected

function ListPage() {

    // Code needed to make sure we're importing StoreProvider properly to pass into props below 
  const removeFavorite = () =>{
    dispatch({
      type:REMOVE_FAVORITE,
       _id: id
    })
  }
    return (
    <>
      <div className="cardContainer">
        {favorites.length === 0 ? (<h2> No Results</h2>) : (favorites.map(card => (
          <ListCard key={card.id} id={card.id} image={card.image} title={card.title} removeFavorite={removeFavorite}/>
        ))) 
      } 
      </div>
    </>
  );
}

export default ListPage;
