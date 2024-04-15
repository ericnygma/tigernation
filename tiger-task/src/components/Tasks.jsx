import React, { useEffect, useState } from 'react'
import { getTasks } from '../functions/task'

export default function Tasks() {

    // useEffect(() => {
    //     getTasks(tasks);
    // })
    const task = [
        {
            task: 'Task 1',
            completed: false,
            createdAt: new Date(),
        },
        {
            task: 'Task 2',
            completed: false,
            createdAt: new Date(),
        },
        {
            task: 'Task 3',
            completed: false,
            createdAt: new Date(),
        },
        {
            task: 'Task 4',
            completed: false,
            createdAt: new Date(),
        },
        {
            task: 'Task 5',
            completed: false,
            createdAt: new Date(),
        },
    ]


  return (
    <>
      <ul>
            {task.map((task, index) => (
                <li key={index}><input type="checkbox" />
                    {task.task}</li>
            ))}
      </ul>
    </>
  )

}