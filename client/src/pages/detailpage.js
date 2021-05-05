import React, { useEffect, useState } from 'react';
import API from "../utils/API";
import { useParams } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import WatchCard from '../components/ProviderDetails'

function MovieDetails() {
    const [results, setResults] = useState("");
    const [providers, setProviders] = useState("");
   
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
        
    useEffect(() =>{
        API.providers(id)
        .then(res=>{
            const showProvider = {
                       buy: res.data.results.US.buy,
                       flatrate: res.data.results.US.flatrate,
                       rent: res.data.results.US.rent
                      };
            console.log(showProvider)
            setProviders(showProvider)
            })
    }, [])

    return (
        <div>
            <DetailsCard 
            key={results.id}
            image={results.image}
            title={results.title}
            overview={results.overview}
            release={results.release}
            rating={results.rating}
            />

            <div className="whereToWatch">
                <p>Buy</p>
                {providers.length === 0 ? (<h2>Not Currently Available</h2>) : (providers.buy.map(
                    provider => (
                        <WatchCard 
                        key={provider.provider_id}
                        image={provider.logo_path}
                        provider={provider.provider_name}
                        />

                    )
                ))}

                <p>Rent</p>
                {providers.length === 0 ? (<h2>Not Currently Available</h2>) : (providers.rent.map(
                    provider => (
                        <WatchCard 
                        key={provider.provider_id}
                        image={provider.logo_path}
                        provider={provider.provider_name}
                        />

                    )
                ))}

                <p>Subscription</p>
                {providers.length === 0 ? (<h2>Not Currently Available</h2>) : (providers.flatrate.map(
                    provider => (
                        <WatchCard 
                        key={provider.provider_id}
                        image={provider.logo_path}
                        provider={provider.provider_name}
                        />

                    )
                ))}
            </div>
            </div>
    )
}

export default MovieDetails;