import React, { useState } from "react";
import styled from "styled-components";

import P from "../../atoms/p";

export default function Butterfly() {
  const [phase, setPhase] = useState(0);

  return (
    <Wrapper>
      <P>나비시작</P>
      <P>나비시작</P>
      <P>나비시작</P>
      <P>나비시작</P>
      <P>나비시작</P>
      <P>나비시작</P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
