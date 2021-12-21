import type { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { checkAPI, registerAPI } from '../../api/auth';

export default function useRegister() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const { username, password, passwordConfirm } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onRegister = useCallback(() => {
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다!');
      return;
    }

    dispatch(registerAPI({ username, password }));
    router.push('/');
  }, [username, password, passwordConfirm]);

  useEffect(() => {
    dispatch(checkAPI());
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/solider');
    }
  }, [user]);

  return {
    username,
    password,
    passwordConfirm,
    onChange,
    onRegister,
  };
}
