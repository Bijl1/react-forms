import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    task: '',
    isComplete: false
  });
  const [displayTasks, setDisplayTasks] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTaskList((prevTaskList) => [...prevTaskList, formData]);

    setFormData({
      title: '',
      task: '',
      isComplete: false
    });
  };

  const updateTask = (id) => {
    setTaskList(() => [...taskList, taskList[id]]);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const toggleDisplayTasks = () => {
    setDisplayTasks(!displayTasks);
  };

  const displayTaskList = () => {
    if (displayTasks) {
      if (taskList.length === 0) {
        return <p>No tasks to display.</p>;
      }

      return (
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              Title: {task.title}, Task: {task.task}, Is Complete: {task.isComplete.toString()}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Iron Task List</h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Task:
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Is Complete:
          <input
            type="checkbox"
            name="isComplete"
            checked={formData.isComplete}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <button onClick={toggleDisplayTasks}>
        {displayTasks && taskList.length === 0 ? 'No Task to Display' : 'Show/Hide Task List'}
      </button>
      {displayTaskList()}
    </div>
  );
}

export default App;
