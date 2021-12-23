import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';

// Styles
const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 36px auto;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${shadow(1)};
`;

const Table = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  tr:hover {
    background: rgba(140, 206, 223, 0.2);
  }

  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  th {
    background: #364fc7;
    color: white;
  }
`;

interface Props {
  item: ItemType | null;
}

const ReadItemContent: React.FC<Props> = ({ item }) => (
  <Container>
    {item && (
      <Table>
        <tbody>
          <tr>
            <th>품명</th>
            <td>{item.name}</td>
          </tr>
          <tr>
            <th>출 신</th>
            <td>{item.native}</td>
          </tr>
          <tr>
            <th>구 분</th>
            <td>{item.divide}</td>
          </tr>
          <tr>
            <th>단 위</th>
            <td>{item.unit}</td>
          </tr>
          <tr>
            <th>단 가</th>
            <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
          </tr>
        </tbody>
      </Table>
    )}
  </Container>
);

export default ReadItemContent;
