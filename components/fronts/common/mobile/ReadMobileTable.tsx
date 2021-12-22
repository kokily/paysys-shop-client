import React from 'react';
import styled, { css } from 'styled-components';

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

const Td = styled.td<{
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}>`
  ${(props) =>
    props.soldier &&
    css`
      background: #1098ad;
      color: white;
    `}
  ${(props) =>
    props.reserve &&
    css`
      background: #74b816;
      color: white;
    `}
  ${(props) =>
    props.general &&
    css`
      background: #fd7e14;
      color: white;
    `}
`;

interface Props {
  front: BillType;
}

const ReadMobileTable: React.FC<Props> = ({ front }) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>구분</th>
          <th>
            상품명
            <br />
            (단가)
          </th>
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
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.native}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.name}
                  <br />
                  <span style={{ color: '#ced4da', fontSize: '0.8rem' }}>
                    ({item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원)
                  </span>
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.count}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {(item.price * item.count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
};

export default ReadMobileTable;
