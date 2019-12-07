import React from "react";
import styled from "styled-components";

import Point from "./butterfly/point";
import P from "../../../../atoms/p";

export default function HoverBoard({ isHovering }) {
  return (
    <Wrapper isHovering={isHovering}>
      <Point
        year={9999}
        data={{
          comment: "hi",
          x: 423,
          y: 55
        }}
        opacity={1}
      />
      <Point year={9999} data={{ name: "hi", x: 573, y: 55 }} opacity={1} />
      <Point
        year={9999}
        data={{
          x: 707,
          y: 55
        }}
        opacity={1}
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
