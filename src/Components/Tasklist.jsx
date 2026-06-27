import React from 'react';

const Tasklist = ({ tasks, onToggleTask, deleteTask, onEditTask }) => {
  if (!tasks.length) {
    return <p style={{ textAlign: 'center', margin: '2rem 0' }}>No tasks yet! Add one above.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <span onClick={() => onToggleTask(task.id)}>
            {task.text}
          </span>
          <div className="actions">
            <button className="secondary" onClick={() => onToggleTask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasklist;