import React from "react";
import Head from "next/head";
import styled from "styled-components";
import NoSSR from "react-no-ssr";

import Intro from "../src/components/templates/intro";
import Map from "../src/components/templates/map";
import Butterfly from "../src/components/templates/butterfly";

export default function home() {
  return (
    <NoSSR>
      <div>
        <Intro />
        <Map />
        <Butterfly />
      </div>
    </NoSSR>
  );
}
