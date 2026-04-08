//import React from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Seccion_principal from "./componentes/Seccion_principal"
import Seccion_secundaria from "./componentes/Seccion_secundaria"
import Aside from "./componentes/Aside"
import Footer from "./componentes/Footer"

const App = () => {
  return (
  <div>
    <Navbar/>
    <div className="central">
      <main>
        <Seccion_principal/>
        <Seccion_secundaria/>
      </main>
      <Aside/>
    </div>
    <Footer/>
  </div>
   
  );
}

export default App
