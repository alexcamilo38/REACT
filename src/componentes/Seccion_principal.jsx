// Se define el componente funcional Seccion_principal
function Seccion_principal() {
  return (
      // <main> representa el contenido principal de la página
    <main className="main">
      /* Título principal */
      <h1>Contenido Principal</h1>
      /* Salto de línea */
      <br />
      <h2>El Nissan GT-R R35</h2>
      <br />
      /* Contenedor de la imagen */
        <div class="contenedor">
          /* Imagen del vehículo */
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxXCj9PtVKPLcSaDVQujwPAClwWx7NhT88g&s " title="Nissan GT-R R35"/>
        </div>
        /*  p de Párrafo y strong para resaltar*/
      <p>El <strong>Nissan GT-R es un automóvil deportivo gran turismo</strong> cupé 2+2 con motor delantero montado longitudinalmente y tracción en las cuatro ruedas, producido por el fabricante japonés Nissan, lanzado en Japón el 6 de diciembre de 2007, en Estados Unidos el 7 de julio de 2008 y en el resto del mundo en marzo de 2009.

     A finales de febrero de 2025 se anunció el cese de su producción y, aunque continuaban recibiendo muchas órdenes, se han suspendido para la producción planeada. No obstante, la firma menciona que ya trabaja en su sucesor: el posible GT-R R36 que, según muchos rumores sería eléctrico. Aparentemente evolucionaría del Nissan Hyper Force Concept que fue presentado en 2023 y su versión definitiva sería presentada en 2028. </p>
    </main>
  );
}
// Exporta el componente
export default Seccion_principal;