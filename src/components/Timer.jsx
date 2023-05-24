import { useEffect, useState } from "react";

function Timer(props) {
  const { correctWords, startCounting } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (startCounting) {
      intervalId = setInterval(() => {
        setTime((oldTime) => oldTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [startCounting]);

  const minutes = time / 60;
  return (
    <div>
      <p>
        <b>Time </b> : {time}
      </p>
      <p>
        <b>speed</b> : {(correctWords / minutes || 0).toFixed(2)} WPM
      </p>
    </div>
  );
}

export default Timer;
