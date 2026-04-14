//import React from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Seccion_principal from "./componentes/Seccion_principal"
import Seccion_secundaria from "./componentes/Seccion_secundaria"
import Aside from "./componentes/Aside"
import Footer from "./componentes/Footer"

const App = () => {
  return (
     // Contenedor principal de toda la app
  <div>
    /* Barra de navegación */
    <Navbar/>
    /* Contenedor central donde va el contenido */
    <div className="central">
      /* main agrupa el contenido principal */
      <main>
        /* Sección principal */
        <Seccion_principal/>
        /* Sección secundaria */

        <Seccion_secundaria/>
      </main>
      /* Barra lateral */
      <Aside/>
    </div>
     /* Pie de página */
    <Footer/>
  </div>
   
  );
}

export default App
