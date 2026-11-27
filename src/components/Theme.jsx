//CAMBIO DE MODO CLARO A MODO OSCURO

import { useState } from "react";

export default function Theme(){
    const [modo, setModo] = useState(false);

    function cambiarModo(){
        setModo(!modo);
        document.documentElement.classList.toggle("dark");
    }

    return(
        <button 
            onClick={cambiarModo()} 
            aria-label={modo ? "Activar modo claro" : "Activar modo oscuro"}
            className="size-11 cursor-pointer rounded-full focus-visible:ring-2"> 
        
        {modo ? "☀️" : "🌙"}
        </button>

    );
}