import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function formatTimeAgo(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
}

const Tasklist = ({ tasks, onToggleTask, deleteTask, onEditTask }) => {
  if (!tasks.length) {
    return <p style={{ textAlign: 'center', margin: '2rem 0' }}>No tasks yet! Add one above.</p>;
  }

  return (
    <TransitionGroup component="ul" className="task-list">
      {tasks.map((task) => {
        const nodeRef = createRef(null);
        return (<CSSTransition
          key={task.id}
          nodeRef={nodeRef}
          timeout={300}
          classNames="task-item-anim"
        >
          <li ref={nodeRef} className={`task-item ${task.completed ? 'completed' : ''}`} >
            <div className="task-content">
              <span onClick={() => onToggleTask(task.id)}>
                {task.text}
              </span>
              <small className="task-timestamp">
                {formatTimeAgo(task.createdAt)}
              </small>
            </div>
            <div className="actions">
              <button className="secondary" onClick={() => onToggleTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        </CSSTransition>)
      })}
    </TransitionGroup>
  );
};

export default Tasklist;