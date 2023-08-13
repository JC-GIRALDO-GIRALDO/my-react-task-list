import React from "react";
import FormCreateList from "./FormCreateList";
import TaskList from "./TaskList";
import useTaskList from "../Hooks/useTaskList";
import ClearAllListsButton from "./ClearAllListsButton";

export default function Task() {
  const taskList = useTaskList();

  return (
    <div>
      <FormCreateList addList={taskList.addList} />
      <TaskList
        lists={taskList.lists}
        deleteList={taskList.deleteList}
        editList={taskList.editList}
      />
      <ClearAllListsButton
        clearAllLists={taskList.deleteAllLists}
        totalLists={taskList.totalLists}
      />
    </div>
  );
}
