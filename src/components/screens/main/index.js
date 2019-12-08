import React, { useState } from "react";
import styled from "styled-components";
import Scroll from "react-scroll";

import Timeline from "./timeline";
import Phase0 from "./content/phase0";
import Phase1 from "./content/phase1";

const scroll = Scroll.animateScroll;

export default function Main() {
  const [phase, setPhase] = useState(0);
  const [year, setYear] = useState(1933);

  const handleKeyDown = e => {
    if (e.keyCode === 37) {
      move(year - 1);
    } else if (e.keyCode === 39) {
      move(year + 1);
    }
  };

  const move = index => {
    if (index === 2020) {
      scroll.scrollTo(window.scrollY + window.innerHeight);
      return;
    }
    let newYear = index;
    if (newYear === 1947) {
      newYear = 1991;
    }
    if (newYear === 1990) {
      newYear = 1946;
    }
    newYear = Math.max(1933, Math.min(2019, newYear));
    if (newYear > 1946) {
      setPhase(1);
    } else {
      setPhase(0);
    }
    setYear(newYear);
    scroll.scrollTo(
      ((newYear > 1990 ? newYear - 44 : newYear) - 1933) * 108 +
        window.innerHeight
    );
  };

  return (
    <Wrapper onKeyDown={handleKeyDown} tabIndex="0">
      <Timeline
        year={year}
        setYear={setYear}
        onPhaseChange={setPhase}
        move={move}
      />
      {phase === 0 && <Phase0 year={year} />}
      {phase === 1 && <Phase1 year={year} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  width: 100vw;

  scroll-snap-align: start;
`;
