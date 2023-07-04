import {API_KEY} from "../../App.jsx";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header/index.jsx";
import {Search} from "../../components/Search/index.jsx";
import {Container} from "../../components/Container/index.jsx";
import {Card} from "../../components/Card/index.jsx";


export const Home = ()=>{
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function getMovies(){
            await fetch(`https://api.themoviedb.org/3/trending/all/day?language=pt-Br`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            })
                .then(req=>req.json())
                .then(res=>setMovies(res.results))
                .catch(error=>console.log(error))
        }
        getMovies()
    }, [])

    return(
        <>
            <Header/>
            <Search/>
            <h2 className="text-xl font-semibold px-5 my-2">Novidades</h2>
            <Container>
                {
                    movies.map((movie)=>
                        <Card
                            id={movie.id}
                            key={movie.id}
                            cover={movie.poster_path}
                            media_type={movie.media_type}
                            title={movie.title || movie.name}
                            release={movie.release_date || movie.first_air_date}
                        />
                    )
                }
            </Container>
        </>
    )
}