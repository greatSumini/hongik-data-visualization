import React from "react";

import ContentWrapper from "../wrapper";
import Butterfly from "./butterfly";
import FloatingAlives from "./floating-alives";

export default function Phase1({ year }) {
  return (
    <ContentWrapper>
      <Butterfly year={year} />
      <FloatingAlives year={year} />
    </ContentWrapper>
  );
}
