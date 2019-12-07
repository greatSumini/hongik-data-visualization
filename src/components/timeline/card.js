import React from "react";
import styled, { css } from "styled-components";

import P from "../atoms/p";
import { WHITE, PRIMARY } from "../atoms/colors";

export default function TimelineCard(props) {
  return (
    <Wrapper id={props.year} selected={props.selected}>
      <P
        onClick={props.onClick}
        level={25}
        color={PRIMARY}
        fontWeight={300}
        style={{ marginBottom: "4rem", letterSpacing: "-2.5px" }}
      >
        {props.year === 1946 ? "1946-1990" : props.year}
      </P>
      {props.selected &&
        props.data &&
        props.data.map((v, i) => (
          <DataWrapper key={i}>
            {v.date && (
              <P
                level={3}
                color={WHITE}
                style={{
                  marginBottom: "0.07rem",
                  lineHeight: 2,
                  letterSpacing: "-0.67px"
                }}
              >
                {v.date}
              </P>
            )}
            {v.title && (
              <P
                level={5}
                color={WHITE}
                style={{
                  marginBottom: "2rem",
                  lineHeight: 1.6,
                  letterSpacing: "-0.83px"
                }}
              >
                {v.title}
              </P>
            )}
            <P
              level={3}
              color={WHITE}
              fontWeight={300}
              style={{
                lineHeight: 2,
                letterSpacing: "-0.67px"
              }}
              preWrap
            >
              {v.content.map(v2 => {
                if (v2.text.length === 0) {
                  return (
                    <P
                      level={3}
                      fontWeight={300}
                      style={{
                        lineHeight: 2,
                        letterSpacing: "-0.67px"
                      }}
                    />
                  );
                }
                if (v2.highlighted) {
                  return <Highlighted>{v2.text}</Highlighted>;
                } else {
                  return <Depressed>{v2.text}</Depressed>;
                }
              })}
            </P>
          </DataWrapper>
        ))}
    </Wrapper>
  );
}

const Highlighted = styled.strong`
  font-size: 16px;
  font-weight: 500;
`;

const Depressed = styled.strong`
  font-size: 16px;
  font-weight: 300;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  margin-bottom: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  margin-bottom: -5rem;
  padding-top: 6rem;
  ${props => css`
    ${!props.selected && "opacity: 0.3"};
  `}
`;
