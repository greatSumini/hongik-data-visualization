import React from "react";
import App from "next/app";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Gotham-Light;
  src: url(/Gotham-Light.ttf);
}

@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
html {
  font-size:10px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Gotham-Light', 'Noto Sans KR';
  background-color:#000;
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
        <Head>
          <title>소녀, 나비, 빛</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default JuhwanApp;
