import React from "react";
import styled from "styled-components";

import { PRIMARY } from "./colors";

const FONT_WEIGHT = {
  thin: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

const SKETCH_LINE = [15, 18, 22, 24, 29];

const defaultProps = {
  level: 0,
  fontWeight: "regular",
  color: PRIMARY
};

export default function P(props) {
  const {
    width,
    style,
    children,
    onClick,
    textAlign,
    ellipsis,
    preWrap,
    className,
    level,
    color,
    fontWeight
  } = props;

  const _P = styled.p`
    padding: 0;
    margin: 0;
    font-size: ${1 + level * 0.2}rem;
    color: ${color};
    font-weight: ${typeof fontWeight === "number"
      ? fontWeight
      : FONT_WEIGHT[fontWeight]};
    width: ${width || "fit-content"};
    height: fit-content;
    text-align: ${textAlign || "left"};

    line-height: ${SKETCH_LINE[level] / (10 + level * 2)};
    letter-spacing: -0.56px;
    word-break: keep-all;
    ${ellipsis &&
      `white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      overflow: hidden
    `}
    ${preWrap &&
      `
    white-space: pre-wrap; 
    `}
  `;
  return (
    <_P className={className} style={style} onClick={onClick}>
      {children}
    </_P>
  );
}

P.defaultProps = defaultProps;
