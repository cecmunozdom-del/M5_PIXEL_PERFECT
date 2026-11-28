import saraImg from "../../assets/img/sara.jpg";
import kristinaImg from "../../assets/img/kristina.jpg";
import geenaImg from "../../assets/img/geena.jpg";


const reparto = [
    { id: 1, nombre: "Sara Boustany",  papel: "Elise Zakaria", foto: saraImg },
    { id: 2, nombre: "Kristina Bogic", papel: "Anya Butler", foto: kristinaImg },
    { id: 3, nombre: "Geena Meszaros", papel: "Lisbeth Anderson", foto: geenaImg },
]


export default function Reparto() {
  return (

    /* centrado de caja automático (margin auto), limita el ancho para que no es esitre en monitores grandes, padding horizontal y vertical */
    <section id="reparto" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-display mb-8 text-3xl font-bold text-button-light dark:text-pink-logo md:text-4xl">
        REPARTO
          </h2>

      {/* dependiendo del tamaño tendrá 1 columna (móvl), 2 (tablet) o 3 (escritorio) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* para pintar la info una por una de todas las actrices del array */}
        {reparto.map((persona) => (
          <article
            key={persona.id}
            className="overflow-hidden rounded-xl border border-accent-gold/50 bg-pink-soft/30 
            transition-transform duration-300 hover:-translate-y-1 dark:border-border-dark dark:bg-card-dark"
          > {/* overflow hidden para que la imagen de dentro se quede dentro de las esquinas redondeadas */}

            <img
              src={persona.foto}
              alt={persona.nombre}
              className="h-64 w-full object-cover"
            /> {/* altura de imagen fija, ancho al máximo dentro de su columna */}

            <div className="p-4">
              <h3 className="font-bold text-text-light dark:text-text-dark">{persona.nombre}</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">{persona.papel}</p>
            </div>
          </article>
          
        ))}
      </div>
      
      {/*my: margin vertical */}
      <hr className="my-8 border-button-light dark:border-button-dark" />   

    </section>
  );
}