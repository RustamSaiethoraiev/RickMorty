import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Episode({ elem }) {
    let [name, setName] = useState('');
    axios.get(elem).then((response) => {
        setName(response.data.name);
    }, (error) => {
        console.log(error);
    });
    console.log(name);
    return (
        <p>{name}</p>
    )
}
export default Episode;