import React from 'react';
import Task from '../Task';

const Tasks = ({ tasks, handleTaskClick }) => {
   return (
      <section>
         {tasks.map(task => (
            <Task task={task} handleTaskClick={handleTaskClick} />
         ))}
      </section>
   )
}
export default Tasks;

