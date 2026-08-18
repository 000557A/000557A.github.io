
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
      hr : TimeDetector(now.getHours()),
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
      let hi = parseInt(hour);
      // WIP for changing background in title dep't on hour
      if (hi <= 5 || hi >= 21) {
        // 9pm to 5am (night)
        //document.getElementById('all').style.backgroundColor = 'red';
      } else if (hi > 5 || hi > 16) {
        // 5:01 to 4 (daytime)
      } else if (hi >= 16 || hi > 21) {
        // 5:01 to 12 (evening)\
        <style>{` .all { background-color: rgba(125, 225, 255, 0.24); } `}</style>
      }

      // really doesn't do anything to the time itself
      // just used for function call
      return hour;
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

