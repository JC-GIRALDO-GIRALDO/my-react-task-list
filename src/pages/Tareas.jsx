import Header from "../Components/Header";
import Task from "../Components/Task";
function Tareas() {
  return (
    <>
      <hr />
      <div className="container">
        <header>
          <Header nameTaskList="To-do list" />
        </header>
        <section>
          <Task />
        </section>
      </div>
    </>
  );
}
export default Tareas;
