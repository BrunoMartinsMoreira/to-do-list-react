import React from 'react';
import "./task.css"

const Task = ({ task }) => {

   return (
      <section className="taskContainer">
         <div>{task.title}</div>
      </section>);
};
export default Task;