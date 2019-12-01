import React from "react";
import Head from "next/head";
import styled from "styled-components";
import NoSSR from "react-no-ssr";

import Intro from "../src/components/templates/intro";
import Main from "../src/components/templates/main";

export default function home() {
  return (
    <NoSSR>
      <div>
        <Intro />
        <Main />
      </div>
    </NoSSR>
  );
}
