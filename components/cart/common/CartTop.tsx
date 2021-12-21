import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';

// Styles
const Table = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const Th = styled.th`
  background: #0ca678;
  color: white;
`;

const Td = styled.td`
  border-bottom: 1px solid #0ca678;
  strong {
    color: blue;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 40px;
  font-size: 0.8rem;
  border: 1px solid #c92a2a;
  border-radius: 4px;
  background: white;
  color: #c92a2a;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #c92a2a;
    color: white;
    ${shadow(1)};
  }
`;

interface Props {
  cart: CartType | null;
  onRemoveOne: (id: string, name: string) => void;
}

const CartTop: React.FC<Props> = ({ cart, onRemoveOne }) => {
  return (
    <>
      <h2>전표 확인(종합)</h2>

      <Table>
        <thead>
          <tr>
            <Th>적용</Th>
            <Th>수량</Th>
            <Th>단가</Th>
            <Th>삭제</Th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.items ? (
            cart.items.map((item) => (
              <tr key={item.id}>
                <Td>
                  [ {item.native} ]<br />
                  {item.divide}
                </Td>
                <Td>{item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Td>
                <Td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원 /<br />
                  <strong>
                    {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                  </strong>
                </Td>
                <Td>
                  <Button onClick={() => onRemoveOne(item.id, item.name)}>삭 제</Button>
                </Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan={4}>데이터가 없습니다.</Td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default CartTop;
