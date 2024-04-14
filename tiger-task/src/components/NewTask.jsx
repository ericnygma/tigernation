import React from 'react'
import { useState } from 'react'
import { createTask } from '../functions/task'


export default function NewTask() {
    const [task, setTask] = useState('');

    const taskData = {
        task,
    }

    const handleNewTask = () =>{
        if(!task){
            alert('Please enter a task')
        }else {
            createTask(taskData);
            setTask('');
        }
    }
  return (
    <>
      <h1 className='text-3xl font-bold underline'>New Task</h1>
      <div>
        <input 
        type="text" 
        name="newtask" 
        placeholder='Add Task' 
        onChange={(e) => {
            setTask(e.target.value);
            }} 
        />
        <button onClick={handleNewTask}>Add Task</button>
      </div>
    </>
  )
}
