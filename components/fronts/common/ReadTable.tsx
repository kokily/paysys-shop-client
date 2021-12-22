import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  tr:hover {
    background: #91a7ff;
    color: white;
    strong {
      color: #c92a2a;
    }
  }
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    strong {
      color: #364fc7;
    }
  }
  th {
    background: #364fc7;
    color: white;
  }
`;

interface Props {
  front: BillType;
}

const ReadTable: React.FC<Props> = ({ front }) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>구분</th>
          <th>상품명</th>
          <th>단가</th>
          <th>수량</th>
          <th>소계</th>
        </tr>
      </thead>
      <tbody>
        {front.items === null || front.items.length === 0 ? (
          <tr>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        ) : (
          <>
            {front.items?.map((item, i) => (
              <tr key={i}>
                <td>{item.native}</td>
                <td>{item.name}</td>
                <td>
                  <span style={{ color: '#868e96' }}>
                    {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                  </span>
                </td>
                <td>{item.count}</td>
                <td>
                  {(item.price * item.count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
};

export default ReadTable;
