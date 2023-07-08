import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    task: "",
    isComplete: false
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the form data to the task list
    setTaskList([...taskList, formData]);

    // Clear the form
    setFormData({
      title: "",
      task: "",
      isComplete: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const displayTaskList = () => {
    return (
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            Title: {task.title}, Task: {task.task}, Is Complete: {task.isComplete.toString()}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Iron Task List</h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type='text'
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Task:
          <input
            type='text'
            name="task"
            value={formData.task}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Is Complete:
          <input
            type='checkbox'
            name="isComplete"
            checked={formData.isComplete}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {displayTaskList()}
    </div>
  );
}

export default App;
