import {Link} from "react-router-dom";
import {Menu} from "../Menu/index.jsx"
import {PlayCircleIcon} from "@heroicons/react/20/solid/index.js";
import {Bars3Icon} from "@heroicons/react/24/solid/index.js";
import {XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";


export const Header = ()=>{
    const [menu, setMenu] = useState(true)

    return(
        <header className="w-screen h-20">
            <nav className="w-full h-full px-4 flex items-center justify-between">
                <Link className="flex gap-1 items-center font-bold" to="/">
                    <PlayCircleIcon className="w-8 h-8"/>
                    <h1 className="text-xl">The Movies Guide</h1>
                </Link>
                <button onClick={()=>setMenu(!menu)}>
                    {menu ? <Bars3Icon className="w-9 h-9" /> : <XMarkIcon className="w-9 h-9" />}
                </button>
                {!menu && <Menu/>}
            </nav>
        </header>
    )
}