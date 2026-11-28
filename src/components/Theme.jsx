//CAMBIO DE MODO CLARO A MODO OSCURO

import { useState } from "react";

export default function Theme(){
    const [modoOscuro, setModoOscuro] = useState(false);

    function cambiarModo(){
        setModoOscuro(!modoOscuro);
        document.documentElement.classList.toggle("dark");
    }

    return(
        <button 
            onClick={cambiarModo} 
            aria-label={modoOscuro ? "Activar modo claro" : "Activar modo oscuro"}
            className="size-11 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark"> 
        
        {modoOscuro ? "☀️" : "🌙"}
        </button>

    );
}