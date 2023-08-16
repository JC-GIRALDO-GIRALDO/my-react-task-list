import React, { useState } from "react";
import { EditIcon, DeleteIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { Text, Divider, Button, Input } from "@chakra-ui/react";

const strikeThrough = (text) => {
  return text
    .split("")
    .map((char) => char + "\u0336")
    .join("");
};

export default function TaskList({
  lists,
  deleteList,
  editList,
  toggleCheckbox,
}) {
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
        <Text fontSize="2xl">No tasks generated</Text>
      ) : (
        <Text fontSize="2xl">List of generated tasks</Text>
      )}
      <Divider height="2px" />
      <div className="taskList">
        {lists.map((list) => (
          <h2 key={`task_${list.id}`}>
            {editedList && editedList.id === list.id ? (
              <form className="formEdit" onSubmit={handleEditFormSubmit}>
                <Input
                  height="60px"
                  width="100%"
                  type="text"
                  value={editedName}
                  onChange={handleEditInputChange}
                />
                <div className="edit">
                  <Button
                    margin="auto 0.5rem"
                    fontSize="30px"
                    colorScheme="whatsapp"
                    variant="outline"
                    type="submit"
                    className="icons"
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    margin="auto 1rem"
                    fontSize="25px"
                    colorScheme="red"
                    variant="outline"
                    onClick={() => setEditedList(null)}
                    className="icons"
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <div className="part1">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={list.checked}
                    onChange={() => toggleCheckbox(list.id)}
                  />
                  <span
                    style={
                      list.checked ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {list.checked ? strikeThrough(list.name) : list.name}
                  </span>
                </div>
                <div className="part2">
                  <Button
                    margin="2px 1rem"
                    fontSize="20px"
                    colorScheme="whatsapp"
                    variant="outline"
                    onClick={() => startEditing(list)}
                    className="icons"
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    margin="2px 1rem"
                    fontSize="20px"
                    colorScheme="red"
                    variant="outline"
                    onClick={() => deleteList(list.id)}
                    className="icons1"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
                <div>
                  <Text fontSize="xl" margin="auto 3.5rem">
                    {list.description}
                  </Text>
                </div>
              </>
            )}
          </h2>
        ))}
      </div>
    </div>
  );
}
