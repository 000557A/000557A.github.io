import './About.css'
import CPU from './cpu.png'
import oldpc from '../Assets/oldpcfront.jpg'
import bios from '../Assets/biosv2.png'
import bluecap from '../Assets/bluecap.png'
import orangecap from '../Assets/orangecap.png'
import yellowcap from '../Assets/yellowcap.png'

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

                        
                        You can learn a bit about me here <br></br>
                        but you will also find some of my hobbies! <br></br>
                        
                    
                    <hr></hr>
                    
                    </div>
                    {/* -------- Description --------- */}
                    <div className = "description">

                        <div className = "paragraph1">
                            Hi, it is me, 000557A. A bit about myself:

                            <br></br><br></br>

                            I started working on computers ever since I found 1 along the road.<br></br>
                            (Picture included)<br></br><br></br>
                            It was already quite a dated system when I found it (at least a decade old at that point!). It featured an Athlon XP 2600+, integrated S3 graphics, and a very tired beige case.
                            <br></br><br></br>

                            Despite it's performance (lack there of), the computer brought me immense passion and joy.
                            Sure it couldn't run any modern 2014 games, but it was my very own computer.
                            <br></br><br></br>

                            From then on, I kept learning more about computers, through tinkering or otherwise. 
                            <br></br><br></br>
                            <br></br>

                            Programming caught my eyes because of how limitless it is.
                            <br></br> ANYTHING I could ever think about, could be written in code. 
                            <br></br><br></br>
                             
                             
                        </div>
                        

                        <img className = "oldpc" src = {oldpc}></img>

                    </div>

                    {/* --------Other stuff--------- */}
                    <div className = "subheading">
                        Some Icons 
                    </div>
                    <div className = "subcontext">
                    (By: 000557A - me!!)
                    </div>
                    <div className = "singularItemAbout">
                        <img className = "gallery" src = {CPU}></img>  
                    </div>

                    <div className = "singularItemAbout">
                        <img className = "gallery" src = {bios}></img>  
                    </div>

                    <div className = "singularItemAbout">
                        <img className = "gallery" src = {bluecap}></img>  
                    </div>

                    <div className = "singularItemAbout">
                        <img className = "gallery" src = {orangecap}></img>  
                    </div>

                    <div className = "singularItemAbout">
                        <img className = "gallery" src = {yellowcap}></img>  
                    </div>
                    

                </div>

                
            </div>


            {/* --------SubTitle--------- */}
            

            {/* --------end--------- */}
        </div>

    );
}


export default About