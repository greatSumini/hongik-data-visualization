import React from "react";
import styled from "styled-components";
import { BACKGROUND_BLACK } from "../atoms/colors";

import TIMELINE_DATA from "../../data/timeline";
import Card from "./card";

export default function Timeline() {
  console.log(TIMELINE_DATA[1933]);
  const getCards = () => {
    let suminArray = [];
    for (let i = 1933; i <= 2019; i++) {
      if (i <= 1946 || i > 1990) {
        suminArray.push(i);
      }
    }
    return suminArray.map((v, i) => (
      <Card key={i} year={v} data={TIMELINE_DATA[v]} />
    ));
  };

  return <Wrapper>{getCards()}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6rem 3rem 6rem 4rem;
  width: 36rem;
  background-color: ${BACKGROUND_BLACK};
`;
