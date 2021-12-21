import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAPI, loginAPI } from '../../api/auth';

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogin = useCallback(() => {
    if ([username, password].includes('')) {
      alert('빈 칸 없이 입력하세요.');
      return;
    }

    dispatch(loginAPI({ username, password }));
  }, [username, password]);

  useEffect(() => {
    dispatch(checkAPI());
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/soldier');
    }
  }, [user]);

  return {
    username,
    password,
    onChange,
    onLogin,
  };
}
