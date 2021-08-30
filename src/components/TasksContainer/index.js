import React from 'react';
import Task from '../Task';

const Tasks = ({ tasks }) => {
   return (
      <section>
         {tasks.map(task => <Task task={task} />)}
      </section>
   )
}
export default Tasks;

