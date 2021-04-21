import { useState, useEffect } from 'react'
import axios from 'axios'
import { CHARACTERS_API } from '../api/rickandmorty'
import Character from './Character'
import Filter from '../components/Filter'
function Characters() {
    const [url, setUrl] = useState(CHARACTERS_API)
    const [characters, setCharacters] = useState([]);
    const [searchGender, setSearchGender] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${url}?page=${page}&gender=${searchGender}&status=${searchStatus}`)
            .then((result) => {
                // if (Object.keys(result).length !== 0) {
                //     setCharacters(result.data.results);
                //     setInfo(result.data.info);
                // }
                setCharacters(result.data.results)
                setInfo(result.data.info)
            })
            .catch((error) => {
                console.log(error)
                setPage(1)
            })
    }, [page, searchGender, searchStatus]);
    useEffect(() => {
        // console.log("searchGender: ", searchGender);
        // console.log("searchStatus: ", searchStatus);
        console.log("page: ", page);
        console.log("info: ", info);

    })
    const nextHandler = (event) => {
        event.preventDefault()
        if (page < info.pages) {
            setPage(page + 1)
        } else setPage(1)
    }
    const previosHandler = (event) => {
        event.preventDefault()
        if (page > 1) {
            setPage(page - 1)
        } else setPage(info.pages)
    }
    console.log("characters: ", characters);
    return (
        <div className="container">
            <button onClick={previosHandler}>Previos</button>
            <button onClick={nextHandler}>Next</button>
            <p>{page}/{info.pages}</p>
            <p>{Math.ceil(info.count / 12)}</p>

            <h1>Rick and Morty</h1>
            <Filter setSearchGender={setSearchGender} setSearchStatus={setSearchStatus} />
            <div className="characters">
                {characters.map(item => <Character key={item.id} item={item} />)}
            </div >
        </div>

    )

}

export default Characters
