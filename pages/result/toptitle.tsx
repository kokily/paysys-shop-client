import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import TopTitle from '../../components/result/TopTitle';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useTopTitle from '../../libs/hooks/result/useTopTitle';

const TopTitlePage: NextPage = () => {
  const { user } = useLoggedIn();
  const { titles, startTime, endTime, setStartTime, setEndTime } = useTopTitle();

  return (
    <PageTemlate user={user}>
      <TopTitle
        titles={titles}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
    </PageTemlate>
  );
};

export default TopTitlePage;
