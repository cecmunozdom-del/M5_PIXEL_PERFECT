//BOTONES PARA EL NAV

//cn -> helper que combina clsx y tailwind-merge
import { cn } from "../utilities/cn";

export default function Boton({ children, variante = 'primario', className, ...props }) {
  
    const base = "cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 font-semibold transition focus-visible:ring-2";
  
    const variantes = {
        primario:
            "bg-pink-logo text-gray-950 hover:opacity-90 dark:bg-button-dark dark:text-white",
        secundario:
            "border border-netflix bg-transparent text-netflix hover:bg-netflix/10", /* TODO esto no va */
    };
  
  
  return (
    /* cn junta estilos, elige la variante, e incluye modificaciones externas sin conflictos */ 
    <button className={cn(base, variantes[variante], className)} {...props}>
      {children}
    </button>
  )
}