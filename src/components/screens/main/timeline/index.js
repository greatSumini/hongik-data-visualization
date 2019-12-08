import React from "react";
import styled from "styled-components";
import { BACKGROUND_BLACK } from "../../../atoms/colors";

import TIMELINE_DATA from "../../../../data/timeline";
import Card from "./card";

export default function Timeline(props) {
  const { year, setYear, move } = props;

  const getCards = () => {
    let suminArray = [];
    for (let i = 1933; i <= 2019; i++) {
      if (i <= 1946 || i > 1990) {
        suminArray.push(i);
      }
    }
    return suminArray.map((v, i) => (
      <Card
        key={i}
        selected={year === v}
        year={v}
        data={TIMELINE_DATA[v]}
        onClick={() => move(v)}
        goPrev={() => move(year - 1)}
        goNext={() => move(year + 1)}
      />
    ));
  };

  return <Wrapper>{getCards()}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2.1rem calc(100vh - 108px) 2.4rem;
  width: 36rem;
  background-color: ${BACKGROUND_BLACK};
`;
