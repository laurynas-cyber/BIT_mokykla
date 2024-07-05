import React, { useState } from "react";

function Todo() {
  const [taskList, settaskList] = useState(["go", "back"]);
  const [newTask, setnewTask] = useState("");

  function handleInputChange(e) {
    setnewTask(e.target.value);
  }

  function addTask() {
    settaskList((t) => [...t, newTask]);
    console.log(taskList);
  }

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To-do-list</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" type="button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {taskList.map((t, i) => (
          <li key={i}>
            <span className="text">{t}</span>
            <button
              type="button"
              className="deleteButton"
              onClick={() => deleteTask(i)}
            >
              Delete☠️
            </button>
            <button
              type="button"
              className="moveButton"
              onClick={() => moveTaskUp(i)} //ideti i dar viena funkcija tada kai pessinam propsus ar argumentus
            >
              👆
            </button>
            <button
              type="button"
              className="moveButton"
              onClick={() => moveTaskDown(i)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
