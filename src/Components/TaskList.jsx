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
  return <li>{task}</li>;
}
