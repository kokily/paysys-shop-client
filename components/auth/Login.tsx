import type { ChangeEvent, MouseEvent } from 'react';
import React from 'react';
import AuthForm from './common/AuthForm';
import AuthTemplate from './common/AuthTemplate';

interface Props {
  username: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: MouseEvent) => void;
}

const Login: React.FC<Props> = ({ username, password, onChange, onLogin }) => {
  return (
    <AuthTemplate mode="login">
      <AuthForm
        mode="login"
        username={username}
        password={password}
        onChange={onChange}
        onSubmit={onLogin}
      />
    </AuthTemplate>
  );
};

export default Login;
