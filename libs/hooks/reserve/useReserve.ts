import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { readBillAPI } from '../../api/bills';
import { addReserveAPI } from '../../api/reserve';
import { clearBill } from '../../modules/bills';

export default function useReserve() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const [reserve, setReserve] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReserve(parseInt(e.target.value));
  };

  const onAddReserve = async (e: MouseEvent) => {
    e.preventDefault();

    if (id) {
      try {
        await dispatch(addReserveAPI({ bill_id: id, reserve }));
        await dispatch(clearBill());
        await dispatch(readBillAPI(id));
        router.back();
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddReserve(e);
    }
  };

  return {
    reserve,
    onChange,
    onAddReserve,
    onKeyPress,
  };
}
