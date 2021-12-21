import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  .total {
    float: right;
  }
`;

interface Props {
  totalAmount: number;
}

const TotalAmount: React.FC<Props> = ({ totalAmount }) => {
  return (
    <Container>
      <div className="total">
        예상 결제금액 :{' '}
        <span style={{ color: 'red', fontSize: '2rem' }}>
          {totalAmount && totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
        원
      </div>
    </Container>
  );
};

export default TotalAmount;
