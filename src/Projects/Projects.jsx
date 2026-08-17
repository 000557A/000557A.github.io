import './Projects.css'
import line1 from '../Assets/Line1.png'
import line2 from '../Assets/Line2.png'
import CPU2 from './cpuv2.png'
import SOCKET from './socket.png'
function Projects(){
    return(
        <div className = "Entirety-Projects">

        

            {/* --------Body--------- */}

            


            <div className = "bodybackground-Projects">

                
                <div className = "Subtitle-Projects">
                    &nbsp;&nbsp;&nbsp; Projects &nbsp;&nbsp;&nbsp;
                </div>


               
                <div className = "body-Projects">

                    <div className = "subheading">
                        Timeline
                    </div>


                    <div className = "subcontext">
                        List of current projects, roughly accurate with time.
                        <br></br>
                        Uncover details by removing the processor with your mouse!

                        
                    </div>

                    <div className = "divider">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
 
                    <p>

                        <div class = "grid1">

                        

                        <ul className = "Grid-Projects">
                            {/*---------------- MAKE THIS INTO A FUNCTION LATER!!------------- */}
                            <img className = "line1" src = {line1}></img>

                           


                            <img className = "line2" src = {line2}></img>
                            {/* --------Project1--------- */}

                            <a href = "https://github.com/000557A/test">
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Xaser Revival (WIP!)
                                        <br></br><br></br><br></br>
                                        2026
                                    </div>  
                                </div>
                                
                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        "Modernizing, Reviving"
                                    </div>
                                </div>
                            </div>
                            </a>
                            

                            {/* --------Project1--------- */}
                            <a href = "https://000557A.github.io/#/HomePage">
                            <div className = "Project">
                                Old version available for download 
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        S-Switch Deluxe
                                        <br></br><br></br>C++ Arduino<br></br>
                                        2026
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Innovating the Benq S-Switch, with simplified controls and new features.
                                        <br></br><br></br> Utilizes Windows API calls
                                        
                                    </div>
                                </div>
                            </div>
                            </a>
                            
                            <a href = "https://devpost.com/software/study-uivysa">
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Study+
                                        <br></br><br></br><br></br>Scratch.mit<br></br>HTML/CSS<br></br>
                                        2022
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Studying doesn't have to feel like a chore!<br></br><br></br>
                                        We revolutionized academic success through games.
                                        
                                    </div>
                                </div>

                                
                            </div>
                            </a>

                                             
                        </ul>



                        <ul className = "Grid-Projects2">
                            {/*---------------- MAKE THIS INTO A FUNCTION LATER!!------------- */}
                         
                             
                            <img className = "line2" src = {line2}></img>

                            {/* --------Project1--------- */}
                            <a href = "https://github.com/Kinda-Andrew/E-Valuate">
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        SFU Surge
                                        <br></br><br></br><br></br><br></br>ReactJS<br></br>
                                        2025
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Bringing the future into nature.
                                        <br></br>
                                        <br></br>
                                        Built using ReactJS with Python backend, all within 24 hours.
                                    </div>
                                </div>
                            </div>
                            </a>


                            <img className = "line2" src = {line2}></img>
                            <img className = "line1inverse" src = {line1}></img>
                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Inventory Manager
                                        <br></br><br></br>Java<br></br>JFrame<br></br>
                                        2024
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Simple to use, Rapid Accessing inventory system.<br></br> <br></br> 
                                        With local save and load (JSON).
                                        
                                    </div>
                                </div>
                            </div>
                            <img className = "line1inverse" src = {line1}></img>
                            
                            <a href = "https://devpost.com/augus1101">
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Previous Hackathon Submissions
                                        <br></br><br></br>
                                        Before: 2022
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Clicking this will lead you to my DevPost
                                    </div>
                                </div>
                            </div>
                            </a>

                            

                                             
                        </ul>

                        </div>
                    </p>
                </div>

                
            </div>


            
            

            {/* --------end--------- */}
        </div>

    );
}


export default Projects