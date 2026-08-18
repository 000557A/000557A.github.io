import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import { useState, Component, useEffect, useRef} from 'react'
import './Title.css'
import Homepage from "../HomePage/HomePage.jsx"
import Projects from "../Projects/Projects.jsx"
import About from "../About/About.jsx"
import Clock from "../Clock.jsx"

// import images like this
import test from'../Assets/greengrass2.png'


// needed for navigation
// might need to copy l8r

let color = ` .all { background-color: rgba(125, 225, 255, 0.24); } `;
let fontcolor = ` .entireclock { color:black; } `

function Title(){
    // Title is only responsible for the
    // Left menu that you see at the start

    //NOte when have time, edit the hover effects on this page

    const[time, setTime] = useState({
        // initialize state for time prop
        hr  : "",
    
    
      });
    
      useEffect(() => {
    
        // declare ftn b4 calling
        function UpdateTime(){
          const now = new Date();
    
    
          // The functions you call to update the prop
          setTime({
    
          hr : TimeDetector(now.getHours()),
          
            
    
          });
    
        }
    
    
        function TimeDetector(hour){
          // 
          let hi = parseInt(hour);
          
          // WIP for changing background in title dep't on hour
          if (hi <= 5 || hi >= 21) {
            // 9pm to 5am (night)
           
            color = ` .all { background-image: linear-gradient(to top right, rgba(0,0,0,0.7), rgba(0,0,0,1));} `;
            fontcolor = ` .entireclock { color:white; } `;


          } else if (hi > 5 || hi < 16) {
            // 5:01 to 4pm (daytime)
            color = ` .all {background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(140,237,250,1)); } `;
            fontcolor = ` .entireclock { color:black; } `;

            
            
          } else if (hi >= 16 || hi < 21) {
            // 5:01 to 12 (evening)
            color = ` .all { background-color: rgba(158, 50, 3, 0.397); } `;
            fontcolor = ` .entireclock { color:white; } `;
          }
    
          // really doesn't do anything to the time itself
          // just used for function call
          return hour;
        }
    
    
        TimeDetector();
        
        // set to 1 hr
        const intervalId = setInterval(UpdateTime, 1000);
    
        return () => clearInterval(intervalId);
      },[]);
    
    
    return(

        <div>
    <div className = "entireclock"><style>{fontcolor}</style></div>

     <div className = "all" >
        <style>{color}</style>

        
        <div className = "Clock"><Clock></Clock></div>
        <div className = "MenuList">
            
            <ul className = "TitleList">
            
                <li ><Link to = "/" className = "SiteTitle">000557A's Site</Link></li><br></br>
                <li><Link to = "/HomePage" className = "LinkStyles" >Downloads</Link></li>
                <li><Link to = "/Projects" className = "LinkStyles" >Projects </Link></li>
                <li><Link to = "/About" className = "LinkStyles" >About</Link></li>
                <Outlet/>
            </ul>
        </div>

        <img className = "RightImage" src = {test}></img>
        <div className = "SiteTitle">
            {/* title here */}
        </div>

       
     </div>
     </div>
    );
}


export default Title