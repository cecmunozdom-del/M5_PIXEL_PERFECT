// IMAGEN + TEXTO "LOGO" ANIMADO

import fotoLogo from "../../assets/img/logo.png"
import Boton from "../Button";

export default function Hero(){

    return(
        //que la imagen cubra todo y con un degradado oscuro encima (aseguramos que el texto se lea bien)
        <section
            id="inicio" 
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url(${fotoLogo})` }} 
            className="flex min-h-[80vh] flex-col items-center justify-center bg-cover bg-center px-4 text-center" 
            //se oscurece la imagen de fondo para que el texto se vea bien (la accesibilidad es importante)
            //la imagen ocupará mínimo el 80% de la altura de la pantalla [80vh] -> valor arbitrario
        >   

        <h1 className="font-logo text-pink-logo motion-safe:animate-flotar text-8xl md:text-10xl">
            The Body
        </h1>

        <p className="mt-4 max-w-md text-gray-200">
            Cuando una parte del cuerpo sufre, todas sufren.
        </p>

        <div>
            <Boton variante="primario" onClick={() => window.open("https://www.youtube.com/watch?v=wl7uj7n7DoY", "_blank")}> Tráiler oficial </Boton>
            <Boton variante="secunadario" onClick={() => window.open("https://www.netflix.com", "_blank")}> Ver en Netflix </Boton>
        </div>
        </section>
    );
}