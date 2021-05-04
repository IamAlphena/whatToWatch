import React from 'react';
import { Card } from 'react-bulma-components';

function MovieCard(props) {
    return (
       <Card style={{ width: 150, margin: 'auto'}}>
            <Card.Image
        size="3by4"
        src={props.image}
         /> 
         </Card>            
        )
}

export default MovieCard;