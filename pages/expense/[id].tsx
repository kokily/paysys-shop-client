import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import AddExpense from '../../components/expense/AddExpense';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useExpense from '../../libs/hooks/expense/useExpense';

const UpdateWeddingPage: NextPage = () => {
  const { user } = useLoggedIn();
  const expense = useExpense();

  return (
    <PageTemlate user={user}>
      <AddExpense edit={true} expense={expense} />
    </PageTemlate>
  );
};

export default UpdateWeddingPage;
