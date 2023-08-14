function SobreNosotros() {
  return (
    <>
      <hr />
      <div className="sobreNosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a nuestra aplicación de administración de tareas. Esta
          aplicación está diseñada para ayudarte a mantener un registro
          organizado de tus tareas diarias, permitiéndote gestionar
          eficientemente tu tiempo y aumentar tu productividad.
        </p>

        <ol>
          <h3>Funcionalidades destacadas:</h3>
          <li>Creación y edición de listas de tareas personalizadas.</li>
          <li>Marca tareas como completadas o pendientes.</li>
          <li>Elimina tareas y listas cuando ya no sean necesarias.</li>
          <li>
            Guarda automáticamente tus datos utilizando almacenamiento local.
          </li>
        </ol>

        <ol>
          <h3>Tecnologías Utilizadas:</h3>

          <li>
            React: Biblioteca de JavaScript para construir interfaces de
            usuario.
          </li>
          <li>
            React Router: Para gestionar la navegación entre diferentes páginas.
          </li>
          <li>
            LocalStorage: Para almacenar los datos de las tareas localmente en
            el navegador.
          </li>
          <li>
            CSS: Estilos personalizados para mejorar la apariencia de la
            aplicación.
          </li>
        </ol>
      </div>
    </>
  );
}
export default SobreNosotros;
