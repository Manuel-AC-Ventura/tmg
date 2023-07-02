import styles from './Search.module.css'
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid/index.js";
import {useEffect, useState} from "react";


export const Search = ()=>{
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        if(search.length >= 3){
            fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&page=1`,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ3NmMwYWQxZDFmMDFjYTZlZThkZmU5NTRmZWM2YyIsInN1YiI6IjY0YTA5MTMyOGMwYTQ4MDBhZTI0MGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I6Ju4W89keiSIrDfwMsrxBj0dghclosb9Y--AnmT1h8'
                }
            })
                .then(req=>req.json())
                .then(res=>{
                    console.log(res.results)
                })
                .catch(error=>console.log(error))
        }
    }, [search])

    return(
        <form className={`w-11/12 h-14 flex my-2 self-center ${styles.search}`} action={`/search/${search}`}>
            <input
                type="text"
                name="movie"
                value={search}
                placeholder="Pesquisar..."
                onChange={e=>setSearch(e.target.value)}
                className={`h-full w-10/12 px-2 font-semibold ${styles.input}`}
            />
            <button className="h-full w-2/12 p-2">
                <MagnifyingGlassIcon className="w-full h-full" />
            </button>
        </form>
    )
}