import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ListFronts from '../../components/fronts/ListFronts';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListBills from '../../libs/hooks/bills/useListBills';

const ListFrontsPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    fronts,
    title,
    onChange,
    onSearch,
    onKeyPress,
    onUserList,
    onHallList,
    onDetail,
  } = useListBills();

  return (
    <PageTemlate user={user}>
      <ListFronts
        fronts={fronts}
        title={title}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onUserList={onUserList}
        onHallList={onHallList}
        onDetail={onDetail}
      />
    </PageTemlate>
  );
};

export default ListFrontsPage;
