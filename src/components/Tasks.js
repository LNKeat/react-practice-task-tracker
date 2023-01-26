import React from 'react';
import Task from './/Task';

const Tasks = ({ taskList, onDelete, onToggle }) => {
 
  return (
    <div>
       {taskList.map((task) =>(
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> 
       ))}
    </div>
  )
}

export default Tasks