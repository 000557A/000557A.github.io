import './cpu.css'
import cpuphoto from'./cpu.png'
// think of props
/*
Think of props as a type of object of some description
that you attribute data to it LATER.


So, a props is just a generic item.
You give itmeaning later, when you say 


*/

function cpu(){
    return (
        // NOW, we MUST give it something that says
        // desc = "xyz" or something
        // basically, givinvg the props meaning
        <div className = "cpu">
    
            <p>Hello</p>
            <img src = {cpuphoto}></img>

        </div>
    )
}


export default cpu