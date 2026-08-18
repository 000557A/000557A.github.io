import { useState, Component, useEffect } from 'react'
import './App.css'
import './Clock.css'
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
import Title from './Title/Title.jsx'
import HomePage from './HomePage/HomePage.jsx'
import Projects  from './Projects/Projects.jsx'
import About from './About/About.jsx'
import Clock from './Clock.jsx'





function App() {
   
  // this is basically our root
  // this will get edited now,
  // update to visual novel style ?


  // Think of this as a central hub for connecting all our websites
  // So in routes,we are declaring which pages we have!

  // The path is like, the URL path
  // the elemtn is the page
   
  return (

    <div className = "Layout">
      
      <HashRouter>
      
        <Routes>
          <Route path = "/" element ={<Title/>}/>/* 
          <Route path = "/HomePage" element ={<HomePage/>}/>
          <Route path = "/Projects" element ={<Projects/>}/>
          <Route path = "/About" element ={<About/>}/> */
          <Route path = "/Clock" element ={<Clock/>}/> */
        </Routes>



        
      </HashRouter>

    
    
    
    
    </div>



   );

  

   
}

export default App
