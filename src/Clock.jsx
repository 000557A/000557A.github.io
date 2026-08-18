
import './Clock.css'
import { useState, Component, useEffect, useRef} from 'react'
 

 

function Clock(){


  const[time, setTime] = useState({
    // initialize state for time prop
    day  : "",
    month : "",
    year  : "",
    hr  : "",
    sec  : "",
    min  : "",


  });

  useEffect(() => {

    // declare ftn b4 calling
    function UpdateTime(){
      const now = new Date();


      // The functions you call to update the prop
      setTime({
      day : now.getDate() + 1,  // date is 0 indexed
      month : now.getMonth() + 1, // month is 0 indexed
      year : now.getFullYear(),
      hr : now.getHours(),
      sec : fixTime(now.getSeconds()),
      min : fixTime(now.getMinutes()),
        //currentDate = `${month}-${day}-${year}`'
        

      });

    }

    function fixTime(time){
      // for adding 0 in single digit #'s
      if (time < 10){
        return "0"+time;
      }
      return time;
    }
    

    function TimeDetector(hour){
      // 
      // WIP for changing background in title dep't on hour
      return time;
    }


    UpdateTime();
    
    const intervalId = setInterval(UpdateTime, 1000);

    return () => clearInterval(intervalId);
  },[]);


  return <div className = "entireclock">

    <div className = "datewords">Today's date</div>
    <div className = "dateitself">{time.month}, {time.day}, {time.year}<br></br><br></br></div>
    <div className = "timewords">The current time is</div>
    <div className = "dateitself">{time.hr}:{time.min}:{time.sec}</div>
    </div>;
} export default Clock;

