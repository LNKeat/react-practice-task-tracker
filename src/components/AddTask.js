import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            return alert('Please add a task.');
        } else if (!day) {
            return alert('Please add a day and time.')
        } 

        const newTask = {text, day, reminder}
        onAdd(newTask) 
        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value) } />
        </div>
        <div className='form-control'>
            <label>Date & Time</label>
            <input type='text' placeholder='Add Date & Time' value={day} onChange={(e) => setDay(e.target.value) } />
        </div>
        <div className='form-control form-control-check'>
            <label>Set reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask