import {API_KEY} from "../../App.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "../../components/Card/index.jsx";
import {Header} from "../../components/Header/index.jsx";
import {Container} from "../../components/Container/index.jsx";


export const Search = ()=>{
    const params = useParams();
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function search(){
            await fetch(`https://api.themoviedb.org/3/search/multi?query=${params.name}&include_adult=true&language=pt-BR&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            })
                .then(req=>req.json())
                .then(res=>setMovies(res.results))
                .catch(error=> {
                    console.log(error)
                    setTimeout(search(), 5000)
                })
        }
        search()
    }, [params.name])

    return(
        <>
            <Header/>
            <h2 className="text-xl font-semibold px-4 my-2">Resultados de: {params.name}</h2>
            <Container>
            {
                movies.map(movie=>
                    <Card
                        id={movie.id}
                        key={movie.id}
                        cover={movie.poster_path}
                        media_type={movie.media_type}
                        title={movie.title || movie.name}
                    />
                )
            }
            </Container>
        </>
    )
}