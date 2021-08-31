import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import "./task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

   const history = useHistory();
   const handleTaskDetailsClick = () => {
      history.push(`/${task.title}`)
   };
   
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
             onClick={handleTaskDetailsClick}><CgInfo/>
            </button>
         </div>

      </div>
   );    
};
export default Task;