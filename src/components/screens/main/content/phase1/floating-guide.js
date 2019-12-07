import React, { useState } from "react";
import styled from "styled-components";

import HoverGuide from "./hover-guide";

import P from "../../../../atoms/p";
import { WHITE, PRIMARY } from "../../../../atoms/colors";

export default function FloatingAlives({ year }) {
  const [isHovering, setHovering] = useState(false);
  if (year < 1990) {
    return <div />;
  }
  return (
    <>
      <Wrapper
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => setHovering(false)}
      >
        <P level={4} style={{ margin: "auto" }} color="black">
          ?
        </P>
      </Wrapper>
      <HoverGuide isHovering={isHovering} />
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 10rem;
  left: 42rem;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: black;
  display: relative;
  font-size: 17px;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.8);
`;
