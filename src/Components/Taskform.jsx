import React, { useState } from 'react';

const Taskform = ({ addTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault(); // This line prevents the page from refreshing.
    if (!text.trim()) return;
    addTask({
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      category,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <div className="task-options">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Taskform;