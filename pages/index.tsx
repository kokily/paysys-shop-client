import type { NextPage } from 'next';
import useLogin from '../libs/hooks/auth/useLogin';

const Home: NextPage = () => {
  const { username, password, onChange, onLogin } = useLogin();

  return (
    <div>
      <h3>Login</h3>

      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="아이디"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
        />
      </div>

      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default Home;
