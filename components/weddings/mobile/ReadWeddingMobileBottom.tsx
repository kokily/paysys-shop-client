import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';
import ReadMeal from '../detail/ReadMeal';
import ReadPrepayment from '../detail/ReadPrepayment';
import ReadPresent from '../detail/ReadPresent';
import ReadReserve from '../detail/ReadReserve';
import Vacuity from '../detail/Vacuity';

// Styles
const Table = styled.table`
  margin-top: 2rem;
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #e3e0fa;
    color: #5f3dc4;
    width: 160px;
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
    width: 90px;
    font-size: 0.85rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: #5f3dc4;
      font-weight: bold;
    }
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

const ReadWeddingMobileBottom: React.FC<Props> = ({
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
        <Table>
          <tbody>
            {meal && <ReadMeal meal={meal} />}
            <Vacuity />
            {present && <ReadPresent present={present} />}
            <Vacuity />
            {reserve && hanbok && <ReadReserve reserve={reserve} hanbok={hanbok} />}
            <ReadPrepayment prepayment={prepayment} />

            <tr>
              <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'silver' }}>
                  웨딩 총 비용: {stringAccounting(allCost)}원
                </h3>
                <h3 style={{ color: 'blue' }}>
                  결제 총 비용: {stringAccounting(payment)}원
                </h3>
                <h3>신랑 총 결제비용: {stringAccounting(husbandCost)}원</h3>
                <h3>신부 총 결제비용: {stringAccounting(brideCost)}원</h3>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingMobileBottom;
