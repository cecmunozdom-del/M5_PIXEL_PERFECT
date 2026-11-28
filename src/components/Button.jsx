//BOTONES PARA EL NAV

//cn -> helper que combina clsx y tailwind-merge
import { cn } from "../utilities/cn";

export default function Boton({ children, variante = 'primario', className, ...props }) {
  
  /* hay que poner cursos-pointer porque la nueva versión de tailwind no lo hace automáticamente 
  para el ring de los botones sale con el color de padre si no lo especificamos */
  const base = "cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold dark:focus-visible:ring-button-dark";

  const variantes = {
      primario: "bg-pink-logo text-gray-950 dark:bg-button-dark dark:text-white dark:focus-visible:ring-background-light",
      secundario: "hover:border-2 border-background-light text-background-light hover:bg-netflix hover:text-white",
  };
  
  
  return (
    /* cn junta estilos, elige la variante, e incluye modificaciones externas sin conflictos */ 
    <button className={cn(base, variantes[variante], className)} {...props}>
      {children}
    </button>
  )
}