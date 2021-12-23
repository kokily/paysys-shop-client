import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ListWeddings from '../../components/weddings/ListWeddings';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListWeddings from '../../libs/hooks/weddings/useListWeddings';

const ListWeddingsPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const { weddings, search, onChange, onSearch, onKeyPress, onReadWedding } =
    useListWeddings();

  return (
    <PageTemlate user={user}>
      <ListWeddings
        weddings={weddings}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onReadWedding={onReadWedding}
      />
    </PageTemlate>
  );
};

export default ListWeddingsPage;
