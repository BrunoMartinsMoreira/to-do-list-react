import React from 'react';
import Task from '../Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
   return (
      <section>
         {tasks.map(task => (
            <Task
               key={task.id}
               task={task} 
               handleTaskClick={handleTaskClick}
               handleTaskDeletion={handleTaskDeletion}
            />
         ))}
      </section>
   )
}
export default Tasks;

