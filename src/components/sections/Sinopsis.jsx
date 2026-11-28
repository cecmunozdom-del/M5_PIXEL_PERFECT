//APARTADO DE SINOPSIS CON TEXTO E IMÁGENES

import escenaImagen from "../../assets/img/img2.jpg"

export default function Sinopsis() {
    return (
        
    <section
        id="sinopsis"
        className="mx-auto max-w-6xl px-4 py-16 text-gray-900 dark:text-gray-100"
    >

    <hr className="my-8 border-gray-200 dark:border-gray-800" />


    {/* en móvil tendrá 1 columna y ya en escritorio (lg) se dividirá en 2*/}
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Columna 1: texto */}
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            SINOPSIS
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Tras una iniciación en un grupo de baile que sale mal, un grupo de alumnas de una escuela católica, 
            conocidas por su mal comportamiento, empiezan a tener visiones proféticas que desencadenan una histeria colectiva en su pueblo.
          </p>
        </div>

        {/* Columna 2: imagen */}
        <img
          src={escenaImagen}
          alt="Escena de 'TheBody'"
          className="h-72 w-full object-cover shadow-md"
        />
      </div>

      <hr className="my-8 border-gray-200 dark:border-gray-800" />

    </section>

    
  );
}