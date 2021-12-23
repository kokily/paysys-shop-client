import type { MouseEvent } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import { shadow } from '../../../styles';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Button = styled.button<{
  submit?: boolean;
  back?: boolean;
}>`
  width: 6rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.back &&
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
    margin-left: 0.5rem;
  }
`;

interface Props {
  onList: () => void;
  onSubmit: (e: MouseEvent) => void;
}

const ExpenseButtons: React.FC<Props> = ({ onList, onSubmit }) => {
  return (
    <ButtonBox>
      <Button back onClick={onList}>
        취소하기
      </Button>
      <Button submit onClick={onSubmit}>
        저장하기
      </Button>
    </ButtonBox>
  );
};

export default ExpenseButtons;
