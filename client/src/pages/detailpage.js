import React, { useState } from 'react';
import API from "../utils/API";
import { useParams } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';


function MovieDetails() {
    const [results, setResults] = useState("");
   
    let {id} = useParams();
    console.log(id);
  

        API.getDetails(id)
        .then(res=>{
            console.log(res);
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
                <p>Where to watch data here</p>
            </div>
            </div>
    )
}

export default MovieDetails;