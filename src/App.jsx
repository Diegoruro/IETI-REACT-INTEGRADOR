import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <TaskList/>
    </div>
  )
}

export default App
