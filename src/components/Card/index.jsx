import {Link} from "react-router-dom";


export const Card = (props)=>{
    return(
        <Link className="w-full" to={`/${props.media_type}/${props.id}`}>
            <img
                alt={props.title}
                className="rounded-sm"
                src={`https://image.tmdb.org/t/p/w500${props.cover}`}
            />
            <h4 className="font-semibold mt-1 px-1">{props.title}</h4>
            <small className="text-gray px-1">{props.release}</small>
        </Link>
    )
}