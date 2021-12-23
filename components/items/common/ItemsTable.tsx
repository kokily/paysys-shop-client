import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

// Styles
const Container = styled.table`
  margin-left: 5rem;
  margin-right: 5rem;
  ${media.medium} {
    margin-left: 0;
    margin-right: 0;
  }
  border-radius: 0.8rem;
  overflow: hidden;

  tr {
    &:hover {
      background: rgba(255, 187, 0, 0.2);
    }
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: #15aabf;
    color: white;
  }
`;

interface Props {
  items: ItemType[];
  onReadItem: (id: string) => void;
}

const ItemsTable: React.FC<Props> = ({ items, onReadItem }) => (
  <Container>
    <thead>
      <tr>
        <th>분류</th>
        <th>구분</th>
        <th>상품명</th>
        <th>단위</th>
        <th>단가</th>
      </tr>
    </thead>
    <tbody>
      {items === null || items.length === 0 ? (
        <tr>
          <td colSpan={5}>데이터가 없습니다.</td>
        </tr>
      ) : (
        <>
          {items.map((item) => (
            <tr
              key={item.num}
              style={{ cursor: 'pointer' }}
              onClick={() => onReadItem(item.id)}
            >
              <td>{item.divide}</td>
              <td>{item.native}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  </Container>
);

export default ItemsTable;
