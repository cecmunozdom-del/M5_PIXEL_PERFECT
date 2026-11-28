
export default function Footer() {
  return (

    /* línea superior para separarlo (border top), text-sm letra pequeña y que cambia de color según el modo */
    <footer className="border-t border-gray-200 px-4 py-8 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">

      {/* centra contenido, limita el ancho para que no se estire en pantallas grandes, apila los elementos
      en columna en móvil, y en fila (row) en pantallas grandes, los alinea en el centro con separación de 4 (16px) */}
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-logo text-pink-logo text-2xl">The Body</span>
        <p> U-TAD 2026 - PROG.WEB - M5 PIXEL PERFECT </p>
      </div>
    </footer>
  );
}