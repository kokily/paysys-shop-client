import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import ListMenuItem from './ListMenuItem';

// Styles
const Container = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const List = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

interface Props {
  menu: ItemType[];
  onList: () => void;
  onMenu: (id: string) => void;
}

const ListMenu: React.FC<Props> = ({ menu, onList, onMenu }) => {
  return (
    <Container>
      {menu && (
        <>
          <Title>
            <h2>{menu[0] && menu[0].divide}</h2>
            <Button cancel onClick={onList}>
              뒤로
            </Button>
          </Title>

          <List>
            {menu.map((item) => (
              <ListMenuItem key={item.id} item={item} onMenu={onMenu} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default ListMenu;
