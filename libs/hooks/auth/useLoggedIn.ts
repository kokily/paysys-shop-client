import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { checkAPI } from '../../api/auth';

export default function useLoggedIn(isAdmin?: boolean) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, checkLoading, checkError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAPI());
  }, []);

  useEffect(() => {
    if (checkError) {
      alert(checkError);
    }

    if (isAdmin && user) {
      if (!checkLoading && user.admin === false) {
        alert('관리자 메뉴입니다!');
        router.push('/soldier');
      }
    }
  }, [checkLoading, user]);

  return {
    user,
  };
}
