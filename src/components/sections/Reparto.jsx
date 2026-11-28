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
    <section id="reparto" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-display text-3xl font-bold">REPARTO</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* para pintar la info una por una de todas las actrices del array */}
        {reparto.map((persona) => (
          <article
            key={persona.id}
            className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <img
              src={persona.foto}
              alt={persona.nombre}
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{persona.nombre}</h3>
              <p className="font-light">{persona.papel}</p>
            </div>
          </article>
          
        ))}
      </div>
            <hr className="my-8 border-gray-200 dark:border-gray-800" />

    </section>
  );
}