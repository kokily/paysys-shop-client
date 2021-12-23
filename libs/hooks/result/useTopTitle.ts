import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topTitleAPI } from '../../api/result';
import { clearTopTitle } from '../../modules/result';

export default function useTopTitle() {
  const dispatch = useDispatch();
  const { titles } = useSelector((state) => state.result);
  const [startTime, setStartTime] = useState(new Date(2020, 3 - 1, 5));
  const [endTime, setEndTime] = useState(new Date());

  useEffect(() => {
    if (endTime.getTime() - startTime.getTime() < 0) {
      alert('끝 시간이 시작 시간보다 작으면 안됩니다!');
      setStartTime(new Date(2020, 3 - 1, 5));
      setEndTime(new Date());
      return;
    }

    const fetch = async () => {
      await dispatch(clearTopTitle());
      await dispatch(
        topTitleAPI({
          start_date: startTime,
          end_date: endTime,
        })
      );
    };

    fetch();
  }, [dispatch, startTime, endTime, setStartTime, setEndTime]);

  return {
    titles,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
  };
}
