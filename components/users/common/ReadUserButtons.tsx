import React from 'react';
import styled, { css } from 'styled-components';
import { media, shadow } from '../../../styles';
import RemoveModal from '../../common/RemoveModal';

// Styles
const Container = styled.div`
  display: contents;
  margin-top: 1rem;
  ${media.large} {
    width: 1200px;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

const Button = styled.button<{
  menu?: boolean;
  remove?: boolean;
  admin?: boolean;
  employee?: boolean;
  password?: boolean;
}>`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.menu &&
    css`
      border: 1px solid #15aabf;
      background: white;
      color: #15aabf;
      &:hover {
        background: #228be6;
        color: white;
        ${shadow(1)};
      }
    `}
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
    props.admin &&
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
    props.employee &&
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
    props.password &&
    css`
      border: 1px solid #e64980;
      background: white;
      color: #e64980;
      &:hover {
        background: #e64980;
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
  onAdmin: () => void;
  onEmployee: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadUserButtons: React.FC<Props> = ({
  onList,
  onAdmin,
  onEmployee,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <>
      <Container>
        <Button menu onClick={onList}>
          목록으로
        </Button>
        <Button remove onClick={onRemoveClick}>
          삭제하기
        </Button>
        <Button employee onClick={onEmployee}>
          일반 강등
        </Button>
        <Button admin onClick={onAdmin}>
          관리자 승급
        </Button>
      </Container>
      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </>
  );
};

export default ReadUserButtons;
