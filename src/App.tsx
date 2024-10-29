import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddProduct from './components/AddProduct';

const View=()=>{
  return(
    <>
      <h1>This is View</h1>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
