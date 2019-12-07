import React from "react";
import styled from "styled-components";

import Point from "./point";

import ProfileInfo from "../../../../../data/profile";
import ProfileInfoEmpty from "../../../../../data/profile_empty";

export default function Butterfly({ year }) {
  const POINTS = ProfileInfo.map((v, i) => (
    <Point year={year} data={v} key={i} opacity={1 - Math.random() * 0.5} />
  ));
  const POINTS_EMPTY = ProfileInfoEmpty.map((v, i) => (
    <Point year={year} data={v} key={i} opacity={1 - Math.random() * 0.5} />
  ));

  return (
    <Wrapper>
      {POINTS}
      {POINTS_EMPTY}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
