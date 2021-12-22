import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ReadFront from '../../components/fronts/ReadFront';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadbill from '../../libs/hooks/bills/useReadBill';

const ReadFrontPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    front,
    onList,
    onRestore,
    onReserve,
    onRemoveReserve,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  } = useReadbill();

  return (
    <PageTemlate user={user}>
      <ReadFront
        front={front}
        user={user}
        onList={onList}
        onRestore={onRestore}
        onReserve={onReserve}
        onRemoveReserve={onRemoveReserve}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemlate>
  );
};

export default ReadFrontPage;
