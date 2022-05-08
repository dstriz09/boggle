import React, { useEffect, useState } from "react";

const formatTimerDisplay = (duration) => {
  const minutes = (duration / 60) | 0;
  let seconds = duration % 60 | 0;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${minutes}:${seconds}`;
};

const Timer = ({ duration, setDuration, isStopped, setIsStopped }) => {
  const [clear, setClear] = useState();

  useEffect(() => {
    handleTimer();
  }, [isStopped]);

  if (duration <= 0) {
    clearInterval(clear);
  }

  function handleTimer() {
    function timing() {
      if (!isStopped) {
        setDuration((prevState) => prevState - 1);
      } else clearInterval(clear);
    }
    timing();
    setClear(setInterval(timing, 1000));
  }

  return (
    <div
      className={duration < 180 && isStopped ? "Paused Timer" : "Start Timer"}
      onClick={() => {
        setIsStopped(!isStopped);
      }}
    >
      {formatTimerDisplay(duration)}
    </div>
  );
};

export default Timer;
