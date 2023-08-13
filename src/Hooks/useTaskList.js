import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import usePersistentState from "../Context/usePersistentState";

const useTaskList = () => {
  const [lists, setLists] = usePersistentState("lists", []);

  const addList = (listName, listDescription) => {
    const newList = {
      id: uuidv4(),
      name: listName,
      description: listDescription,
      tasks: [],
    };
    setLists([...lists, newList]);
  };

  const deleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
  };

  const deleteAllLists = () => {
    setLists([]);
  };

  const editList = (id, newName) => {
    const updatedLists = lists.map((list) =>
      list.id === id ? { ...list, name: newName } : list
    );
    setLists(updatedLists);
  };

  const totalLists = lists.length; // Calcular el total de listas

  return {
    lists,
    totalLists,
    addList,
    deleteList,
    editList,
    deleteAllLists,
  };
};

export default useTaskList;
