import React from "react";
import styled from "styled-components";

import P from "../../../atoms/p";
import { WHITE, PRIMARY } from "../../../atoms/colors";

import AliveNum from "../../../../data/alives";

export default function FloatingAlives({ year }) {
  if (year <= 1991) {
    return <div />;
  }
  return (
    <Wrapper>
      <P
        level={3}
        color={WHITE}
        fontWeight="medium"
        style={{ marginBottom: "1rem" }}
      >
        위안부 생존 수
      </P>
      <RemainRow>
        <P level={20} color={PRIMARY}>
          {AliveNum[year - 1992]}
        </P>
        <P level={3} color={WHITE} fontWeight="medium">
          명
        </P>
      </RemainRow>
    </Wrapper>
  );
}

const RemainRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Wrapper = styled.div`
    position:fixed;
    top:5rem;
    right:6rem;
    z-index:100;
    display:flex;
    flex-direction:column;
    width:fit-content:
    height:fit-content;
    align-items:flex-end;
`;
