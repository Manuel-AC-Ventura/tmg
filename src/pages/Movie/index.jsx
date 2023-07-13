import {API_KEY} from "../../App.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header/index.jsx";
import {Trailer} from "../../components/Trailer/index.jsx";


export const Movie = ()=>{
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [trailer, setTrailer] = useState(false)

    useEffect(()=>{
        async function getMovie(){
            await fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?language=pt-BR`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            })
                .then(req=>req.json())
                .then(res=>{
                    setMovie(res)
                })
                .catch(error=>{
                    console.log(error)
                    setTimeout(getMovie(), 10000)
                })
        }
        getMovie()
    }, [params.id])

    return(
        <>
            <Header/>
            {
                <article className="px-3 mt-5 mb-3">
                    <div className="flex gap-2">
                        <img
                            className="w-40 m-0"
                            alt={movie.title || movie.name}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            onClick={() => setTrailer(!trailer)}
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg text-left font-semibold">{movie.title || movie.name}</h2>
                            <p>{movie.release_date}</p>
                            {movie.number_of_seasons && (
                                <p><span className="font-semibold">Temporadas:</span> {movie.number_of_seasons}</p>
                            )}
                            <p className="font-semibold">Gênero:</p>
                            <ul className="mx-0.5">
                                {movie.genres && (
                                    movie.genres.map(genre=>
                                        <li key={genre.id}>{genre.name}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <p className="text-xl text-justify px-1 mt-4"><b>Sinopese:</b> {movie.overview}</p>
                    {trailer && <Trailer id={params.id} />}
                </article>
            }
        </>
    )
}