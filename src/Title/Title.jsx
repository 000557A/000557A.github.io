import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './Title.css'
import Homepage from "../HomePage/HomePage.jsx"
import Projects from "../Projects/Projects.jsx"

// import images like this
import test from'./image2.jpg'


// needed for navigation
// might need to copy l8r

function Title(){
    // Title is only responsible for the
    // Left menu that you see at the start
    
    return(

     <div className = "all">
        
        <div className = "MenuList">
            
            <ul className = "TitleList">

                <li><Link to = "/"         >Home</Link></li>
                <li><Link to = "/HomePage" style={{textDecoration: 'none'}} >Downloads</Link></li>
                <li><Link to = "/Projects" style={{textDecoration: 'none'}} >Projects </Link></li>
                <li><Link to = "/About" style={{textDecoration: 'none'}} >About</Link></li>
                <Outlet/>
            </ul>
        </div>

        <img className = "RightImage" src = {test}></img>
     </div>
    );
}


export default Title