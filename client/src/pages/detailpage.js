import React, { useEffect, useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_FAVORITE } from "../utils/action";
import API from "../utils/API";
import { useParams } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import WatchCard from '../components/ProviderDetails';



function MovieDetails() {
    const [results, setResults] = useState("");
    const [buy, setBuy] = useState("");
    const [rent, setRent] = useState("");
    const [flatrate, setFlatrate] = useState("");
    const [state, dispatch] = useStoreContext()

    let {id} = useParams();
  
    useEffect(() =>{
        API.getDetails(id)
        .then(res=>{
            const showDetails = {
                        title: res.data.original_title,
                        id: res.data.id,
                        release: res.data.release_date,
                        image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
                        backsplash:  `https://image.tmdb.org/t/p/w500/${res.data.backdrop_path}`,
                        overview: res.data.overview,
                      };
              setResults(showDetails)
            })
    }, [])

    const addFavorite = () => {
    dispatch({
      type:ADD_FAVORITE,
      movie: id
    })
}
        
    useEffect(() =>{
        API.providers(id)
        .then(res=>{
            console.log(res)
            const showBuy = res.data.results.US.buy;
            console.log(showBuy)
            setBuy(showBuy)
            const showFlatrate = res.data.results.US.flatrate;
            console.log(showFlatrate)
            setFlatrate(showFlatrate)
            const showRent = res.data.results.US.rent;
            console.log(showRent)
            setRent(showRent)
            })
    }, [])

    console.log(state)

    return (
        <div>
            <DetailsCard 
            key={results.id}
            image={results.image}
            title={results.title}
            overview={results.overview}
            release={results.release}
            rating={results.rating}
            addFavorite={addFavorite}
            />

            <div className="whereToWatch">
           
                <p>Buy</p>
                <div className="providerBox">
                {!buy ? (<h2>Not Currently Available</h2>) : (buy.map(
                    buy => (
                        <WatchCard 
                        key={buy.provider_id}
                        image={buy.logo_path}
                        provider={buy.provider_name}
                        />

                    )
                ))}
                    </div>
                    <div className="spacer"></div>
                <p>Rent</p>
                {!rent ? (<h2>Not Currently Available</h2>) : (rent.map(
                    rent => (
                        <WatchCard 
                        key={rent.provider_id}
                        image={rent.logo_path}
                        provider={rent.provider_name}
                        />

                    )
                ))}
                    <div className="spacer"></div>
                <p>Subscription</p>
                {!flatrate ? (<h2>Not Currently Available</h2>) : (flatrate.map(
                    flatrate => (
                        <WatchCard 
                        key={flatrate.provider_id}
                        image={flatrate.logo_path}
                        provider={flatrate.provider_name}
                        />

                    )
                ))}
            </div>
            </div>
    )
}

export default MovieDetails;