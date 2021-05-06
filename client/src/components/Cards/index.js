import React from 'react';
import { Card } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';


function MovieCard(props) {
    const history = useHistory();
    return (
       <Card style={{ width: 150, margin: 10, height: 'auto' }}
           >
            <Card.Image
        size="3by4"
        src={props.image}
        onClick={() => history.push(`/details/${props.id}`)}
         /> 
         <Card.Header.Title style={{height: 'auto'}}>{props.title}</Card.Header.Title>
         <button className="is-primary" onClick={props.addFavorite}>Save</button>
         </Card>            
        )
}

export default MovieCard;