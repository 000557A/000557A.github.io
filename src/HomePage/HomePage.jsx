import './HomePage.css'
import bioschip from '../Assets/biosv2.png'
import bluecap from '../Assets/bluecap.png'

function HomePage(){
    return(
        <div className = "Entirety-HomePage">

            <div className = "Subtitle-HomePage">
                &nbsp;&nbsp;&nbsp;&nbsp; Downloads&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

            {/* --------Body--------- */}


            <div className = "bodybackground-HomePage">
                

                <div className = "body-HomePage">
                    <div className = "subheading">
                        Bios Mods
                    </div>
                    <div className = "subcontext">
                    <hr></hr>
                        All bioses here are modified by me.<br></br>
                        Flash at your own discretion! <br></br>
                        I am NOT responsible for any damages that may arise.<br></br><br></br>
                        
                        Download by clicking icon on the left.
                        <hr></hr>
                    </div>
                    {/* --------Bios Mods--------- */}

                    <div className = "singularItem">
                        <a href = "https://drive.google.com/file/d/1txGnNHMsgfr-l9wd_mEVsBzi3d3Lhb1k/view?usp=drive_link">
                        <img className = "bios" src = {bioschip}></img>
                        </a>
                        <div className = "itemHeading">
                            Asus A8V Deluxe Modified BIOS
                            
                        </div>

                        <div className = "itemDescription">
                            - Updated Network ROM <br></br>
                            - No USB-Overcurrent Bug <br></br>
                            - Tested on A8V Deluxe Rev 2.00 <br></br>

                        </div>
                        
                    </div>

                    <div className = "singularItem">
                        <a href = "https://drive.google.com/file/d/12D8_zPfIISYOaj-CyCAm-77wnCLfxpLn/view?usp=drive_link">
                        <img className = "bios" src = {bioschip}></img>
                        </a>
                        <div className = "itemHeading">
                            Asus A320M K/BR 
                            USB Overcurrent Error FIX
                        </div>


                        <div className = "itemDescription">
                            - NOTE: You have to implement AMIBIOS section yourself <br></br>
                            - Modified from BR (Brazil) board,  International untested <br></br>
                            - Modified USB-Overcurrent with New-CPU Detect message<br></br>
                            - Bypass upon entering bios (on first boot)<br></br>
                        </div>
                        
                    </div>

                    {/* --------Other stuff--------- */}
                    <div className = "subheading">
                        Project Downloads
                    </div>

                    <div className = "singularItem">
                        <a href = "https://drive.google.com/file/d/1_LPHpCPdyIko0CzyoDU1PEXiF1CPmJqT/view?usp=drive_link">
                        <img className = "bluecap" src = {bluecap}></img>
                        </a>
                        <div className = "itemHeading">
                            Precompiled S-Switch Deluxe
                        </div>


                        <div className = "itemDescription">
                            - Ready-to-use .exe file. <br></br>

                            - You still need arduino!<br></br>
                            - May be a few versions behind<br></br>
                        </div>
                        
                        
                    </div>
                    

                </div>

                
            </div>


            {/* --------SubTitle--------- */}
            

            {/* --------end--------- */}
        </div>

    );
}


export default HomePage