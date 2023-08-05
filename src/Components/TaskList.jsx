import React, { useState } from "react";
import {
  FaCheckSquare,
  FaPen,
  FaTrashAlt,
  FaWindowClose,
} from "react-icons/fa";

const strikeThrough = (text) => {
  return text
    .split("")
    .map((char) => char + "\u0336")
    .join("");
};

export default function TaskList({ lists, deleteList, editList }) {
  const [editedList, setEditedList] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [selectedLists, setSelectedLists] = useState([]);

  const handleEditInputChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    if (editedList) {
      editList(editedList.id, editedName);
      setEditedList(null);
      setEditedName("");
    }
  };

  const startEditing = (list) => {
    setEditedList(list);
    setEditedName(list.name);
  };

  const handleSelectToggle = (id) => {
    setSelectedLists((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div>
      {lists.length === 0 ? (
        <p>No tasks generated</p>
      ) : (
        <p>List of generated tasks</p>
      )}
      <hr />
      <ul>
        {lists.map((list) => (
          <li key={`task_${list.id}`}>
            {editedList && editedList.id === list.id ? (
              <form onSubmit={handleEditFormSubmit}>
                <input
                  type="text"
                  value={editedName}
                  onChange={handleEditInputChange}
                />
                <div className="edit">
                  <button type="submit" className="icons">
                    <FaCheckSquare />
                  </button>
                  <button onClick={() => setEditedList(null)} className="icons">
                    <FaWindowClose />
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="part1">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={selectedLists.includes(list.id)}
                    onChange={() => handleSelectToggle(list.id)}
                  />
                  <span
                    style={
                      selectedLists.includes(list.id)
                        ? { textDecoration: "line-through" }
                        : {}
                    }
                  >
                    {selectedLists.includes(list.id)
                      ? strikeThrough(list.name)
                      : list.name}
                  </span>
                </div>
                <div className="part2">
                  <button onClick={() => startEditing(list)} className="icons">
                    <FaPen />
                  </button>
                  <button onClick={() => deleteList(list.id)} className="icons">
                    <FaTrashAlt />
                  </button>
                </div>
                <div className="description">
                  <p>
                    <span>{list.description}</span>
                  </p>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
