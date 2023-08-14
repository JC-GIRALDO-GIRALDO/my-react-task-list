import Header from "../Components/Header";
import Task from "../Components/Task";
function Tareas() {
  return (
    <>
      <hr />
      <div className="tareas">
        <h2 className="nameTareas">Realiza tus tareas</h2>
        <div className="container">
          <header>
            <Header nameTaskList="To-do list" />
          </header>
          <section>
            <Task />
          </section>
        </div>
      </div>
    </>
  );
}
export default Tareas;
