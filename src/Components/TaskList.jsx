import { FaCirclePlus } from "../../node_modules/react-icons/fa6";
import Task from "./Task";
export default function TaskList({ addList }) {
  const tasks = [addList];

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
}

function TaskItem({ task }) {
  return <li><Task></Task> {task}</li>;
}
