import React, { useRef, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import ContentWrapper from "../wrapper";
import { useScrollPosition } from "../../../scroll";

const PAUSE_SECONDS = [
  3.075,
  5.825,
  8.575,
  11.325,
  14.075,
  18.825,
  23.575,
  27.325,
  31.075,
  34.825,
  38.575,
  42.325,
  46.075
];
const PLAYING_TIME = PAUSE_SECONDS.map((v, i) =>
  i === 0 ? v : PAUSE_SECONDS[i] - PAUSE_SECONDS[i - 1]
);

export default function Phase0(props) {
  const { year } = props;
  const yearIndex = year - 1933;

  const [playing, setPlaying] = useState(false);
  const [first, setFirst] = useState(true);
  const [now, setNow] = useState(0);
  const position = useScrollPosition();
  const player = useRef();

  const handleProgress = state => {
    if (state.playedSeconds >= PAUSE_SECONDS[yearIndex]) {
      if (playing) {
        setPlaying(false);
        setNow(state.playedSeconds);
      }
    }
  };

  if (position >= window.innerHeight && !playing) {
    if (first) {
      setPlaying(true);
      setFirst(false);
    }
    if (now < PAUSE_SECONDS[yearIndex]) {
      setPlaying(true);
    }
  }

  console.log(now, year, PAUSE_SECONDS[year - 1933]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ReactPlayer
          ref={player}
          url={"/video/map.mp4"}
          width="100%"
          height="100%"
          muted
          playing={playing}
          playsInline
          onReady={() => console.log("im ready!")}
          onEnded={() => {}}
          onProgress={handleProgress}
        />
      </Wrapper>
    </ContentWrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
