import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { readBillAPI, removeBillAPI, restoreBillAPI } from '../../api/bills';
import { removeReserveAPI } from '../../api/reserve';
import { clearBill, clearBills } from '../../modules/bills';

export default function useReadbill() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { bill } = useSelector((state) => state.bills);
  const [modal, setModal] = useState(false);

  const onList = () => {
    router.back();
  };

  const onRestore = useCallback(() => {
    if (window.confirm('※ 주의!! 빌지는 삭제되고 카트로 다시 돌아갑니다!')) {
      if (id) {
        dispatch(restoreBillAPI(id));
        dispatch(clearBill());
        router.push('/cart');
      }
    } else {
      return;
    }
  }, [dispatch, id]);

  const onReserve = () => {
    router.push(`/fronts/update/${id}`);
  };

  const onRemoveReserve = async () => {
    if (id) {
      try {
        await dispatch(removeReserveAPI(id));
        await dispatch(clearBill());

        setTimeout(() => {
          dispatch(readBillAPI(id));
          router.push(`/fronts/${id}`);
        }, 100);
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onRemoveBill = async () => {
    if (id) {
      try {
        await dispatch(removeBillAPI(id));
        await dispatch(clearBill());
        await dispatch(clearBills());
        router.push('/fronts');
      } catch (err: any) {
        toast.error(err);
      }
    } else {
      return;
    }
  };

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveBill();
  };

  useEffect(() => {
    if (id) {
      dispatch(clearBill());
      dispatch(readBillAPI(id));
    } else {
      return;
    }
  }, [dispatch, router.query]);

  return {
    front: bill,
    onList,
    onRestore,
    onReserve,
    onRemoveReserve,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}
