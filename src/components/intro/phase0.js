import React from "react";
import ReactPlayer from "react-player";

export default function Phase0(props) {
  return (
    <div>
      <ReactPlayer
        url={"/video/intro.mp4"}
        width="100%"
        height="100%"
        muted
        playsInline
        playing
        onReady={() => console.log("im ready!")}
        onEnded={() => {
          props.onVideoEnd();
        }}
        playbackRate={1.11}
      />
    </div>
  );
}
