import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import CheckboxPage from './pages/CheckboxPage'
import CountDownPage from './pages/CountDownPage'
import Home from './pages/Home'
import TablePage from './pages/TablePage'
import TextFieldPage from './pages/TextFieldPage'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/button-page' element={<ButtonPage/>}/>
          <Route path='/table-page' element={<TablePage/>}/>
          <Route path='/textFeild-page' element={<TextFieldPage/>}/>
          <Route path='/checkbox-page' element={<CheckboxPage/>}/>
          <Route path='/countdown-page' element={<CountDownPage/>}/>


        </Routes>
      </Router>
    </div>
  )
}

export default App