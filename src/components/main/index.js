import React, { useState } from "react";
import styled from "styled-components";

import Timeline from "../timeline";
import Phase0 from "./content/phase0";
import Phase1 from "./content/phase1";

export default function Main() {
  const [phase, setPhase] = useState(0);
  const [year, setYear] = useState(1933);

  return (
    <Wrapper>
      <Timeline year={year} setYear={setYear} onPhaseChange={setPhase} />
      {phase === 0 && <Phase0 year={year} />}
      {phase === 1 && <Phase1 year={year} />}
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
