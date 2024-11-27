import { useState } from "react";
import "./App.css";
import tasks from "./data/tasks";
import classNames from "classnames";

function App() {
  const completedTasks = tasks.filter((task) => task.state == "completed");
  console.log(completedTasks);
  const currentTasks = tasks.filter((task) => task.state !== "completed");

  const assignStateClass = (state) => {
    return classNames({
      "status-label": true, // Always apply 'status-label'
      "completed-task": state === "completed", // Apply 'completed' if state is "completed"
      "in-progress-task": state === "in_progress", // Apply 'in-progress' if state is "in-progress"
      "backlog-task": state === "backlog", // Apply 'backlog' if state is "backlog"
    });
  };

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
              const taskClass = assignStateClass(task.state);

              return (
                <li key={task.id} className="task-item">
                  <div className="task-title">
                    {task.title} <span className={taskClass}>{task.state}</span>
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
              const taskClass = assignStateClass(task.state);

              return (
                <li key={task.id} className="task-item">
                  <div className="task-title">
                    {task.title} <span className={taskClass}>{task.state}</span>
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
