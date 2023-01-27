import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const title = 'Task Tracker'
  const [taskList, setTaskList] = useState([])
  // const [filteredTasks, setFilteredTasks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {

    fetch('http://localhost:8000/tasks')
    .then(res => res.json())
    .then(data => {
      setTaskList(data)
    })
   }, [])
   

  //Add Task
  const addTask = (newTask) => {
    const id = taskList.length + 1
    const task = {id, ...newTask}
    const newTaskList = [...taskList, task]
    setTaskList(newTaskList)
  }
    
  //Delete Task
  const deleteTask = (id) => {
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
  }
  //Show/Hide Form
    const toggleForm = () => {
      setShowForm(!showForm)
    }
 
  return (
    <div className="container">
      <Header title={title} onToggle={toggleForm} showForm={showForm} />
      {showForm && <AddTask  onAdd={addTask} setShowForm={setShowForm} />}
      {taskList.length > 0 ? <Tasks taskList={taskList} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
