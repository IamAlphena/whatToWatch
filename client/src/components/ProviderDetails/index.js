import React from 'react'

function WatchCard(props){
    return (
        <>
            <img
                src= {`https://image.tmdb.org/t/p/w500/` + props.image}
                alt={props.provider} />
            <p>{props.provider}</p>
        </>
    )
}

export default WatchCard;