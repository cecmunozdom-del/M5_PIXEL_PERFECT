const episodios = [
  {
    numero: 1,
    titulo: "Slutty God",
    duracion: "58 min",
    sinopsis:
      "Tras las audiciones de Lisbeth y Grace para cubrir una vacante, el equipo de baile inicia a su nueva compañera en un ritual de Halloween que se sale de control.",
  },
  {
    numero: 2,
    titulo: "Jesus, Literally",
    duracion: "52 min",
    sinopsis:
      "Atormentada por la culpa, Anya intenta frenar las consecuencias de la noche de Halloween mientras Lisbeth aprovecha la situación para escalar posiciones.",
  },
  {
    numero: 3,
    titulo: "Unholy Thoughts",
    duracion: "46 min",
    sinopsis:
      "Unos sueños inquietantes sacuden el espíritu de equipo de las Lions, y las sospechas recaen sobre Leo cuando su dibujo de Grace circula por el instituto.",
  },
  {
    numero: 4,
    titulo: "I Saw Grace Franklin With The Devil",
    duracion: "54 min",
    sinopsis:
      "A medida que se extienden las visiones sobre Grace, Anya busca cómo calmar su ansiedad y Elise usa a Leo para infiltrarse en la vida familiar de Lisbeth.",
  },
  {
    numero: 5,
    titulo: "Faking It",
    duracion: "57 min",
    sinopsis:
      "Las Lions viajan al campo para preparar las regionales, pero al intentar salvar a Grace exorcizando sus demonios, el fin de semana acaba en un caos.",
  },
  {
    numero: 6,
    titulo: "Star Quality",
    duracion: "54 min",
    sinopsis:
      "Apartada en las regionales tras una recuperación milagrosa, Lisbeth explota la debilidad de una compañera mientras una actuación reaviva la conexión entre Anya y Elise.",
  },
  {
    numero: 7,
    titulo: "Holy Trinity",
    duracion: "1 h",
    sinopsis:
      "Lisbeth afronta un giro inesperado en su situación, Steven hace un hallazgo perturbador y una confesión pone a prueba los límites del padre Franklin.",
  },
  {
    numero: 8,
    titulo: "Coming Out",
    duracion: "57 min",
    sinopsis:
      "Secretos comprometedores amenazan con destruir el mundo de Anya mientras el padre Franklin busca respuestas, Elise exige la verdad y Lisbeth juega su última carta.",
  },
];


export default function Episodios() {
  return (
 
    /* centrado de caja automático (margin auto), limita el ancho para que no es esitre en monitores grandes, padding horizontal y vertical */
    <section id="episodios" className="mx-auto max-w-6xl px-4 py-16">

        {/*my: margin vertical */}
        <hr className="my-8 border-button-light dark:border-button-dark" /> 

        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2"> {/* items baseline alinea los elementos según la línea base de texto (donde apoyan) */}
            <h2 className="font-display text-3xl font-bold text-button-light dark:text-pink-logo md:text-4xl">
                EPISODIOS
            </h2>
            <span className="font-display mb-8 text-3xl font-semibold text-accent-gold"> 
                Temporada 1 - 8 episodios
            </span>
        </div>

        {/* 1 columna en móvil y 2 columnas a partir de md */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {episodios.map((ep) => (
            <article
                key={ep.numero}
                className="flex flex-col justify-between rounded-xl border border-accent-gold/50 bg-pink-soft/30 p-5 transition-colors hover:border-accent-gold dark:border-border-dark dark:bg-card-dark"
            >
                <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold uppercase text-accent-gold">
                        Episodio {ep.numero}
                    </span>
                    <span className="rounded-full border border-accent-gold/40 px-2.5 py-0.5 text-xs text-muted-light dark:text-muted-dark">
                        {ep.duracion}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
                    {ep.titulo}
                </h3>

                <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                    {ep.sinopsis}
                </p>
                </div>
            </article>
            ))}
        </div>
    </section>
  );
}