import React, { useEffect, useState } from "react";

const StopWatch = (props) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [timerOn]);


  useEffect(() => {
    props.onChange(hours + ":" + minutes + ":" +  seconds)
  },[(hours, minutes, seconds), props.onChange])

 
  useEffect(() => {
    setSeconds((seconds) => ("0" + Math.floor((time / 1000) % 60)).slice(-2) )
  });

  useEffect(() => {
    setMinutes((minutes) => ("0" + Math.floor((time / 60000) % 60)).slice(-2))
  })

  useEffect(() => {
    setHours((hours) => ("0" + Math.floor((time / 600000) % 60)).slice(-2))
  })

  const timeData = () => {
    return hours + ":" + minutes + ":" + seconds;
  }

 
  return (
    <div>
      {timeData()}
      <div>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimeOn(false)}>Stop</button>}
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
