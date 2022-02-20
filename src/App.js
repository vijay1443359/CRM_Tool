import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes,Link, BrowserRouter } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Clients from './components/Clients';
import Actions from './components/Actions';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/addData' element={<Actions/>}></Route>
      <Route path='/showData' element={<Clients/>}></Route>
    </Routes>
    </BrowserRouter> 
    
  )
}



export default App;