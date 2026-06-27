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
    return (
      <div style={{ textAlign: 'center', margin: '3rem 0', color: '#666' }}>
        <h3>Welcome to Task Buddy!</h3>
        <p>Your task list is currently empty.</p>
        <p>Get started by adding a new task in the field above.</p>
      </div>
    );
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
              <div className="task-meta">
                <span className={`task-badge priority-${task.priority?.toLowerCase()}`}>{task.priority}</span>
                <span className="task-badge category">{task.category}</span>
              </div>
            </div>
            <div className="task-right-panel">
              <small className="task-timestamp">
                {formatTimeAgo(task.createdAt)}
              </small>
              <div className="actions">
                <button className="secondary" onClick={() => onToggleTask(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button className="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        </CSSTransition>)
      })}
    </TransitionGroup>
  );
};

export default Tasklist;