import React from 'react';
import styled, { css } from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { shadow } from '../../../styles';

const Container = styled.div`
  margin-bottom: 1rem;
  display: block;
`;

const Button = styled.button<{
  menu?: boolean;
  patch?: boolean;
  remove?: boolean;
  back?: boolean;
}>`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.remove &&
    css`
      border: 1px solid #fa5252;
      background: white;
      color: #fa5252;
      &:hover {
        background: #fa5252;
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.menu &&
    css`
      border: 1px solid #4c6ef5;
      background: white;
      color: #4c6ef5;
      &:hover {
        background: #4c6ef5;
        color: white;
        ${shadow(1)};
      }
    `}
    ${(props) =>
    props.patch &&
    css`
      border: 1px solid #fab005;
      background: white;
      color: #fab005;
      &:hover {
        background: #fab005;
        color: white;
        ${shadow(1)};
      }
    `}
      ${(props) =>
    props.back &&
    css`
      border: 1px solid #12b886;
      background: white;
      color: #12b886;
      &:hover {
        background: #12b886;
        color: white;
        ${shadow(1)};
      }
    `}
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

interface Props {
  onList: () => void;
  onEdit: () => void;
  onRemoveClick: () => void;
}

const ReadWeddingButtons: React.FC<Props> = ({ onList, onEdit, onRemoveClick }) => {
  return (
    <Container>
      <Button menu onClick={onList}>
        <BrowserView>목록으로</BrowserView>
        <MobileView>목록</MobileView>
      </Button>
      <Button patch onClick={onEdit}>
        <BrowserView>수정하기</BrowserView>
        <MobileView>수정</MobileView>
      </Button>
      <Button remove onClick={onRemoveClick}>
        <BrowserView>삭제하기</BrowserView>
        <MobileView>삭제</MobileView>
      </Button>
    </Container>
  );
};

export default ReadWeddingButtons;
