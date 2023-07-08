import {Link} from "react-router-dom";
import {ExclamationTriangleIcon} from "@heroicons/react/24/solid/index.js";

export const Error = ()=>{
  return(
      <main className="flex flex-col m-auto items-center gap-2">
          <ExclamationTriangleIcon className="w-20 h-20" />
          <p className="text-2xl font-semibold">Página não encontrada</p>
          <Link className="text-gray text-lg mx-auto hover:underline decoration-1" to="/">Voltar</Link>
      </main>
  )
}