import type { NextPage } from 'next';
import PageTemlate from '../components/common/PageTemplate';
import ChangePassword from '../components/password/ChangePassword';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import usePassword from '../libs/hooks/password/usePassword';

const ChangePasswordPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { password, onChange, onChangePassword, onKeyPress } = usePassword();

  return (
    <PageTemlate user={user}>
      <ChangePassword
        password={password}
        onChange={onChange}
        onChangePassword={onChangePassword}
        onKeyPress={onKeyPress}
      />
    </PageTemlate>
  );
};

export default ChangePasswordPage;
