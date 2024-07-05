import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function Allroutes(slidein,handleslidein) {
  return (
    <Routes>
        <Route path='/' element={<Home slidin={slidein} handleslidein={handleslidein}/>}>
        </Route>
    </Routes> 
  )
}

export default Allroutes