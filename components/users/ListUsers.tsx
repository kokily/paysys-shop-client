import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Search from '../common/Search';
import ListUsersTable from './common/ListUsersTable';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6rem;
  h1 {
    text-align: center;
  }
`;

interface Props {
  users: UserType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onReadUser: (id: string) => void;
}

const ListUsers: React.FC<Props> = ({
  users,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onReadUser,
}) => (
  <Container>
    <h1>사용자 목록</h1>

    <Search
      mode="이름 "
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />

    <ListUsersTable users={users} onReadUser={onReadUser} />
  </Container>
);

export default ListUsers;
