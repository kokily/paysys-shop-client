import type { MouseEvent } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import { shadow } from '../../../styles';

const Button = styled.button<{ submit?: boolean; remove?: boolean }>`
  margin-top: 1rem;
  margin-right: 1rem;
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
    props.submit &&
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
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-right: 0.6rem;
  }
`;

interface Props {
  onSubmit: (e: MouseEvent) => void;
  onRemoveClick: () => void;
}

const CartButtons: React.FC<Props> = ({ onSubmit, onRemoveClick }) => {
  return (
    <>
      <Button submit onClick={onSubmit}>
        전송하기
      </Button>
      <Button remove onClick={onRemoveClick}>
        전체 삭제
      </Button>
    </>
  );
};

export default CartButtons;
