import React from 'react';
import Task from './/Task';

const Tasks = ({ taskList, onDelete }) => {
 
  return (
    <div>
       {taskList.map((task) =>(
        <Task key={task.id} task={task} onDelete={onDelete} /> 
       ))}
    </div>
  )
}

export default Tasks