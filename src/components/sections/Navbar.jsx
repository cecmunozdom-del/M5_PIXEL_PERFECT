//BARRA DE "NAVEGACIÓN" SUPERIOR

import Theme from "../Theme";

export default function Navbar() {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark sticky top-0 z-50 flex items-center justify-between p-4">
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