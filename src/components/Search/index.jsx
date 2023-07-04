import styles from './Search.module.css'
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";


export const Search = ()=>{
    const [search, setSearch] = useState("");

    return(
        <form className={`w-11/12 h-14 flex my-2 self-center ${styles.search}`} action={`/search/${search}`}>
            <input
                type="text"
                value={search}
                placeholder="Pesquisar..."
                onChange={e=>setSearch(e.target.value)}
                className={`h-full w-10/12 px-2 font-semibold ${styles.input}`}
            />
            <button className="h-full w-2/12 p-2">
                <MagnifyingGlassIcon className="w-full h-full" />
            </button>
        </form>
    )
}