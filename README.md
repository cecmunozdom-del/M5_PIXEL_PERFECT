# M5_PIXEL_PERFECT


## Cómo probarlo
Abre el enlace con "npm run dev" en VSCode o en tu navegador y contempla el landing page de una web dedicada exclusivamente al nuevo éxito mundial "The Body", una serie juvenil estrenada el 11 de noviembre de 2026 en Netflix y que ya ha cautivado a todo el mundo por su inquietante historia y profundos personajes. Mediante la barra de navegación explora los distintos apartados de sinopsis, reparto, episodios, además probar los botones que pueden enviarte directo al tráiler oficial de la serie, y a la página oficial de Netflix para que comiences a verla de inmediato.


## Uso de IA
Como ayudante de IA utilicé Gemini. Al principio las dudas fueron sobre cómo podía dividir el trabajo, ya que aunque se podía haber hecho en todo en un sólo código, se agradece tenerlo todo separado por componentes ya que queda mucho más ordenado. Al inicio también le pregunté y le pedí asesoramiento a lo largo del código ya que no había entendido del todo el criterio de accesibilidad WCAG, y me daba miedo saltármelo sin querer.

También me costaba entender del todo el concepto de mobile-first, pero tras unas explicaciones y ejemplos comprendí que era muy sencillo, simplemente al programar se diseña el "por defecto" para móvil, y después se crean los casos concretos para pantallas más grandes, normalmente teniendo en cuenta tablets y monitores. Al programar el componente Button.jsx, le pregunté qué era un helper y cómo funcionaba cn, clsx, y tailwind-merge, y también cómo podía crear mi cn.js correctamente (ya que en los apuntes hay un ejemplo pero no sabía muy bien ni para qué servía ni cómo aplicarlo).

Me explicó y sugirió cosas más concretas, como sticky top en el componente de Navbar para evitar que se moviera al scrollear. También me ahorró mucho código repetitivo y largo, como el array de actores y actrices en Reparto.jsx, y la información de los episodios en Episodios.jsx. Cabe destacar que en estos dos componentes también le pedí ayuda para hacer los maps que recorren dichos arrays y pintan las "tarjetas" correspondientes.

A la hora de corregir, me ayudó a dividir mejor los colores en style.css, dentro del @theme, ya que algunos (los colores de los textos, claros y oscuros) se repetían por todos los componentes pudiéndose centralizar ahí, así como también me indicó que para poner las imágenes en la web podía hacer los imports arriba y luego meterlas en el código, ya que al poner la ruta directamente me estaba dando errores. También me ayudó con un error que de otra manera no hubiera sabido resolver, ya que en vite.config.js me faltaban imports de tailwind que paralizaban el correcto funcionamiento de la página.

Como correcciones mías tanto de WebiArena, me ayudó a introducir el funcionamiento de LocalStorage para el cambio de modo (claro y oscuro).


Algunos ejemplos de prompts:
"¿Cómo puedo hacer un buen contraste en modo claro/oscuro respetando el criterio WCAG, que no lo he entendido del todo?"
"Dame ejemplos de colores en hexadecimal que sean, blancos, dorados, rosas, granates, y negros."
"¿Lo de los breakpoints que pone en la rúbrica es todo esto de md, sm, lg y tal que he ido poniendo en los códigos? ¿Y es mobile-first porque por defecto todo se hace para móvil y luego ya se hace la especificación a pantallas grandes?"


## Autopsia
1. Al principio utilicé el color rosa pastel (pink-logo) para los títulos y el logo en ambos temas, y el granate (button-dark) en modo oscuro, pero al revisarlo vi que apenas se leían sobre el blanco marfil y el negro respectivamente, no respetándose el criterio WCAG. Tuve que reajustar los tokens en @theme para respetar bien la accesibilidad: dejé el dorado bronce (text-button-light) para asegurar buena legibilidad en modo claro y reservé el rosa (dark:text-pink-logo) para destacar sobre el fondo oscuro, usando los tonos suaves solo como fondos de tarjetas.

2. En escritorio la cabecera quedaba limpia con el logo, los enlaces y el botón de tema en fila, pero en móvil a 360px los enlaces se apilaban y deformaban toda la barra sticky. Gemini me aconsejó seguir el modelo mobile-first, ocultando la lista de enlaces por debajo de 768px (hidden md:flex) y dejando visibles solo el título de la serie, y el selector de tema, evitando añadir un menú de hamburguesa desplegable, que hubiera resultado innecesario en una landing de una sola página donde el usuario recorre el contenido hacia abajo.