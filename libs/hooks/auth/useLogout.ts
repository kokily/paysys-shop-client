import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../../api/auth';

export default function useLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAPI());
    router.push('/');
  }, []);

  return {
    onLogout,
  };
}
