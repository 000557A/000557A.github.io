import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './Title.css'
import Homepage from "../HomePage/HomePage.jsx"
import Projects from "../Projects/Projects.jsx"
import About from "../About/About.jsx"

// import images like this
import test from'./tempimage.png'


// needed for navigation
// might need to copy l8r

function Title(){
    // Title is only responsible for the
    // Left menu that you see at the start

    //NOte when have time, edit the hover effects on this page
    
    return(

     <div className = "all">
        
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
    );
}


export default Title