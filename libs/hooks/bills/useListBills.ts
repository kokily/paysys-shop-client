import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { listBillsAPI } from '../../api/bills';
import { clearBills } from '../../modules/bills';

export default function useListBills() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { bills, hasMoreBills, listBillsLoading } = useSelector((state) => state.bills);
  const [inputs, setInputs] = useState({
    title: '',
    hall: '',
    user_id: '',
  });
  const { title, hall, user_id } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    if (title === '') {
      await setInputs({ ...inputs, title: '' });
      await dispatch(clearBills());
      await dispatch(listBillsAPI({ title, hall, user_id }));
    } else {
      await setInputs({ ...inputs, title });
      await dispatch(clearBills());
      await dispatch(listBillsAPI({ title, hall, user_id }));
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onUserList = async (user_id: string) => {
    await setInputs({ ...inputs, user_id });
    await dispatch(clearBills());
    await dispatch(listBillsAPI({ title, hall, user_id }));
  };

  const onHallList = async (hall: string) => {
    await setInputs({ ...inputs, hall });
    await dispatch(clearBills());
    await dispatch(listBillsAPI({ title, hall, user_id }));
  };

  const onDetail = (id: string) => {
    router.push(`/fronts/${id}`);
  };

  useEffect(() => {
    dispatch(clearBills());
    dispatch(listBillsAPI({ title, user_id, hall }));
  }, []);

  useEffect(() => {
    function onScroll() {
      if (hasMoreBills && !listBillsLoading) {
        if (
          window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
        ) {
          const lastId = bills[bills.length - 1]?.id;

          dispatch(listBillsAPI({ cursor: lastId, title, user_id, hall }));
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreBills, listBillsLoading, bills]);

  return {
    fronts: bills,
    title,
    onChange,
    onSearch,
    onKeyPress,
    onUserList,
    onHallList,
    onDetail,
  };
}
