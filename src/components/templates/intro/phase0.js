import React, { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../data/pingpong.json";

export default function Phase0() {
  const [isStopped, setStopped] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const buttonStyle = {
    display: "block",
    margin: "10px auto"
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <button style={buttonStyle} onClick={() => setStopped(true)}>
        stop
      </button>
      <button style={buttonStyle} onClick={() => setStopped(false)}>
        play
      </button>
      <button style={buttonStyle} onClick={() => setPaused(!isPaused)}>
        pause
      </button>
    </div>
  );
}
