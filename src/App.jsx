import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import FormCreateList from "./Components/FormCreateList";
import { FaCirclePlus } from "../node_modules/react-icons/fa6";

function App() {
  return (
    <>
      <div>
        <header>
          <Header nameTaskList="Todo App"></Header>

          <FormCreateList></FormCreateList>
        </header>
        <section>
          <TaskList addList="Buy a new gaming laptop"></TaskList>
          <TaskList addList="Complete a previous task"></TaskList>
          <TaskList addList="Create video for YouTube"></TaskList>
          <TaskList addList="Create a new portfolio site"></TaskList>
        </section>
      </div>
    </>
  );
}

export default App;
