import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@media (max-width: 252px) {
  html {
    font-size: 70px;
  }
}
@media (min-width: 253px) and (max-width: 288px) {
  html {
    font-size: 80px;
  }
}
@media (min-width: 289px) and (max-width: 324px) {
  html {
    font-size: 90px;
  }
}
@media (min-width: 325px) and (max-width: 360px) {
  html {
    font-size: 100px;
  }
}
@media (min-width: 361px) and (max-width: 396px) {
  html {
    font-size: 110px;
  }
}
@media (min-width: 397px) and (max-width: 432px) {
  html {
    font-size: 120px;
  }
}
@media (min-width: 433px){
  html {
    font-size: 130px;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#121212;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

class JuhwanApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Container>
          <Head>
            <title>최고의 디자이너 윤주환</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default JuhwanApp;
