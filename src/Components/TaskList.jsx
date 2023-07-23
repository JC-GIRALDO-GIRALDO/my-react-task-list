import React, { useState } from "react";
import { FaCheck, FaPen, FaTrashAlt } from "../../node_modules/react-icons/fa";

function TaskList({ lists, deleteList, editList }) {
  const [editedIndex, setEditedIndex] = useState(-1); //índice de la lista actualmente en modo de edición
  const [editedName, setEditedName] = useState(""); //el nombre de la lista que está siendo editada
  const [selectedLists, setSelectedLists] = useState([]); // contiene los índices de las listas seleccionadas (marcadas con el checkbox)

  //se activa cuando cambia el valor del campo de entrada mientras se edita una lista
  const handleEditInputChange = (event) => {
    setEditedName(event.target.value);
  };

  //Llama a la función editList pasándole el índice de la lista a editar y el nuevo nombre
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    editList(editedIndex, editedName);
    setEditedIndex(-1);
    setEditedName("");
  };

  //Pone en modo de edición la lista correspondiente, actualizando los estados
  const startEditing = (index, name) => {
    setEditedIndex(index);
    setEditedName(name);
  };

  //se activa cuando se hace clic en el checkbox de una lista
  const handleSelectToggle = (index) => {
    if (selectedLists.includes(index)) {
      setSelectedLists(selectedLists.filter((item) => item !== index));
    } else {
      setSelectedLists([...selectedLists, index]);
    }
  };

  return (
    <div>
      {lists.length === 0 ? (
        <p>Enter a task to get started</p>
      ) : (
        <>
          <p>List of generated tasks</p>
          <hr />
          <ul>
            {lists.map((list, index) => (
              <li key={index}>
                {editedIndex === index ? (
                  <form onSubmit={handleEditFormSubmit}>
                    <input
                      type="text"
                      value={editedName}
                      onChange={handleEditInputChange}
                    />
                    <button type="submit">
                      <FaCheck className="icons" />
                    </button>
                    <button onClick={() => setEditedIndex(-1)}>Cancelar</button>
                  </form>
                ) : (
                  <>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={selectedLists.includes(index)}
                      onChange={() => handleSelectToggle(index)}
                    />
                    {list}
                    <button onClick={() => startEditing(index, list)}>
                      <FaPen className="icons" />
                    </button>
                    <button onClick={() => deleteList(index)}>
                      <FaTrashAlt className="icons" />
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default TaskList;
