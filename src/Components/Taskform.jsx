import React, { useState } from 'react';

const Taskform = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // This line prevents the page from refreshing.
    if (!text.trim()) return;
    addTask({ id: Date.now(), text, completed: false, createdAt: new Date().toISOString() });
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
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Taskform;