import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Search from '../common/Search';
import ItemsTable from './common/ItemsTable';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  width: 120px;
  float: right;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.4rem 0.25rem;
  border: 2px solid #e8590c;
  border-radius: 8px;
  text-align: center;
  color: #e8590c;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: white;
    border: 2px solid #f08c00;
    background: #e8590c;
  }

  h1 {
    text-align: center;
  }
`;

interface Props {
  items: ItemType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onReadItem: (id: string) => void;
}

const ListItems: React.FC<Props> = ({
  items,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onReadItem,
}) => (
  <Container>
    <Search
      mode="품명"
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />

    <Link href="/items/add">
      <Button>추가하기</Button>
    </Link>

    <ItemsTable items={items} onReadItem={onReadItem} />
  </Container>
);

export default ListItems;
