import React from 'react';
import { Card } from 'react-bulma-components';

function MovieCard(props) {
    return (
       <Card style={{ width: 150, margin: 10, height: 'auto' }}>
            <Card.Image
        size="3by4"
        src={props.image}
         /> 
         <Card.Header.Title style={{height: 'auto'}}>{props.title}</Card.Header.Title>
         <button className="is-primary">Save</button>
         </Card>            
        )
}

export default MovieCard;