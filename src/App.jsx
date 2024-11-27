import { useState } from "react";
import "./App.css";
import tasks from "./data/tasks";

function App() {
  const completedTasks = tasks.filter((task) => task.state == "completed");
  console.log(completedTasks);
  const currentTasks = tasks.filter((task) => task.state !== "completed");

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Task Manager</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <h2 className="tasks-cat-title">
            Current Tasks ({currentTasks.length})
          </h2>
          <ul>
            {currentTasks.map((task) => {
              return (
                <li key={task.id} className="task-item">
                  <div className="task-title">
                    {task.title}{" "}
                    <span className="status-label">{task.state}</span>
                  </div>
                  <div>Priority: {task.priority}</div>
                  <div>Est. time {task.estimatedTime}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <h2 className="tasks-cat-title">
            Completed Tasks({completedTasks.length})
          </h2>
          <ul>
            {completedTasks.map((task) => {
              {
                task.title;
              }
              return (
                <li key={task.id} className="task-item">
                  <div className="task-title">
                    {task.title}{" "}
                    <span className="status-label">{task.state}</span>
                  </div>
                  <div>Priority: {task.priority}</div>
                  <div>Est. time {task.estimatedTime}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
