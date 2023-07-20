import { useState } from 'react'
import Animate from './Components/Animate'
import { Route, Routes } from 'react-router-dom'
import Solar from './Components/Solar'
import './App.css'

function App() {


  return (
    <>
        <div className='body'>
            <Routes>
              <Route path='/animation' element={<Animate/>}/>
              <Route path='/solar' element={<Solar/>}/>
            </Routes>
        </div>     
    </>
  )
}

export default App
