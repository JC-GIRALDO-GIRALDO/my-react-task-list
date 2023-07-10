import Task from "./Task"; // Task = hijo
export default function TaskList({ addList }) {
  const tasks = [addList]; // Array de tareas generadas

  return (
    /* Map de todas las listas generadas y 
    las envuelvo en una lista desordenada */
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
}

/* Función que recibe resultado 
  del map y convierte en lista */
function TaskItem({ task }) {
  return (
    <li>
      {" "}
      <Task></Task> {task} {/* Componente hijo (boton) + lista  */}
    </li>
  );
}
