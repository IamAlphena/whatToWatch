import React, { useState } from "react";
import ListCard from "../components/Cards";
import StoreProvider from '../utils/GlobalState';

// import API from "../utils/API"  -- possible need to get things connected

function ListPage() {

    // Code needed to make sure we're importing StoreProvider properly to pass into props below 
  
    return (
    <>
      <div className="cardContainer">
        {favorites.length === 0 ? (<h2> No Results</h2>) : (favorites.map(card => (
          <ListCard key={card.id} id={card.id} image={card.image} title={card.title}/>
        ))) 
      } 
      </div>
    </>
  );
}

export default ListPage;
