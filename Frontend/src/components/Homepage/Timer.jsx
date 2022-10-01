import React, { useEffect, useState } from "react";
import { BsPause, BsStop } from "react-icons/bs";
import tstyle from "./styles/Timer.module.css";
const Timer = () => {
  const [second, setsecond] = useState(0);
  const [mintues, setmintues] = useState(0);
  const [hours, sethours] = useState(0);
  const [pause, setpause] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if (pause) {
        setsecond(second + 1);
        if (second === 59) {
          setmintues(mintues + 1);
          setsecond(0);
        }
        if (mintues === 59) {
          sethours(hours + 1);
          setmintues(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  // for stop
  const stop = () => {
    setpause(!pause);
  };

  return (
    <div className={tstyle.maintimer}>
      <div className={tstyle.timer}>
        <div className={tstyle.timer1}>
          <h5 className={tstyle.headingTimer}>
            <span>Stand-up meeting</span>
            {hours < 10 ? "0" + hours : hours}:
            {mintues < 10 ? "0" + mintues : mintues}:
            {second < 10 ? "0" + second : second}
          </h5>
        </div>
        <div>
          {" "}
          <button className={tstyle.btn}
            onClick={stop}
          >
            {!pause ? <BsStop /> : <BsPause />}
          </button>
        </div>
      </div>
      <div>
        {" "}
        <h1 className={tstyle.textundertimer}>
          “I love the ease of just clocking in <br />
          and out with{" "}
          <span>
            <i style={{ color: "rgb(201, 108, 192)" }}>just one click!</i>
          </span>
          ”
        </h1>
        <h1 className={tstyle.textundertimer2}>-Quelani P.</h1>
      </div>
    </div>
  );
};

export default Timer;
