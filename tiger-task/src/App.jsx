import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'

function App() {
  

  return (
    <>
     <NewTask />
    <br />
    <Tasks />
    </>
  )
}

export default App
