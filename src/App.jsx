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
            return (
              <li key={task.id}>
                <div>
                  {task.title} <span>{task.state}</span>
                </div>
                <div>Priority: {task.priority}</div>
                <div>Est. time {task.estimatedTime}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task) => {
            {
              task.title;
            }
            return (
              <li key={task.id}>
                <div>
                  {task.title} <span>{task.state}</span>
                </div>
                <div>Priority: {task.priority}</div>
                <div>Est. time {task.estimatedTime}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
