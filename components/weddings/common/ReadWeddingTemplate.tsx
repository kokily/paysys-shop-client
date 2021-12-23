import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import RemoveModal from '../../common/RemoveModal';
import ReadWeddingButtons from './ReadWeddingButtons';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .name {
    text-align: center;
    strong {
      color: #1098ad;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: #7950f2;
`;

interface Props {
  onList: () => void;
  onEdit: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadWeddingTemplate: React.FC<Props> = ({
  onList,
  onEdit,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
  children,
}) => {
  return (
    <Container>
      <Title>웨딩 정산 내역</Title>

      <div>{children}</div>

      <ReadWeddingButtons onList={onList} onEdit={onEdit} onRemoveClick={onRemoveClick} />

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default ReadWeddingTemplate;
