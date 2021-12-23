import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ReadUser from '../../components/users/ReadUser';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadUser from '../../libs/hooks/users/useReadUser';

const ReadUserPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    user: data,
    onList,
    onSetAdmin,
    onSetEmployee,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  } = useReadUser();

  return (
    <PageTemlate user={user}>
      <ReadUser
        user={data}
        onList={onList}
        onSetAdmin={onSetAdmin}
        onSetEmployee={onSetEmployee}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemlate>
  );
};

export default ReadUserPage;
