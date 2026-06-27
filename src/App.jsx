import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import Filter from './Components/Filter';
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('ALL');

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const onToggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const onEditTask = (id) => {
    const taskToEdit = tasks.find(t => t.id === id);
    const newText = prompt("Edit your task", taskToEdit.text);
    if (newText !== null && newText.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }


  const clearTasks = () => {
    setTasks([]);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ACTIVE') {
      return !task.completed;
    }
    if (filter === 'COMPLETED') {
      return task.completed;
    }
    return true; // For 'ALL'
  });

  return (
    <div>
      <header>
        <h1>Task Buddy</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>

      <Taskform addTask = {addTask}/>
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      <Tasklist tasks = {filteredTasks}
       onToggleTask={onToggleTask}
       onEditTask={onEditTask}
       deleteTask={deleteTask} />
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>clear All Tasks</button>)}
      
    </div>
  )
}
