import type { ChangeEvent, MouseEvent } from 'react';
import React from 'react';
import AuthForm from './common/AuthForm';
import AuthTemplate from './common/AuthTemplate';

interface Props {
  username: string;
  password: string;
  passwordConfirm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRegister: (e: MouseEvent) => void;
}

const Register: React.FC<Props> = ({
  username,
  password,
  passwordConfirm,
  onChange,
  onRegister,
}) => {
  return (
    <AuthTemplate mode="register">
      <AuthForm
        mode="register"
        username={username}
        password={password}
        passwordConfirm={passwordConfirm}
        onChange={onChange}
        onSubmit={onRegister}
      />
    </AuthTemplate>
  );
};

export default Register;
