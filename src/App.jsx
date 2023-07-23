import "./App.css";
import Header from "./Components/Header";
import Task from "./Components/Task";

function App() {
  return (
    <>
      {/* Contenedor en el cual está toda la aplicación */}
      <div className="container">
        <header>
          {/*  Componente con el nombre de la aplicación  */}
          <Header nameTaskList="To-do list" />
        </header>
        <section>
          {/*  Componente padre de lista de tareas   */}
          <Task />
        </section>
      </div>
    </>
  );
}

export default App;
