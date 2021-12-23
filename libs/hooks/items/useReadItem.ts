import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { readItemAPI, removeItemAPI } from '../../api/items';
import { clearItem, clearItems } from '../../modules/items';

export default function useReadItem() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.items);
  const [modal, setModal] = useState(false);

  const onList = () => {
    router.push('/items');
  };

  const onEdit = () => {
    router.push(`/items/update/${id}`);
  };

  const onRemoveItem = async () => {
    try {
      if (id) {
        await dispatch(removeItemAPI(id));
        await dispatch(clearItems());
        router.back();
      }
    } catch (err: any) {
      toast.error(err);
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
    onRemoveItem();
  };

  useEffect(() => {
    if (id) {
      dispatch(clearItem());
      dispatch(readItemAPI(id));
    }
  }, [router.query]);

  return {
    item,
    onList,
    onEdit,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}
