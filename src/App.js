import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const title = 'Task Tracker'
  const [taskList, setTaskList] = useState(
    [
      {
          "id": 1, 
          "text": "Doctor Appointment",
          "day": "Feb 5th, 2:30pm",
          "reminder": true
      }, 
      {
          "id": 2, 
          "text": "Clean room",
          "day": "Feb 12th, 9:00pm",
          "reminder": true
      },
      {
          "id":3, 
          "text": "Sing in the Shower",
          "day": "Jan 1st, 12:00am",
          "reminder": false
      }
  ]
  )
  //Add Task
    
  //Delete Task
  const deleteTask = (id) => {
  console.log('delete', id)
  setTaskList(taskList.filter((task) => task.id !== id))  
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTaskList(
      taskList.map(
        (task) => 
        task.id === id ? {...task, reminder:!task.reminder } :task
      )
    )
    console.log(taskList)
  }
 
  return (
    <div className="container">
      <Header title={title} />
      <AddTask />
      {taskList.length > 0 ? <Tasks taskList={taskList} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
