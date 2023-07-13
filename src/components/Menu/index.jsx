import styles from './Menu.module.css'
import {Link} from "react-router-dom";

export const Menu = ()=>{
    return(
        <ul className={`gap-2 absolute right-0 w-7/12 mx-4 top-20 grid items-center p-3 rounded-md ${styles.menu}`}>
            <li className="h-10 w-full flex items-center px-1 text-xl font-semibold"><Link to="/movies">Filmes</Link></li>
            <li className="h-10 w-full flex items-center px-1 text-xl font-semibold"><Link to="/series">Séries</Link></li>
            <li className="h-10 w-full flex items-center px-1 text-xl font-semibold"><Link to="/*">Artistas</Link></li>
            <li className="h-10 w-full flex items-center px-1 text-xl font-semibold"><Link to="/*">Favoritos</Link></li>
        </ul>
    )
}