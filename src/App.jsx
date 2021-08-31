import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

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

    //data contém apenas as tarefas na resposta da requisição
    // {data} = destructurig para pegar apenas esse dado na requisiçao
    useEffect(() => {
      const fetchTasks = async () => {
        const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
        setTasks(data)
      };
      fetchTasks();
    }, [])


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
