import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';
import ReadMeal from '../detail/ReadMeal';
import ReadPrepayment from '../detail/ReadPrepayment';
import ReadPresent from '../detail/ReadPresent';
import ReadReserve from '../detail/ReadReserve';
import Vacuity from '../detail/Vacuity';

// Styles
const Container = styled.table`
  display: inline;
  font-size: 0.95rem;
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #e3e0fa;
    color: #7950f2;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: #ffa94d;
    }
    &.cyan {
      background: #3bc9db;
    }
    &.red {
      background: white;
      color: #d941c5;
    }
  }
  td {
    width: 93.3px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: #5f3dc4;
      font-weight: bold;
    }
  }
  h3 {
    margin: 0.96rem;
  }
`;

interface Props {
  wedding: WeddingType | null;
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
  hanbok: HanbokType | null;
  prepayment: PrepaymentType | null;
}

const ReadWeddingRight: React.FC<Props> = ({
  wedding,
  meal,
  present,
  reserve,
  hanbok,
  prepayment,
}) => {
  let allCost = 0;
  let payment = 0;
  let husbandCost = 0;
  let brideCost = 0;

  if (wedding && meal && present && hanbok) {
    allCost =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride;

    payment =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride -
      wedding.reserve_husband -
      wedding.reserve_bride -
      hanbok.hanbok_pre_husband -
      hanbok.hanbok_pre_bride -
      (prepayment ? prepayment.prepayment_husband : 0) -
      (prepayment ? prepayment.prepayment_bride : 0);

    husbandCost =
      wedding.cost_husband +
      wedding.meal_husband +
      wedding.present_husband -
      wedding.reserve_husband -
      hanbok.hanbok_pre_husband -
      (prepayment ? prepayment.prepayment_husband : 0);

    brideCost =
      wedding.cost_bride +
      wedding.meal_bride +
      wedding.present_bride -
      wedding.reserve_bride -
      hanbok.hanbok_pre_bride -
      (prepayment ? prepayment.prepayment_bride : 0);
  }

  return (
    <>
      {wedding && (
        <Container>
          <tbody>
            {meal && <ReadMeal meal={meal} />}
            <Vacuity />
            {present && <ReadPresent present={present} />}
            <Vacuity />
            {reserve && hanbok && <ReadReserve reserve={reserve} hanbok={hanbok} />}
            <ReadPrepayment prepayment={prepayment} />

            <tr style={{ height: '176px' }}>
              <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'silver' }}>
                  ?????? ??? ??????: {stringAccounting(allCost)}???
                </h3>
                <h3 style={{ color: 'blue' }}>
                  ?????? ??? ??????: {stringAccounting(payment)}???
                </h3>
                <h3>?????? ??? ????????????: {stringAccounting(husbandCost)}???</h3>
                <h3>?????? ??? ????????????: {stringAccounting(brideCost)}???</h3>
              </td>
            </tr>
          </tbody>
        </Container>
      )}
    </>
  );
};

export default ReadWeddingRight;
