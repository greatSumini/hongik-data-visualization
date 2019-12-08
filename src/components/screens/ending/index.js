import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import FadeIn from "../../fade-in";
import { useScrollPosition } from "../../scroll";

export default function Ending({ phase }) {
  const [playing, setPlaying] = useState(false);
  const [first, setFirst] = useState(true);
  const [now, setNow] = useState(0);
  const position = useScrollPosition();
  const [player, setPlayer] = useState(null);

  const ref = player => {
    setPlayer(player);
  };
  console.log(position, window.innerHeight * 2 + 42 * 108);
  if (
    position >= window.innerHeight * 2 + 42 * 108 &&
    !playing &&
    phase === "ending"
  ) {
    if (first) {
      setPlaying(true);
      setFirst(false);
    }
    player.seekTo(0);
    setPlaying(true);
  }
  return (
    <Wrapper>
      <FadeIn transitionDuration={1500}>
        <ReactPlayer
          ref={ref}
          url={"/video/ending.mp4"}
          width="100%"
          height="100%"
          muted
          playsInline
          playing={playing}
          onReady={() => console.log("im ready!")}
          onEnded={() => {}}
          playbackRate={1}
        />
      </FadeIn>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;
