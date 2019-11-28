import React, { useState } from "react";
import styled from "styled-components";

import Phase0 from "./phase0";
import Phase1 from "./phase1";

export default function Intro() {
  const [phase, setPhase] = useState(0);

  return (
    <Wrapper>
      {phase === 1 && <Phase0 />}
      {phase === 0 && <Phase1 />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
