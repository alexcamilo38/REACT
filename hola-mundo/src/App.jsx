//import React from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Seccion_principal from "./componentes/Seccion_principal"
import Seccion_secundaria from "./componentes/Seccion_secundaria"

const App = () => {
  return (
  <div>
    <Navbar/>
    <main>
      <Seccion_principal/>
      <Seccion_secundaria/>
    </main>
  </div>
   
  );
}

export default App
