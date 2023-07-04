import {API_KEY} from "../../App.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header} from "../../components/Header/index.jsx";
import {Container} from "../../components/Container/index.jsx";
import {Card} from "../../components/Card/index.jsx";


export const Search = ()=>{
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function searchMovie(){
            await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.name}&include_adult=true&language=pt-BR&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            })
                .then(req=>req.json())
                .then(res=>{
                    setMovies(res.results)
                })
                .catch(error=>console.log(error))
        }
        searchMovie()
    }, [params.name])

    return(
        <>
            <Header/>
            <Container>
                {
                    movies.map(movie=>
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