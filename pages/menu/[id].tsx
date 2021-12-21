import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadMenu from '../../libs/hooks/menu/useReadMenu';

const ReadMenuPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, count, price, onChange, onBack, onAddCart, onKeyPress, loading } =
    useReadMenu();

  return <PageTemlate user={user}>ReadMenuPage</PageTemlate>;
};

export default ReadMenuPage;
