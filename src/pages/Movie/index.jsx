import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header/index.jsx";


export const Movie = ()=>{
    const [movie, setMovie] = useState([])
    const params = useParams()

    useEffect(()=>{
        async function getMovie(){
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=pt-BR`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ3NmMwYWQxZDFmMDFjYTZlZThkZmU5NTRmZWM2YyIsInN1YiI6IjY0YTA5MTMyOGMwYTQ4MDBhZTI0MGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I6Ju4W89keiSIrDfwMsrxBj0dghclosb9Y--AnmT1h8'
                }
            })
                .then(req=>req.json())
                .then(res=>{
                    setMovie(res)
                    console.log(res)
                })
                .catch(error=>console.log(error))
        }
        getMovie()
    }, [params.id])

    return(
        <>
            <Header/>
            {
                movie && (
                    <article className="px-3 mt-5">
                        <div className="flex gap-2">
                            <img
                                className="w-40 m-0"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title || movie.name}
                            />
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg text-left font-semibold">{movie.title || movie.name}</h2>
                                <p>{movie.release_date}</p>
                                <ul>{
                                    movie.genres.map(genre=><li key={genre.id}>{genre.name}</li>)
                                }</ul>
                            </div>
                        </div>
                        <p className="font-lg text-justify mt-2"><b>Sinopese:</b> {movie.overview}</p>
                    </article>
                )
            }
        </>
    )
}