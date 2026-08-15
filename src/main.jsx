import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import './App.css'

import App from './App.jsx'
import HomePage from './HomePage/HomePage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />  
    
  
   

  </StrictMode>,
)
