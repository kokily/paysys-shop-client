import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ReadMenu from '../../components/menu/ReadMenu';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadMenu from '../../libs/hooks/menu/useReadMenu';

const ReadMenuPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, count, price, onChange, onBack, onAddCart, onKeyPress } = useReadMenu();

  return (
    <PageTemlate user={user}>
      <ReadMenu
        menu={menu}
        count={count}
        price={price}
        onChange={onChange}
        onBack={onBack}
        onAddCart={onAddCart}
        onKeyPress={onKeyPress}
      />
    </PageTemlate>
  );
};

export default ReadMenuPage;
