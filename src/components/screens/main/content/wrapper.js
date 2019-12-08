import React from "react";
import styled, { css } from "styled-components";

import { useScrollPosition } from "../../../scroll";

export default function ContentWrapper({ children }) {
  const scrollPosition = useScrollPosition();
  return (
    <FixedWrapper
      style={{
        bottom: Math.max(
          Math.min(scrollPosition - window.innerHeight, 0),
          scrollPosition - (window.innerHeight + 42 * 108)
        )
      }}
    >
      <Wrapper>{children}</Wrapper>
    </FixedWrapper>
  );
}

const FixedWrapper = styled.div`
  position: fixed;
  right: 0;
  width: calc(100% - 36rem);
  height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
`;
