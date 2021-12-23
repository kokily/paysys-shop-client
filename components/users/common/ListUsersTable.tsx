import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../../styles';

// Styles
const Container = styled.table`
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  ${shadow(1)}
  ${media.medium} {
    margin-left: 0;
    margin-right: 0;
  }

  tr {
    &:hover {
      background: rgba(255, 187, 0, 0.2);
    }
  }
  th,
  td {
    border-radius: 0.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: #15aabf;
    color: white;
    ${media.medium} {
      &:first-child {
        width: 45%;
      }
    }
  }
`;

interface Props {
  users: UserType[];
  onReadUser: (id: string) => void;
}

const ListUsersTable: React.FC<Props> = ({ users, onReadUser }) => (
  <Container>
    <thead>
      <tr>
        <th>ID</th>
        <th>성명</th>
        <th>가입일</th>
        <th>관리자</th>
      </tr>
    </thead>

    <tbody>
      {users === null || users.length === 0 ? (
        <tr>
          <td colSpan={4}>사용자가 없습니다.</td>
        </tr>
      ) : (
        users.map((user) => (
          <tr
            key={user.id}
            style={{ cursor: 'pointer' }}
            onClick={() => onReadUser(user.id)}
          >
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{new Date(user.created_at).toLocaleDateString()}</td>
            <td>{user.admin ? '관리자' : '일반'}</td>
          </tr>
        ))
      )}
    </tbody>
  </Container>
);

export default ListUsersTable;
