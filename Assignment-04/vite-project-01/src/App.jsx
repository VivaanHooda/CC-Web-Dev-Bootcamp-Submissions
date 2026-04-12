import React from 'react'
import LeftPart from './components/LeftPart'
import MiddlePart from './components/MiddlePart'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Tasks from './components/Tasks'
const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Routes> 
      <Route path='/' element={<Home />}>
      <Route path='tasks' element={<Tasks />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
