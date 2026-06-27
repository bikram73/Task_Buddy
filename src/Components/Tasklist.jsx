import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Tasklist = ({ tasks, onToggleTask, deleteTask, onEditTask }) => {
  if (!tasks.length) {
    return <p style={{ textAlign: 'center', margin: '2rem 0' }}>No tasks yet! Add one above.</p>;
  }

  return (
    <TransitionGroup component="ul" className="task-list">
      {tasks.map((task) => (
        <CSSTransition
          key={task.id}
          timeout={300}
          classNames="task-item-anim"
        >
          <li className={`task-item ${task.completed ? 'completed' : ''}`}>
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Tasklist;