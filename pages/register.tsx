import type { NextPage } from 'next';
import Register from '../components/auth/Register';
import useRegister from '../libs/hooks/auth/useRegister';

const RegisterPage: NextPage = () => {
  const { username, password, passwordConfirm, onChange, onRegister } = useRegister();

  return (
    <Register
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      onChange={onChange}
      onRegister={onRegister}
    />
  );
};

export default RegisterPage;
