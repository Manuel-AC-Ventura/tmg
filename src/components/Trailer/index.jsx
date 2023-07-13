import {API_KEY} from "../../App.jsx";
import {useEffect, useState} from "react";


export const Trailer = (movie)=>{
    const [trailer, setTrailer] = useState('');

    useEffect(()=>{
        async function getTrailer(){
            await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?&language=pt-BR`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            })
                .then(req=>req.json())
                .then(res=> {
                    setTrailer(`https://www.youtube.com/embed/${res.results[0].key}?showinfo=0`)
                })
        }
        getTrailer()
    }, [movie.id])

    return(
        <div className="absolute h-52 left-0 right-0 top-80 mt-10">
            <iframe
                src={trailer}
                allowFullScreen={true}
                className="w-11/12 h-full mx-auto"
            ></iframe>
        </div>
    )
}