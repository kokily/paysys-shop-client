import React from 'react';
import styled, { css } from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { media, shadow } from '../../../styles';

interface ButtonProps {
  remove?: boolean;
  restore?: boolean;
  menu?: boolean;
  reserve?: boolean;
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${media.xsmall} {
    padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  }
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
    props.restore &&
    css`
      border: 1px solid #15aabf;
      background: white;
      color: #15aabf;
      &:hover {
        background: #15aabf;
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
    props.reserve &&
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
&:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

interface Props {
  front: BillType;
  onList: () => void;
  onRestore: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
  onRemoveClick: () => void;
  user_id: string | null;
  admin: boolean;
}

const ReadButtons: React.FC<Props> = ({
  front,
  onList,
  onRestore,
  onReserve,
  onRemoveReserve,
  onRemoveClick,
  user_id,
  admin,
}) => {
  return (
    <Container>
      <ButtonBox>
        {user_id && front && (admin || front.user_id === user_id) && (
          <>
            <Button remove onClick={onRemoveClick}>
              <BrowserView>삭제하기</BrowserView>
              <MobileView>삭제</MobileView>
            </Button>
            <Button restore onClick={onRestore}>
              <BrowserView>수정하기</BrowserView>
              <MobileView>수정</MobileView>
            </Button>
          </>
        )}
        <Button menu onClick={onList}>
          <BrowserView>목록으로</BrowserView>
          <MobileView>목록</MobileView>
        </Button>
        {user_id && front && admin && (
          <>
            {!front.reserve || front.reserve === 0 ? (
              <Button reserve onClick={onReserve}>
                + 예약금
              </Button>
            ) : (
              <Button reserve onClick={onRemoveReserve}>
                예약금 삭제
              </Button>
            )}
          </>
        )}
      </ButtonBox>
    </Container>
  );
};

export default ReadButtons;
