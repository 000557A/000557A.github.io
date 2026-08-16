import './HomePage.css'
import test from './test.jpg'
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
                        I am NOT responsible for any damages that may arise.<br></br>
                        
                        Download by clicking on photo on the left.
                        <hr></hr>
                    </div>
                    {/* --------Bios Mods--------- */}

                    <div className = "singularItem">
                        <img className = "bios" src = {bioschip}></img>
                        <div className = "itemHeading">
                            Asus A8V Deluxe Modified BIOS
                            
                        </div>

                        <div className = "itemDescription">
                            - Updated Network ROM <br></br>
                            - No USB-Overcurrent Bug <br></br>

                        </div>
                        
                    </div>

                    <div className = "singularItem">
                        <img className = "bios" src = {bioschip}></img>
                        <div className = "itemHeading">
                            Asus A320M K/BR 
                            USB Overcurrent Error FIX
                        </div>


                        <div className = "itemDescription">
                            - NOTE: You have to implement AMIBIOS section yourself <br></br>

                            - Modified USB-Overcurrent with New-CPU Detect message<br></br>
                            - Bypass upon entering bios (on first boot)<br></br>
                        </div>
                        
                    </div>

                    {/* --------Other stuff--------- */}
                    <div className = "subheading">
                        Misc.
                    </div>

                    <div className = "singularItem">
                        <img className = "bluecap" src = {bluecap}></img>
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