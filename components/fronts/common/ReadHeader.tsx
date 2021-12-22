import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

// Styles
const InfoHeader = styled.div`
  text-align: center;
  padding-bottom: -1.5rem;
  small {
    color: #364fc7;
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, #12b886, #22b8cf);
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const InfoContent = styled.div`
  float: right;
  text-align: center;
  position: relative;
  width: 280px;
  font-size: 0.8rem;
  margin: 30px auto;
  margin-right: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${media.xsmall} {
    margin-right: 0.6rem;
  }
  table {
    width: 100%;
    padding: 0;
  }
  tr:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  th,
  td {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    text-align: center;
  }
  th {
    background: #364fc7;
    color: white;
  }
`;

interface Props {
  front: BillType;
}

const ReadHeader: React.FC<Props> = ({ front }) => {
  return (
    <>
      <InfoHeader>
        <h2>
          전표 세부내역
          <br />
          <small>[ {front.title} ]</small>
        </h2>
      </InfoHeader>

      <DownBorder />

      <InfoContent>
        <table>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>{front.username} 님</td>
            </tr>
            <tr>
              <th>작성일자</th>
              <td>{new Date(front.created_at).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>작성시간</th>
              <td>{new Date(front.created_at).toLocaleTimeString()}</td>
            </tr>
            <tr>
              <th>행사장소</th>
              <td>{front.hall}</td>
            </tr>
          </tbody>
        </table>
      </InfoContent>
    </>
  );
};

export default ReadHeader;
