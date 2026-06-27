import React from 'react';

const Progresstracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  if (totalTasks === 0) {
    return null; // Don't show the progress tracker if there are no tasks
  }

  return (
    <div className="progress-tracker">
      <progress value={completedTasks} max={totalTasks} />
      <p>{completedTasks} of {totalTasks} tasks completed</p>
    </div>
  );
};

export default Progresstracker;