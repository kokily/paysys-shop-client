import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';

// Styles
const Container = styled.div`
  position: relative;
  width: 320px;
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
    background: rgba(0, 0, 0, 0.2);
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
  user: UserType;
}

const ReadUserContent: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <Table>
        <tr>
          <th>ID</th>
          <td>{user.id}</td>
        </tr>
        <tr>
          <th>등급</th>
          <td>{user.admin ? '관리자' : '일반'}</td>
        </tr>
        <tr>
          <th>성명</th>
          <td>{user.username}</td>
        </tr>
        <tr>
          <th>가입</th>
          <td>{new Date(user.created_at).toLocaleDateString()}</td>
        </tr>
      </Table>
    </Container>
  );
};

export default ReadUserContent;
