import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../styles';

// Styles
const Container = styled.div`
  color: white;
  ${shadow(1)};
  font-size: 1.215rem;
  font-weight: 700;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &.현역 {
    background: #15aabf;
  }
  &.예비역 {
    background: #94d82d;
  }
  &.일반 {
    background: #ffa94d;
  }
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
  &:hover {
    -webkit-filter: brightness(1);
    filter: brightness(1);
  }
  &:active {
    transform: translateY(3px);
  }
`;

interface Props {
  item: ItemType;
  onMenu: (id: string) => void;
}

const ListMenuItem: React.FC<Props> = ({ item, onMenu }) => {
  return (
    <Container className={item.native} onClick={() => onMenu(item.id)}>
      {item.name} | {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Container>
  );
};

export default ListMenuItem;
