import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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
  //delete task
const deleteTask = (id) => {
 console.log('delete', id)
}
 
  return (
    <div className="container">
      <Header title={title} />
      <Tasks taskList={taskList} onDelete={deleteTask} />
    </div>
  );
}

export default App;
