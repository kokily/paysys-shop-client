import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { listUsersAPI } from '../../api/users';
import { clearUsers } from '../../modules/users';

export default function useListUsers() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, hasMoreUsers, listUsersLoading } = useSelector((state) => state.users);
  const [search, setSearch] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await setSearch('');
      await dispatch(clearUsers());
      await dispatch(listUsersAPI({ username: search }));
    } else {
      await setSearch(search);
      await dispatch(clearUsers());
      await dispatch(listUsersAPI({ username: search }));
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadUser = (id: string) => {
    router.push(`/users/${id}`);
  };

  useEffect(() => {
    dispatch(listUsersAPI({ username: search }));
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!listUsersLoading && hasMoreUsers) {
        if (
          window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
        ) {
          const lastId = users[users.length - 1]?.id;

          dispatch(listUsersAPI({ username: search, cursor: lastId }));
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [users, listUsersLoading, hasMoreUsers]);

  return {
    users,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadUser,
  };
}
