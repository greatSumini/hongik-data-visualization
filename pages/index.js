import React from "react";
import Head from "next/head";
import styled from "styled-components";

export default function home() {
  return (
    <div>
      <Head>
        <title>최고의 디자이너 윤주환</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>최고의 동아리 CEOS</Title>
    </div>
  );
}

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  color: #fff;
  text-align: center;
`;
