import './Projects.css'
import line from './Line.png'
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

                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        This is the title!
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        This is a paragraph!
                                    </div>
                                </div>
                            </div>


                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidleft">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        This is the title2!
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        This is a paragraph2!
                                    </div>
                                </div>
                            </div>


                            <div className = "Project">
                                <div className = "lidleft">
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



                        <ul className = "Grid-Projects2">
                            {/*---------------- MAKE THIS INTO A FUNCTION LATER!!------------- */}


                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        This is the title!
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        This is a paragraph!
                                    </div>
                                </div>
                            </div>


                            {/* --------Project1--------- */}
                            <div className = "Project">
                                <div className = "lidright">
                                    <img className = "cpuimage" src = {CPU2}></img>
                                    <div className = "Title">
                                        This is the title2!
                                    </div>  
                                </div>


                                <div className = "bottompart">
                                    <img className = "socketimage" src = {SOCKET}></img>

                                    <div class = "Information">
                                        This is a paragraph2!
                                    </div>
                                </div>
                            </div>


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