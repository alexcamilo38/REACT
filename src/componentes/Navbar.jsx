// Se define un componente funcional llamado Navbar
function Navbar() {
    return(
        //representa la parte superior de la página (encabezado)
         <header>
            /* Título principal */
             <h1 class="titulo">Nissan </h1>
             /* Contenedor del menú de navegación */
             <div>
               <nav>
                /* Salto de línea */
                <br/>
                /* Lista de navegación */
                <ul>
                    /* Opciones del menú *
                    <li>Incio</li>
                    <li>Caracteristicas</li>
                    <li>Historia</li>     
                </ul>  
               </nav>     
            </div>
        </header>
    );
}
// Exporta el componente para usarlo en otras partes
export default Navbar;