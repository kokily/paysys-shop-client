import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';
import ReadCompany from '../detail/ReadCompany';
import ReadConvention from '../detail/ReadConvention';
import ReadEvent from '../detail/ReadEvent';
import ReadHanbok from '../detail/ReadHanbok';

// Styles
const Table = styled.table`
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
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
}

const ReadWeddingMobileTop: React.FC<Props> = ({
  wedding,
  convention,
  company,
  event,
  hanbok,
}) => {
  return (
    <>
      {wedding && (
        <Table>
          <tbody>
            <tr>
              <th colSpan={4}>예식비용</th>
            </tr>

            {convention && <ReadConvention convention={convention} />}
            {company && <ReadCompany company={company} />}
            {event && <ReadEvent event={event} />}
            {hanbok && <ReadHanbok hanbok={hanbok} />}

            <tr>
              <th style={{ color: '#d941c5', background: 'white' }}>총 예식비용</th>
              <td style={{ color: '#d941c5' }}>
                {stringAccounting(wedding.cost_husband)}원
              </td>
              <td style={{ color: '#d941c5' }}>
                {stringAccounting(wedding.cost_bride)}원
              </td>
              <td style={{ color: '#d941c5', fontWeight: 'bold' }}>
                {stringAccounting(wedding.cost_husband + wedding.cost_bride)}원
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingMobileTop;
