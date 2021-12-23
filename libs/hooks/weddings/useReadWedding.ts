import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { removeSignAPI } from '../../api/sign';
import { readWeddingAPI } from '../../api/weddings';
import { clearWedding, clearWeddings } from '../../modules/weddings';
import { removeExpenseAPI } from '../../api/expense';

export default function useReadWedding() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const {
    wedding,
    convention,
    company,
    event,
    hanbok,
    meal,
    present,
    reserve,
    prepayment,
  } = useSelector((state) => state.weddings);
  const { husband, bride, husbandImage, brideImage } = useSelector((state) => state.sign);
  const [modal, setModal] = useState(false);

  const onList = () => {
    router.push('/weddings');
  };

  const onEdit = () => {
    router.push(`/expense/${id}`);
  };

  const onRemoveSign = async () => {
    if (id) {
      await dispatch(removeSignAPI({ id }));
      await dispatch(clearWedding());
      await dispatch(readWeddingAPI(id));
    } else {
      return;
    }
  };

  const onRemoveWedding = async () => {
    if (id) {
      await dispatch(removeExpenseAPI(id));
      await dispatch(clearWeddings());
      router.push('/weddings');
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
    onRemoveWedding();
  };

  useEffect(() => {
    if (id) {
      dispatch(readWeddingAPI(id));
    } else {
      return;
    }
  }, [husband, bride, husbandImage, brideImage, router.query]);

  return {
    wedding,
    convention,
    company,
    event,
    hanbok,
    meal,
    present,
    reserve,
    prepayment,
    onRemoveSign,
    onList,
    onEdit,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}
