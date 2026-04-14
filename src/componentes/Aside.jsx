// Se define un componente funcional llamado Aside
function Aside() {
  return (
      // Etiqueta <aside> (se usa para contenido secundario o adicional)
    <aside>
        <h3>Datos Curiosos</h3>
        //Subtítulo con el nombre del carro 
        <h3> Nissan GT-R R35</h3>
        //Información del vehículo usando p y strong para resaltar 
      <p><strong>Apodo:</strong> Godzilla</p>
      <p><strong>Motor:</strong> V6 Biturbo</p>
      <p><strong>Potencia:</strong> +500 HP</p>
      <p><strong>Tracción:</strong> AWD (4 ruedas)</p>
      /* Línea horizontal para separar contenido */
      <hr />
      <p>
        Este vehículo es reconocido mundialmente por su velocidad y tecnología,
        siendo capaz de competir con superdeportivos de alta gama.
      </p>
    </aside>
   
  );
}
// Exporta el componente para poder usarlo en otros archivos
export default Aside;