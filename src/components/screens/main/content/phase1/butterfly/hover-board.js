import React from "react";
import styled, { css } from "styled-components";

import P from "../../../../../atoms/p";
import { WHITE } from "../../../../../atoms/colors";

export default function HoverBoard({ radius, data, sizeRate, isHovering }) {
  const hoverLeft = (data.x - 360) * sizeRate[0] + radius + 45;
  const hoverTop = data.y * sizeRate[1] + radius + 8;
  const onRight = hoverLeft < (window.innerWidth - 360) / 2;
  const onBottom = hoverTop < window.innerHeight * 0.7;

  return (
    <Wrapper
      radius={radius}
      onRight={onRight}
      onBottom={onBottom}
      isHovering={isHovering}
      x={hoverLeft}
      y={hoverTop}
      sizeRate={sizeRate}
    >
      <img
        style={{
          width: "15rem",
          height: "15rem",
          borderRadius: `
          ${onRight && onBottom ? "0" : "20px"} 0 0 20px
          `
        }}
        src={data.image || "/profile/empty.jpeg"}
      />
      <InfoWrapper>
        <RowWrapper>
          <P
            level={3}
            fontWeight="medium"
            style={{ marginRight: "0.8rem" }}
            color={WHITE}
          >
            {data.name || "???"}
          </P>
          <P
            level={1}
            fontWeight="regular"
            color={"rgba(255,255,255,0.7)"}
          >{`( ~ ${data.dead || "????"})`}</P>
        </RowWrapper>
        <P
          color={WHITE}
          level={0}
          style={{ marginBottom: "1.5rem" }}
          width="100%"
          preWrap
        >{`피해연도 : ${data.damage || "????"}     피해지역 : ${data.location ||
          "??"}`}</P>
        <P color={"#e6d17b"} level={2} style={{ width: "21.5rem" }}>
          {data.comment}
        </P>
      </InfoWrapper>
    </Wrapper>
  );
}

const RowWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:fit-content:
  height:fit-content;
`;

const InfoWrapper = styled.div.attrs(props => ({
  style: {}
}))`
  margin: 1.8rem 2.2rem;
`;

const Wrapper = styled.div.attrs(props => ({
  style: {
    display: props.isHovering ? "flex" : "none",
    left: `${props.onRight && props.x + props.radius}px`,
    right: `${!props.onRight &&
      window.innerWidth - 360 - props.x + props.radius}px`,
    top: `${props.onBottom && props.y + props.radius}px`,
    bottom: `${!props.onBottom &&
      window.innerHeight - props.y + props.radius}px`,
    borderRadius: `
    ${[
      [false, false],
      [true, false],
      [true, true],
      [false, true]
    ]
      .map(v => {
        let result = 0;
        if (v[0] === props.onRight) {
          result += 10;
        }
        if (v[1] === props.onBottom) {
          result += 10;
        }
        return result + "px";
      })
      .join(" ")}
    `
  }
}))`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1000;
  width: fit-content;
  height: fit-content;
  background-color: rgba(30, 30, 30, 0.8);
`;
