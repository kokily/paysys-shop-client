import type { NextPage } from 'next';
import useRegister from '../libs/hooks/auth/useRegister';

const RegisterPage: NextPage = () => {
  const { username, password, passwordConfirm, onChange, onRegister } = useRegister();

  return (
    <div>
      <h3>사원 등록</h3>

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

      <div>
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          placeholder="비밀번호 확인"
        />
      </div>

      <button onClick={onRegister}>등록하기</button>
    </div>
  );
};

export default RegisterPage;
