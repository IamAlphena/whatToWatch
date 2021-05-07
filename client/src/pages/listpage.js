import React, { useEffect, useState } from "react";
import ListCard from "../components/Cards";
import { REMOVE_FAVORITE } from "../utils/action";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState"

// import API from "../utils/API"  -- possible need to get things connected

function ListPage() {
  const [state, dispatch] = useStoreContext();
  const [results, setResults] = useState("");

  console.log(state)
  // Code needed to make sure we're importing StoreProvider properly to pass into props below 
  // const removeFavorite = () => {
  //   dispatch({
  //     type: REMOVE_FAVORITE,
  //     _id: id
  //   })
  // }


  function getAPI() {
    API.getDetails()
      .then(res => {
        const showDetails = {
          title: res.data.original_title,
          id: res.data.id,
          image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
        };
        console.log(showDetails)
        setResults(showDetails)
      })
  }


  function useAPI() {
    if (!state) {
      console.log("empty list")
    } else {
      for (var i = 0; i < state.length; i++) {
        getAPI(state[i])
      }
    }
  }
  //how to render while hittting api calls per item on list ? .map vs foreach()

  //   useEffect(() =>{
  //     API.getDetails()
  //     .then(res=>{
  //         const showDetails = {
  //                     title: res.data.original_title,
  //                     id: res.data.id,
  //                     image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
  //                   };
  //           setResults(showDetails)
  //         })
  // }, [])

  return (
    <>
      <div className="cardContainer">

        <h2>wooorking for the weeekend</h2>
        <button onClick={useAPI}> Render </button>

        {/* {state.length === 0 ? (<h2> No Results</h2>) : (state.map(card => (
          <ListCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            // removeFavorite={removeFavorite}
            />
        )))
        } */}
      </div>
    </>
  );
}

export default ListPage;
