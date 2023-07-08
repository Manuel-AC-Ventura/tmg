import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/index.jsx";
import {Error} from "./pages/Error/index.jsx";
import {Movie} from "./pages/Movie/index.jsx";
import {Search} from "./pages/Search/index.jsx";


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/*" element={ <Error/> } />
                <Route path="/home" element={ <Home/> } />
                <Route path="/search/:name" element={ <Search/> } />
                <Route path="/:media_type/:id" element={ <Movie/> } />
            </Routes>
        </BrowserRouter>
    )
}