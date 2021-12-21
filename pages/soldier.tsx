import type { NextPage } from 'next';
import PageTemlate from '../components/common/PageTemplate';
import Native from '../components/home/Native';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import useNative from '../libs/hooks/home/useNative';

const SoldierPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, native, onMenu } = useNative();

  return (
    <PageTemlate user={user}>
      <Native menu={menu} native={native} onMenu={onMenu} />
    </PageTemlate>
  );
};

export default SoldierPage;
