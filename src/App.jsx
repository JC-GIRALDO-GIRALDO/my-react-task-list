import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Task from "./Components/Task";

function App() {
  return (
    <div className="container">
      <header>
        <Header nameTaskList="To-do list" />
      </header>
      <section>
        <Task />
      </section>
    </div>
  );
}

export default App;
