
import './App.css'
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import { useEffect, useState } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function App() {
  const [tasks, setTasks] = useState(  []);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);
  
  

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return(
    <main>
     <TaskForm onAdd={addTask}/>
     {tasks.map(task => (
      <Task {...task}/>
     ))} 
    </main>
  );
}


export default App