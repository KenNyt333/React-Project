import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from '../src/component/Navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes'

function App() {

  const[slidein,setslidein]=useState(true)
  useEffect(()=>{
      if(window.innerWidth<= 768){
        setslidein((state)=> !state);
      }
    },[])
    const handleslidein=()=>{
      if(window.innerWidth<=768){
        setslidein((state)=> !state);
      }
    };

  return (
    <div className="App">
      <Router>

     <Navbar handleslidein={handleslidein}/>
     <Allroutes slidein={slidein} handleslidein={handleslidein}/>
     <Allroutes />
      </Router>
    </div>
  );
}

export default App;
