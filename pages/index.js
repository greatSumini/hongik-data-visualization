import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import NoSSR from "react-no-ssr";
import Scroll from "react-scroll";

import Intro from "../src/components/screens/intro";
import Main from "../src/components/screens/main";
import Ending from "../src/components/screens/ending";
import { useScrollPosition } from "../src/components/scroll";

const scroll = Scroll.animateScroll;

export default function home() {
  const [scrollling, setScrolling] = useState();

  const handleScroll = () => {
    if (window.scrollY === 0 || window.scrollY === window.innerHeight) {
      if (!scrollling) {
        setScrolling(true);
      }
    }
    if (scrollling) {
      return;
    }
    if (window.scrollY > 10 && window.scrollY < 100) {
      setScrolling(true);
      scroll.scrollTo(window.innerHeight);
    }
    if (
      window.scrollY > window.innerHeight - 100 &&
      window.scrollY < window.innerHeight - 10
    ) {
      setScrolling(true);
      scroll.scrollTo(window.innerHeight);
    }
  };

  return (
    <NoSSR>
      <div
        onScroll={handleScroll}
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto"
        }}
      >
        <Intro />
        <Main />
        <Ending />
      </div>
    </NoSSR>
  );
}
