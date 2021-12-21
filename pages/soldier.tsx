import type { NextPage } from 'next';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';

const SoldierPage: NextPage = () => {
  useLoggedIn();

  return <div>Soldier Page</div>;
};

export default SoldierPage;
