import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import AddExpense from '../../components/expense/AddExpense';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useExpense from '../../libs/hooks/expense/useExpense';

const ExpensePage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const expense = useExpense();

  return (
    <PageTemlate user={user}>
      <AddExpense expense={expense} />
    </PageTemlate>
  );
};

export default ExpensePage;
