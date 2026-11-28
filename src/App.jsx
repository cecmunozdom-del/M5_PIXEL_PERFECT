import { useState } from 'react'

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Sinopsis from './components/sections/Sinopsis';
import Reparto from './components/sections/Reparto';
import Footer from './components/sections/Footer';

import './style.css'

function App() {
  return (
    <div className="min-h-screen bg-surface-light text-gray-900 transition-colors dark:bg-surface-dark dark:text-gray-100">
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
