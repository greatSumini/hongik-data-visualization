import React, { useState } from "react";
import styled from "styled-components";

import Timeline from "../../timeline";

export default function Intro() {
  const [phase, setPhase] = useState(0);

  return (
    <Wrapper>
      <Timeline />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  width: 100vw;
`;
