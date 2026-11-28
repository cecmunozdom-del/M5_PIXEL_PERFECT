import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Sinopsis from './components/sections/Sinopsis';
import Reparto from './components/sections/Reparto';
import Footer from './components/sections/Footer';

import './style.css'

function App() {
  return (
    /* queremos que la página ocupe el 100% de alto de la pantalla, con los colores correspondientes a los modos claro y oscuro 
    transition:colors hace una transición suave entre los modos, más agradable a la vista */
    <div className="min-h-screen bg-background-light text-gray-900 transition-colors dark:bg-background-dark dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Sinopsis />
        <Reparto />
      </main>
      <Footer />
    </div>
  );
}

export default App
