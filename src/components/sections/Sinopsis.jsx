//APARTADO DE SINOPSIS CON TEXTO E IMÁGENES

import escenaImagen from "../../assets/img/img2.jpg"

export default function Sinopsis() {
    return (
        
    <section
        id="sinopsis"
        className="mx-auto max-w-6xl px-4 py-16 text-text-light dark:text-text-dark"
    >  {/* centrado de caja automático (margin auto), limita el ancho para que no es esitre en monitores grandes, padding horizontal y vertical */}

    {/*my: margin vertical */}
    <hr className="my-8 border-button-light dark:border-button-dark" />


    {/* en móvil tendrá 1 columna y ya en escritorio (lg) se dividirá en 2*/}
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Columna 1: texto */}
        <div>
          <h2 className="font-display text-3xl font-bold text-button-light dark:text-pink-logo md:text-4xl">
            SINOPSIS
          </h2>
          <p className="mt-4 text-muted-light dark:text-muted-dark">
            Tras una iniciación en un grupo de baile que sale mal, un grupo de alumnas de una escuela católica, 
            conocidas por su mal comportamiento, empiezan a tener visiones proféticas que desencadenan una histeria colectiva en su pueblo.
          </p>
        </div>

        {/* Columna 2: imagen */}
        <img
          src={escenaImagen}
          alt="Escena de 'TheBody'"
          className="h-72 w-full rounded-xl border border-accent-gold/50 object-cover shadow-md dark:border-border-dark"
        /> {/* altura de imagen fija, ancho al máximo dentro de su columna */}
      </div>

      {/*my: margin vertical */}
      <hr className="my-8 border-button-light dark:border-button-dark" />

    </section>

    
  );
}