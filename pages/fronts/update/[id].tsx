import type { NextPage } from 'next';
import PageTemlate from '../../../components/common/PageTemplate';
import AddReserve from '../../../components/fronts/AddReserve';
import useLoggedIn from '../../../libs/hooks/auth/useLoggedIn';
import useReserve from '../../../libs/hooks/reserve/useReserve';

const AddReservePage: NextPage = () => {
  const { user } = useLoggedIn();
  const { reserve, onChange, onAddReserve, onKeyPress } = useReserve();

  return (
    <PageTemlate user={user}>
      <AddReserve
        reserve={reserve}
        onChange={onChange}
        onAddReserve={onAddReserve}
        onKeyPress={onKeyPress}
      />
    </PageTemlate>
  );
};

export default AddReservePage;
