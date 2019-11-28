import React, { useState } from "react";
import styled from "styled-components";

import P from "../../atoms/p";

export default function Map() {
  const [phase, setPhase] = useState(0);

  return (
    <Wrapper>
      <P>지도 시작</P>
      <P>지도 시작</P>
      <P>지도 시작</P>
      <P>지도 시작</P>
      <P>지도 시작</P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
