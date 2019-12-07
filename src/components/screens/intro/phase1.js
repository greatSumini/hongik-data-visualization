import React from "react";
import styled from "styled-components";
import Scroll from "react-scroll";
import FadeIn from "../../fade-in";

import P from "../../atoms/p";

import ButterflyMiniIcon from "../../../assets/icons/butterfly-mini";
import ChevronDownIcon from "../../../assets/icons/chevron/down";

import { PRIMARY, MIDDLE_GREY, WHITE } from "../../atoms/colors";

const scroll = Scroll.animateScroll;

export default function Phase1() {
  return (
    <Wrapper>
      <FadeIn transitionDuration={1500}>
        <Wrapper>
          <ButterflyMiniIcon />
          <P
            level={35}
            color={PRIMARY}
            style={{
              fontFamily: "Nanum Myeongjo",
              margin: "9rem 0 6rem",
              lineHeight: 1.1
            }}
            fontWeight={200}
            onClick={() => console.log(window.innerWidth, window.innerHeight)}
          >
            소녀, 나비, 빛
          </P>
          <P
            level={4}
            color={WHITE}
            preWrap
            textAlign="center"
            fontWeight={300}
            style={{ marginBottom: "6rem" }}
          >
            {`일본군 ‘위안부’는 일제강점기에 일본군에 강제동원되어 성노예 생활을 강요당한 여성을 지칭힌다. 
이들은 취업사기, 협박, 인신매매 등의 방법을 통해 위안소로 끌려 갔으며, 그곳에서 강제로 군인에게 성을 제공하며 많은 고통을 겪었다.

이러한 피해를 당했던 2차 세계 대전으로부터 70년이 지나, 소녀들은 할머니가 되었지만 여전히 진정한 사과를 받지 못했다. 
긴 세월 동안 다양한 투쟁을 이어나가고 계신 할머니들은 2019년 올해로 20분만이 남게 되었다. 
시각화를 통해 그들의 고통에 공감하고 위안부 문제의 시급성을 전달하고자 한다.`}
          </P>

          <P
            level={1}
            color={MIDDLE_GREY}
            preWrap
            textAlign="center"
            fontWeight={500}
            style={{
              marginBottom: "9rem",
              lineHeight: 1.67,
              letterSpacing: "-0.3px"
            }}
          >
            {`*현재 우리 사회에서는 일본군 ‘성노예’라는 용어보다 ‘위안부’라는 용어를 널리 사용하고 있다. 문제의 본질을 드러내기에 적합하지 않지만 
이러한 용어를 만들어 제도화한 당대의 특수한 분위기를 전달해 주며, 생존자들이 정신적 상처를 입을 수 있기 때문이다. 본 시각화에서도 이러한 이유에 따라 ‘위안부’라는 용어를 사용했다.`}
          </P>
          <div onClick={() => scroll.scrollTo(window.innerHeight)}>
            <ChevronDownIcon />
          </div>
        </Wrapper>
      </FadeIn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
