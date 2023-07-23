import React from "react";
import usePersistentState from "./usePersistentState";
import FormCreateList from "./FormCreateList";
import TaskList from "./TaskList";

/* Este componente se encarga de gestionar una colección 
de listas de tareas*/

export default function Task() {
  const [lists, setLists] = usePersistentState("lists", []);

  // Agregar una nueva lista a la colección
  const addList = (list) => {
    setLists([...lists, list]);
  };

  // Borrar una lista de la colección
  const deleteList = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
  };

  // Editar una lista de la colección
  const editList = (index, newName) => {
    const updatedLists = [...lists];
    updatedLists[index] = newName;
    setLists(updatedLists);
  };

  return (
    <div>
      <FormCreateList addList={addList} />
      <TaskList lists={lists} deleteList={deleteList} editList={editList} />
    </div>
  );
}
