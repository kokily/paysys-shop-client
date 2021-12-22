import type { NextPage } from 'next';
import Login from '../components/auth/Login';
import useLogin from '../libs/hooks/auth/useLogin';

const Home: NextPage = () => {
  const { username, password, onChange, onLogin } = useLogin();

  return (
    <Login
      username={username}
      password={password}
      onChange={onChange}
      onLogin={onLogin}
    />
  );
};

export default Home;
