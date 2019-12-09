import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { PRIMARY } from "../../../../../atoms/colors";

import HoverBoard from "./hover-board";

const RADIUS = [4.5, 5, 9];
const SPREAD = 5;
const color = "255, 244, 146";
const TWINKLE_SPEED = 6;
const TWINKLE_MAX_OPACITY = 0.7;
const TWINKLE_MIN_OPACITY = 0.2;
const FADE_OUT_SPEED = 1;

export default function Point({ year, data, opacity }) {
  const [sizeRate, setSizeRate] = useState([1, 1]);
  const [isVer1] = useState(opacity < 0.75);
  const [isHovering, setHovering] = useState(false);

  const level = data.comment ? 2 : data.name ? 1 : 0;

  const LIGHT_ON = `box-shadow: 0px 0px ${RADIUS[level] *
    2}px ${SPREAD}px rgba(${color},${TWINKLE_MAX_OPACITY});`;
  const LIGHT_OFF = `box-shadow: 0px 0px ${RADIUS[level] *
    2}px ${SPREAD}px rgba(${color},${TWINKLE_MIN_OPACITY});`;

  const glowKeyframes1 = keyframes`
    0% { ${LIGHT_ON} } 
    50% { ${LIGHT_OFF} }
    100% { ${LIGHT_ON} }
  `;
  const glowKeyframes2 = keyframes`
    0% { ${LIGHT_OFF} } 
    50% { ${LIGHT_ON} }
    100% { ${LIGHT_OFF} }
  `;

  const isRemarkable = () => {
    if (data.remarkable === "" || !data.remarkable) {
      return false;
    }
    let i = 0;
    for (; i < data.remarkable.length; ++i) {
      if (data.remarkable[i] === year) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setSizeRate([
      (window.innerWidth - 500) / 940,
      (window.innerHeight - 140) / (1024 - 140)
    ]);
  }, []);
  return (
    <>
      <Wrapper
        level={level}
        x={data.x}
        y={data.y}
        sizeRate={sizeRate}
        opacity={opacity}
        alive={!data.dead || data.dead >= year}
        glowKeyframes={isVer1 ? glowKeyframes1 : glowKeyframes2}
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => setHovering(false)}
      >
        {level > 0 && <Inner level={level} />}
        {isRemarkable() && <Wave level={level} />}
      </Wrapper>
      {level > 0 && year < 9999 && (
        <HoverBoard
          radius={RADIUS[level]}
          isHovering={isHovering}
          data={data}
          sizeRate={sizeRate}
        />
      )}
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
  position: absolute;
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
  background: rgba(${color}, ${props.level > 0 ? 0.6 : 0.4});
    width: ${RADIUS[props.level] * 2}px;
    height: ${RADIUS[props.level] * 2}px;
    ${props.level > 0 &&
      props.alive &&
      css`
        animation: ${props.glowKeyframes} ${TWINKLE_SPEED}s ease-in-out infinite;
      `}
    left: ${(props.x - 360) * props.sizeRate[0] + 45}px;
    top: ${props.y * props.sizeRate[1] + 8}px;
  `}
`;

function Wave() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Delay1 />
      <Delay2 />
      <Delay3 />
      <Delay4 />
    </div>
  );
}

const Circle = styled.div.attrs(props => ({}))`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: ${PRIMARY};
  transition: 5s ease;
  position: absolute;
  top: 0;
  left: 0;
  ${props => css``}
`;

const waves = keyframes`
0% {
  transform: scale(1);
  opacity: 0.5;
}
100% {
  transform: scale(4.5);
  opacity: 0;
}
`;

const Delay1 = styled(Circle)`
  && {
    animation: ${waves} 6s linear infinite;
    animation-delay: 0.1s;
  }
`;

const Delay2 = styled(Circle)`
  && {
    animation: ${waves} 6s linear 1.5s forwards infinite;
  }
`;

const Delay3 = styled(Circle)`
  && {
    animation: ${waves} 6s linear 3s forwards infinite;
  }
`;

const Delay4 = styled(Circle)`
  && {
    animation: ${waves} 6s linear 4.5s forwards infinite;
  }
`;
