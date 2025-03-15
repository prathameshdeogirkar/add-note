import React, { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

 
  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("allTasks"));
    if (allTasks) {
      setTasks(allTasks);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) {
      alert("Please enter a task!");
      return;
    }
    setTasks([inputValue, ...tasks]);
    setInputValue("");
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
    <h1>To Do List</h1>
    <div>
      <textarea
        id="inputBox"
        placeholder="Enter your Note"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows="4"
      ></textarea>
      <button id="add" onClick={addTask}>ADD</button>
    </div>
    <div id="task-container" style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
      {tasks.map((task, index) => (
        <div key={index} className="to-do-item" style={{ marginBottom: "10px", wordWrap: "break-word" }}>
          <p>{task}</p>
          <button className="btn-del" onClick={() => deleteTask(task)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default App;
