import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import usePersistentState from "../Context/usePersistentState";

export default function useTaskList() {
  const [lists, setLists] = usePersistentState("lists", []);

  const addList = (listName) => {
    const newList = {
      id: uuidv4(),
      name: listName,
      tasks: [],
    };
    setLists([...lists, newList]);
  };

  const deleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
  };

  const deleteAllLists = () => {
    setLists([]); // Eliminar todas las listas estableciendo el estado como un arreglo vacío
  };

  const editList = (id, newName) => {
    const updatedLists = lists.map((list) =>
      list.id === id ? { ...list, name: newName } : list
    );
    setLists(updatedLists);
  };

  return {
    lists,
    addList,
    deleteList,
    editList,
    deleteAllLists, // Agregamos la función para borrar todas las listas
  };
}
