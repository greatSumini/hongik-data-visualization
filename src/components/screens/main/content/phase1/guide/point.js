import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { PRIMARY } from "../../../../../atoms/colors";

const RADIUS = [5.5, 6.5, 10];
const SPREAD = 5;
const color = "255, 244, 146";
const TWINKLE_SPEED = 6;
const TWINKLE_MAX_OPACITY = 0.7;
const TWINKLE_MIN_OPACITY = 0.2;
const FADE_OUT_SPEED = 1;

export default function Point({ data, level }) {
  const LIGHT_ON = `box-shadow: 0px 0px ${RADIUS[level] *
    5}px ${SPREAD}px rgba(${color},${TWINKLE_MAX_OPACITY});`;
  const LIGHT_OFF = `box-shadow: 0px 0px ${RADIUS[level] *
    5}px ${SPREAD}px rgba(${color},${TWINKLE_MIN_OPACITY});`;

  const glowKeyframes1 = keyframes`
    0% { ${LIGHT_ON} } 
    50% { ${LIGHT_OFF} }
    100% { ${LIGHT_ON} }
  `;
  return (
    <>
      <Wrapper
        level={level}
        x={data.x}
        y={data.y}
        alive={true}
        glowKeyframes={glowKeyframes1}
      >
        {level > 0 && <Inner level={level} />}
      </Wrapper>
    </>
  );
}

const Inner = styled.div.attrs(props => ({
  style: {
    width: `${RADIUS[props.level] * 2 * 0.57}px`,
    height: `${RADIUS[props.level] * 2 * 0.57}px`
  }
}))`
  border-radius: 50%;
  background: rgba(${color}, 0.75);
  z-index: 100;
  box-shadow: 0 0 20px 2px ${PRIMARY};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  ${props => css`
  -webkit-transition: opacity ${FADE_OUT_SPEED}s ease-in-out;
    -moz-transition: opacity ${FADE_OUT_SPEED}s ease-in-out;
    -ms-transition: opacity ${FADE_OUT_SPEED}s ease-in-out;
    -o-transition: opacity ${FADE_OUT_SPEED}s ease-in-out;
    opacity:${props.alive ? 1 : 0.1};
  background: rgba(${color}, ${props.level > 0 ? 0.6 : 0.2});
    width: ${RADIUS[props.level] * 2}px;
    height: ${RADIUS[props.level] * 2}px;
    ${props.level > 0 &&
      props.alive &&
      css`
        animation: ${props.glowKeyframes} ${TWINKLE_SPEED}s ease-in-out infinite;
      `}
    left: ${props.x}px;
    top: ${props.y}px;
  `}
`;
