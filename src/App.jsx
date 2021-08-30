import React, { useState } from 'react';
import Tasks from './components/TasksContainer';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        title: "Estudar programação",
        completed: false,
      },
      {
        id: 2,
        title: "Ler livros",
        completed: true,
      },
    ]
  );

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(120),
        completed:false
      }
    ];
    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;