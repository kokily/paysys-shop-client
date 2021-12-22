import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePasswordAPI } from '../../api/password';

export default function usePassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePassword = async (e: MouseEvent) => {
    e.preventDefault();

    if (password === '') {
      toast.error('비밀번호를 입력 한 후 수정하세요');
      return;
    }

    await dispatch(changePasswordAPI({ password }));
    toast.success('비밀번호 변경');
    router.push('/soldier');
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onChangePassword(e);
    }
  };

  return {
    password,
    onChange,
    onChangePassword,
    onKeyPress,
  };
}
