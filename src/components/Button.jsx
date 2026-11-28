//BOTONES PARA EL NAV

//cn -> helper que combina clsx y tailwind-merge
import { cn } from "../utilities/cn";

export default function Boton({ children, variante = 'primario', className, ...props }) {
  //TODO: chequea estos estilos:
    const base = "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 font-semibold transition focus-visible:ring-2";
  
    const variantes = {
        primario: "bg-brand text-white hover:bg-brand-dark dark:bg-brand-light dark:text-surface-dark",
        secundario: "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
  }
  
  
  return (
    /* cn junta estilos, elige la variante, e incluye modificaciones externas sin conflictos */ 
    <button className={cn(base, variantes[variante], className)} {...props}>
      {children}
    </button>
  )
}