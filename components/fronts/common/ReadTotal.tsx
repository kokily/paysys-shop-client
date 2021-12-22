import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .total {
    margin-bottom: 0.75rem;
    transition: 0.2s all;
    .reserve {
      cursor: pointer;
      &:hover {
        color: #ffa8a8;
      }
    }
  }
`;

interface Props {
  front: BillType;
}

const ReadTotal: React.FC<Props> = ({ front }) => {
  return (
    <Container>
      {front.reserve ? (
        <>
          <div className="total">
            총 금액 :{' '}
            <span style={{ color: 'gray', fontSize: '1.5rem' }}>
              {front.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            원
          </div>
          <div className="total">
            예약금 :{' '}
            <span className="reserve" style={{ color: 'red', fontSize: '1.5rem' }}>
              {front.reserve.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            원
          </div>
          <div className="total">
            결제금액 :{' '}
            <span style={{ color: 'blue', fontSize: '2rem' }}>
              {(front.total_amount - front.reserve)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            원
          </div>
        </>
      ) : (
        <div className="total">
          결제금액 :{' '}
          <span style={{ color: 'blue', fontSize: '2rem' }}>
            {front.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
      )}
    </Container>
  );
};

export default ReadTotal;
