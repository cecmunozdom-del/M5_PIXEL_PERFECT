//BARRA DE "NAVEGACIÓN" SUPERIOR

import Theme from "../Theme";

export default function Navbar() {
  return (
    <nav className="bg-background-light dark:bg-background-dark sticky top-0 flex items-center justify-between p-4
                    border-b border-accent-gold/90 dark:border-button-dark/90"> {/* para darle un toque de color a la parte inferior del navbar */}

      <a href="#inicio" className="font-logo text-pink-logo text-2xl">
        The Body
      </a>

      <ul className="gap-6 md:flex">
        <li><a href="#inicio" className="hover:underline"> Inicio </a></li>
        <li><a href="#sinopsis" className="hover:underline"> Sinopsis</a></li>
        <li><a href="#reparto" className="hover:underline"> Reparto </a></li>
      </ul>

      <Theme />
    </nav>
  );
}