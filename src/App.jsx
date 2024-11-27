import { useState } from "react";
import "./App.css";
import tasks from "./data/tasks";

function App() {
  const completedTasks = tasks.filter((task) => task.state == "completed");
  console.log(completedTasks);
  const currentTasks = tasks.filter((task) => task.state !== "completed");

  return (
    <>
      <div>
        <h2>Current Tasks</h2>
        <ul>
          {currentTasks.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
