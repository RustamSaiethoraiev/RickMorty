import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
function Character({ item }) {
    let { name, image, id } = item;
    let history = useHistory();
    let { url } = useRouteMatch();
    return (
        <div className='character' onClick={() => history.push(`${url}${id}`)}>
            <h4>{name}</h4>
            <img src={image} alt={name}></img>
        </div >
    );
}
export default Character