//CAMBIO DE MODO CLARO A MODO OSCURO

import { useState, useEffect } from "react";

export default function Theme(){

    //Estado inicial -> lee LocalStorage y si no hay nada, pilla el preferido del sistema
    const [modoOscuro, setModoOscuro] = useState(() => {
        const guardado = localStorage.getItem("theme");
        if (guardado) return guardado === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    //cada vez que se cambia, guarda el cambio en LocalStorage
    useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [modoOscuro]);

    return(
        <button 
            onClick={() => setModoOscuro(!modoOscuro)}
            aria-label={modoOscuro ? "Activar modo claro" : "Activar modo oscuro"}
            className="size-11 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark"> 
        
        {modoOscuro ? "☀️" : "🌙"}
        </button>

    );
}