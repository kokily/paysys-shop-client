import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ListUsers from '../../components/users/ListUsers';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListUsers from '../../libs/hooks/users/useListUsers';

const ListUsersPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const { users, search, onChange, onSearch, onKeyPress, onReadUser } = useListUsers();

  return (
    <PageTemlate user={user}>
      <ListUsers
        users={users}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onReadUser={onReadUser}
      />
    </PageTemlate>
  );
};

export default ListUsersPage;
