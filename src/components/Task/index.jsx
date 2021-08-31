import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import "./task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
   
   return(
      <div style={task.completed ? {borderLeft: '6px solid rgb(28 202 28)'} : {}}
         className="taskContainer">

         <div className="task-title" onClick={() => handleTaskClick(task.id)}>   
            {task.title}
         </div>

         <div className="btnContainer">
            <button className="removeTaskBtn"
             onClick={()=> handleTaskDeletion(task.id)}><CgClose/>
            </button>

            <button className="seeTaskDetailsBtn"
             onClick={""}><CgInfo/>
            </button>
         </div>

      </div>
   );

  // return <section className="taskContainer"> <div>{task.title}</div> </section>);
    
};
export default Task;