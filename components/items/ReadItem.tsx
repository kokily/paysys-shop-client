import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../styles';
import RemoveModal from '../common/RemoveModal';
import ReadItemButtons from './common/ReadItemButtons';
import ReadItemContent from './common/ReadItemContent';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.medium} {
    padding: 0.2rem;
  }
`;

const WhiteBoard = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: #dbe4ff;
  ${media.medium} {
    width: 100%;
  }
`;

const Header = styled.div`
  h2 {
    font-size: 1.712rem;
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, #12b886, #5c7cfa);
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

interface Props {
  item: ItemType | null;
  onList: () => void;
  onEdit: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadItem: React.FC<Props> = ({
  item,
  onList,
  onEdit,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => (
  <Container>
    <WhiteBoard>
      <Header>
        <h3>품목 상세보기</h3>
      </Header>

      <DownBorder />

      <ReadItemButtons onList={onList} onEdit={onEdit} onRemoveClick={onRemoveClick} />

      <ReadItemContent item={item} />
    </WhiteBoard>

    <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
  </Container>
);

export default ReadItem;
