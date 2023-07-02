import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header/index.jsx";
import {Container} from "../../components/Container/index.jsx";
import {Card} from "../../components/Card/index.jsx";


export const Search = ()=>{
    const [movies, setMovies] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${params.name}&include_adult=true&language=pt-BR&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ3NmMwYWQxZDFmMDFjYTZlZThkZmU5NTRmZWM2YyIsInN1YiI6IjY0YTA5MTMyOGMwYTQ4MDBhZTI0MGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I6Ju4W89keiSIrDfwMsrxBj0dghclosb9Y--AnmT1h8'
            }
        })
            .then(req=>req.json())
            .then(res=>{
                console.log(res.results)
                setMovies(res.results)
            })
            .catch(error=>console.log(error))

    }, [params.name])

    return(
        <>
            <Header/>
            <h2 className="font-semibold text-2xl px-3 self-start">Resultados</h2>
            <Container>
                {
                    movies.map((movie)=>
                        <Card
                            id={movie.id}
                            key={movie.id}
                            cover={movie.poster_path}
                            title={movie.title || movie.name}
                        />
                    )
                }
            </Container>
        </>
    )
}