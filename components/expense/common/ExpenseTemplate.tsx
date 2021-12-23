import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import ExpenseButtons from './ExpenseButtons';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  ${shadow(1)}
  animation: 0.2s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: #7048e8;
`;

const Content = styled.div`
  text-align: center;
  table {
    font-size: 0.95rem;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #9775fa;
    color: white;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: #ffa94d;
    }
    &.cyan {
      background: #3bc9db;
    }
    &.red {
      background: #ff8787;
    }
  }
  td {
    width: 100px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: #1864ab;
      font-weight: bold;
    }
  }
`;

interface Props {
  edit?: boolean;
  onList: () => void;
  onSubmit: (e: MouseEvent) => void;
}

const ExpenseTemplate: React.FC<Props> = ({ children, edit, onList, onSubmit }) => {
  return (
    <Container>
      <Title>웨딩 정산 {edit ? '수정' : '작성'}</Title>

      <Content>{children}</Content>

      <ExpenseButtons onList={onList} onSubmit={onSubmit} />
    </Container>
  );
};

export default ExpenseTemplate;
