
import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import {instance} from './index'
import SignupForm from './components/SignupForm';
import ProductList from './components/ProductList';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';




function App() {
  return(
   <BrowserRouter>
         <HomePage/> 
   </BrowserRouter>
  )
}

export default App;
