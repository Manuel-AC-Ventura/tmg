import './App.css'
import {AppRoutes} from "./routes.jsx";

export const API_KEY =   import.meta.env.VITE_API_KEY;

export default function App(){
  return(
      <AppRoutes />
  )
}
