import { useState } from 'react'
import './App.css'
import { Count } from './components/Pages/Count/Count'
import { Routes,Route } from 'react-router'

import { Header } from './components/Layouts/Header/Header'

import { Clock } from './components/Pages/Clock/Clock'
import { Timer } from './components/Pages/Timer/Timer'
import { UserActive } from './components/Pages/UserActive/UserActive'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<Count/>} />
      <Route path='/timer' element={<Timer/>} />
      <Route path='/clock' element={<Clock/>} />
      <Route path='/login' element={<UserActive/>} />
    </Routes>
    </>
  )
}

export default App
