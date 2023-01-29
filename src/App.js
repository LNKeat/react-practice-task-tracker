import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const title = 'Task Tracker'
  const [taskList, setTaskList] = useState([])
  const [showForm, setShowForm] = useState(false)

  // useEffect(() => {
  //   fetch('http://localhost:8000/tasks')
  //   .then(res => res.json())
  //   .then(taskData => {
  //     setTaskList(taskData)
  //   }  )
  // }, [])
  
  useEffect(() => {
    (async () => {
      const tasksFromServer = await fetchTasks()
      setTaskList(tasksFromServer)
    })()
  }, [])
  

  //Fetch All Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch Single Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:8000/tasks/${id}`)
  //   const data = await res.json()
  //   return data
  // }
   

  //Add Task with .then chain
  // const addTask = (newTask) => {
  //   fetch('http://localhost:8000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newTask)
  //   })
  //   .then(res => res.json())
  //   .then(newTaskData => {
  //     const updatedTaskList= [...taskList, newTaskData] 
  //     setTaskList(updatedTaskList)
  //   })
  // }

  //Add Task with async/await
    const addTask = async(task) => {
      const res = await fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(task)
      })
      const taskData = await res.json()
      setTaskList([...taskList, taskData])
    }
    
  //Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
        method: 'DELETE',
      })
      res.status === 200 ? setTaskList(taskList.filter((task) => task.id !== id)) : alert(`Not Working. Error: ${res.status}`)
    
    // fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: 'DELETE',
    // })
    // .then (res => console.log(res.status))
    // setTaskList(taskList.filter((task) => task.id !== id))

  }

  //Toggle Reminder
  const onToggle = (id) => { 
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
      {taskList.length > 0 ? <Tasks taskList={taskList} onDelete={deleteTask} onToggle={onToggle} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
