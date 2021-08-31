import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import Tasks from './components/TasksContainer';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import Header from './components/Header';
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
    ]);

  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return { ...task, completed: !task.completed };
        return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed:false
      }
    ];
    setTasks(newTasks)
  };

  const handleTaskDeletion = (taksId) => {
    const newTasks = tasks.filter((task) => task.id !== taksId)
    setTasks(newTasks)
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Route 
          path="/"
          exact
          render={()=>(
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />

        <Route exact path="/:taskTitle" 
          component={TaskDetails}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
