import './About.css'
import CPU from './cpu.png'

function About(){
    
    return(
        <div className = "Entirety-About">

            <div className = "Subtitle-About">
                &nbsp;&nbsp;&nbsp;&nbsp;About me!&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

            {/* --------Body--------- */}


            <div className = "bodybackground-About">
                

                <div className = "body-About">
                    <div className = "subheading">
                        Welcome!
                    </div>
                    <div className = "subcontext">
                    <hr></hr>
                        Welcome to my page! <br></br><br></br>

                        
                        This is where I put photos of my current projects, <br></br>
                        (such as hardware repair), <br></br>
                        and maybe a place to learn more about me!
                    
                    <hr></hr>
                    
                    </div>
                    {/* -------- Description --------- */}

                    <div className = "singularItem">
                        
                        <div className = "itemHeading">
                            It started when I picked up my first computer from the side of the street.
                            It wasn't anything special; quite old for the time.

                            
                        </div>


                        <div className = "itemDescription">
                            - NOTE: You have to implement AMIBIOS section yourself <br></br>

                            - Modified USB-Overcurrent with New-CPU Detect message<br></br>
                            - Bypass upon entering bios (on first boot)<br></br>
                        </div>
                        
                    </div>

                    {/* --------Other stuff--------- */}
                    <div className = "subheading">
                        Gallery
                    </div>

                    <div className = "singularItem">
                        
                        <img className = "cpu" src = {CPU}></img>
                        
                    </div>
                    

                </div>

                
            </div>


            {/* --------SubTitle--------- */}
            

            {/* --------end--------- */}
        </div>

    );
}


export default About