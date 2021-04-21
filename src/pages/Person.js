import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CHARACTERS_API } from '../api/rickandmorty'
import Loading from '../components/Loading'
import Episode from '../components/Episode'
function Person({ match }) {
    let { id } = match.params;
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${CHARACTERS_API}${id}`)
            .then((result) => {
                if (Object.keys(result).length !== 0) {
                    setPerson(result.data);
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    let { image, episode, status, species, gender, name } = person;
    return (
        loading ? (<Loading />) : (< div className='personPage' >
            <h2>{name}</h2>

            <div className="person">
                <div className="image">
                    <img alt={name} src={image} />
                </div>
                <div>
                    <ul className="collection">
                        <li className="collection-item" key={species}><strong>Species:</strong> {species}</li>
                        <li className="collection-item" key={gender}><strong>Gender:</strong> {gender}</li>
                        <li className="collection-item" key={status}><strong>Status:</strong> {status}</li>

                    </ul>

                </div>
                <div className="collection-item"><strong>Episode:</strong> <ul >{episode.map(elem => (
                    <li key={elem}><Episode elem={elem} /></li>
                ))}</ul></div>
            </div>


            <Link className="button" to="/">Back</Link>
        </div >)
    );
}
export default Person
