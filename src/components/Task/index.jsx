import React from 'react';
import "./task.css";

const Task = ({ task, handleTaskClick }) => {
   
   return(
      <div style={task.completed ? {borderLeft: '6px solid rgb(28 202 28)'} : {}}
         onClick={() => handleTaskClick(task.id)}
         className="taskContainer">

         <div className="task-title">   
            {task.title}
         </div>

      </div>
   );

  // return <section className="taskContainer"> <div>{task.title}</div> </section>);
    
};
export default Task;