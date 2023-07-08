import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    task: "",
    isComplete: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  return (
    <div className="App">
      <h1>Iron Task List</h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          Title: 
          <input type='text' name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Task: 
          <input type='text' name="task" value={formData.task} onChange={handleChange} />
        </label>
        <br />
        <label>
          Is Complete: 
          <input type='checkbox' name="isComplete" checked={formData.isComplete} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
