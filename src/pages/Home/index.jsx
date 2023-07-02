import {useEffect, useState} from "react";
import {Card} from "../../components/Card/index.jsx";
import {Header} from '../../components/Header/index.jsx'
import {Search} from "../../components/Search/index.jsx";
import {Container} from "../../components/Container/index.jsx";


export const Home = ()=>{
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function search(){
            await fetch('https://api.themoviedb.org/3/trending/all/day?language=pt-Br', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ3NmMwYWQxZDFmMDFjYTZlZThkZmU5NTRmZWM2YyIsInN1YiI6IjY0YTA5MTMyOGMwYTQ4MDBhZTI0MGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I6Ju4W89keiSIrDfwMsrxBj0dghclosb9Y--AnmT1h8'
                }
            })
                .then(req=>req.json())
                .then(res=>{
                    setMovies(res.results)
                    console.log(res.results)
                })
        }
        search()
    }, [])

    return(
        <>
            <Header/>
            <Search/>
            <h2 className="text-xl font-semibold px-5 my-2">Novidades</h2>
            <Container>
                {
                    movies.map(movie=>
                        <Card
                            id={movie.id}
                            key={movie.id}
                            cover={movie.poster_path}
                            title={movie.title || movie.name}
                            release={movie.release_date || movie.first_air_date}
                        />
                    )
                }
            </Container>
        </>
    )
}