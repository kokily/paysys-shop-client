import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ListMenu from '../../components/menu/ListMenu';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListMenu from '../../libs/hooks/menu/useListMenu';

const ListMenuPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, onList, onMenu } = useListMenu();

  return (
    <PageTemlate user={user}>
      <ListMenu menu={menu} onList={onList} onMenu={onMenu} />
    </PageTemlate>
  );
};

export default ListMenuPage;
