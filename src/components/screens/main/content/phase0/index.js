import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import ContentWrapper from "../wrapper";
import { useScrollPosition } from "../../../../scroll";

const START_SECONDS = [
  3.5,
  7,
  10.5,
  14,
  17.25,
  22.75,
  28.25,
  32.75,
  37.25,
  41.75,
  46.25,
  50.75,
  55.25,
  60
];

const PAUSE_SECONDS = [
  5.75,
  9,
  12.5,
  16,
  20.75,
  26.25,
  30.5,
  35.5,
  39.5,
  44.25,
  48.25,
  52.75,
  57.25,
  66
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
  const [player, setPlayer] = useState(null);

  const ref = player => {
    setPlayer(player);
  };

  useEffect(() => {
    if (!player) {
      return;
    }
    player.seekTo(START_SECONDS[yearIndex] - 0.3, "seconds");
    setPlaying(true);
  }, [yearIndex]);

  const handleProgress = state => {
    if (state.playedSeconds >= PAUSE_SECONDS[yearIndex]) {
      if (playing) {
        setPlaying(false);
        setNow(state.playedSeconds);
        console.log(state.playedSeconds);
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

  return (
    <ContentWrapper>
      <Wrapper>
        <ReactPlayer
          ref={ref}
          url={"/video/map.mp4"}
          width="100%"
          height="100%"
          muted
          playing={playing}
          playsInline
          onReady={() => console.log("im ready!")}
          onEnded={() => {}}
          onProgress={handleProgress}
          progressInterval={100}
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
