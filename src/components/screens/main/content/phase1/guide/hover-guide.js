import React from "react";
import styled from "styled-components";

import Point from "./point";
import P from "../../../../../atoms/p";

export default function HoverBoard({ isHovering }) {
  return (
    <Wrapper isHovering={isHovering}>
      <Point
        level={2}
        data={{
          x: 63,
          y: 40
        }}
      />
      <Point level={1} data={{ x: 213, y: 44 }} />
      <Point
        level={0}
        data={{
          x: 345,
          y: 45
        }}
      />
      <P level={2} color="rgba(255, 255, 255, 0.5)">
        모든 인물정보 존재
      </P>
      <P level={2} color="rgba(255, 255, 255, 0.5)">
        기본 인물정보 존재
      </P>
      <P level={2} color="rgba(255, 255, 255, 0.5)">
        인물정보 미상
      </P>
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs(props => ({
  style: {
    display: props.isHovering ? "flex" : "none"
  }
}))`
  left: 11rem;
  top: 10rem;
  flex-direction: row;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  width: 410px;
  height: 142px;
  border-radius: 20px;
  background-color: rgba(30, 30, 30, 0.8);
  padding: 4rem 2rem 0;
`;
