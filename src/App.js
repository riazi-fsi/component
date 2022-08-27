import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/button-page' element={<ButtonPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App