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
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        ?? Hidden Project I
                                    </div>  
                                </div>
                                
                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        "Modernizing, Reviving"
                                    </div>
                                </div>
                            </div>
                            

                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        "S-Switch Deluxe"
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Reinventing the Benq S-Switch, with simplified controls and new features.
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Study+
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Revolutionizing academic success, built for the next generation.
                                    </div>
                                </div>

                                
                            </div>

                                             
                        </ul>



                        <ul className = "Grid-Projects2">
                            {/*---------------- MAKE THIS INTO A FUNCTION LATER!!------------- */}
                         
                             
                            <img className = "line2" src = {line2}></img>

                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        SFU Surge
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Combining modern inventions with nature.
                                    </div>
                                </div>
                            </div>
                            <img className = "line2" src = {line2}></img>
                            <img className = "line1inverse" src = {line1}></img>
                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        Inventory Manager
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        Simplicity. Sleek. Speed. 
                                        <br></br>All of the above.
                                    </div>
                                </div>
                            </div>
                            <img className = "line1inverse" src = {line1}></img>
                                
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        This is the title3!
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        This is a paragraph3!
                                    </div>
                                </div>
                            </div>

                            

                                             
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