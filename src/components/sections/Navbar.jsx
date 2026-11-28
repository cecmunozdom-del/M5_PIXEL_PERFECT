//BARRA DE "NAVEGACIÓN" SUPERIOR

import Theme from "../Theme";

export default function Navbar() {
  return (
    <nav className="bg-background-light dark:bg-background-dark sticky top-0 z-50 flex items-center justify-between p-4
                    border-b border-accent-gold/90 dark:border-button-dark/90"> {/* para darle un toque de color a la parte inferior del navbar */}

      <a href="#inicio" className="font-logo rounded-lg text-pink-logo text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark">
        The Body
      </a>

      {/* md para pantallas medianas y grandes, es decir, en móvil no se hace flex y se muestra en columna vertical, pero en pantallas de más de 768px se colocan en fila*/}
      <ul className="gap-6 md:flex">
        <li><a href="#inicio" className="rounded transition-colors hover:text-pink-logo dark:hover:text-button-dark 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark"> Inicio </a></li>
        <li><a href="#sinopsis" className="rounded transition-colors hover:text-pink-logo dark:hover:text-button-dark 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark"> Sinopsis</a></li>
        <li><a href="#reparto" className="rounded transition-colors hover:text-pink-logo dark:hover:text-button-dark 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark"> Reparto </a></li>
      </ul>

      <Theme />
    </nav>
  );
}