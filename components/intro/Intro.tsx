import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 320px;
    height: auto;
    margin-right: 4rem;
  }

  ul {
    list-style: none;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background: #4e4e4e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const Intro: React.FC<Props> = () => (
  <Container>
    <h2>iOS Paysys Shop 소개</h2>

    <ContentBox>
      <img src="/iphone.png" alt="ios" />

      <div>
        <h3>행사전표 등록 및 조회</h3>
        <ul>
          <li>
            <h4>[현역, 예비역, 일반]: 출신별 메뉴 조회</h4>
          </li>
          <li>
            <h4>[전표확인]: 작성된 전표 확인</h4>
          </li>
          <li>
            <h4>[FrontList]: 기 저장된 전표 리스트</h4>
          </li>
        </ul>
      </div>
    </ContentBox>

    <Footer>
      Copyright (c) D&K Dream 2022<br />
      email: hkkokily5@gmail.com
    </Footer>
  </Container>
);

export default Intro;
