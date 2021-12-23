import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';
import Button from '../../common/Button';

const Container = styled.div`
  display: contents;
  margin-top: 1rem;
  button {
    margin-right: 0.5rem;
  }
  ${media.large} {
    width: 1200px;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

interface Props {
  onList: () => void;
  onEdit: () => void;
  onRemoveClick: () => void;
}

const ReadItemButtons: React.FC<Props> = ({ onList, onEdit, onRemoveClick }) => (
  <Container>
    <Button submit onClick={onList}>
      목록
    </Button>
    <Button edit onClick={onEdit}>
      수정
    </Button>
    <Button cancel onClick={onRemoveClick}>
      삭제
    </Button>
  </Container>
);

export default ReadItemButtons;
