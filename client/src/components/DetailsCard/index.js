import React from 'react';


function DetailsCard(props) {
    return(
        <>
        <div className="details-container">
            <div className="card">
                <img src={props.image}
                    alt={props.title} />
        </div>
                <div className="desc">
                    <p>{props.overview}</p>
                    <p>{props.release}</p>
                    </div>
            </div>
            <div className="flexspace">
            <button className="is-primary" onClick={props.addFavorite}>Save</button>
                <div className="rating"> {props.rating} </div>
            </div>

   </>
    )
}

export default DetailsCard;