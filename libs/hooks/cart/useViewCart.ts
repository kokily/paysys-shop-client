import { ChangeEvent, MouseEvent, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addBillAPI } from '../../api/bills';
import { removeCartAPI, removeOneCartAPI, viewCartAPI } from '../../api/cart';
import { clearCart } from '../../modules/cart';

export default function useViewCart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, totalAmount, viewCartLoading } = useSelector((state) => state.cart);
  const [inputs, setInputs] = useState({
    title: '',
    hall: '',
    etc: ' ',
  });
  const { title, hall, etc } = inputs;
  const [modal, setModal] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddBill = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      if ([title, hall, etc].includes('')) {
        toast.error('빈 칸 없이 입력해주세요');
        return;
      }

      dispatch(addBillAPI({ title, hall, etc }));
      dispatch(removeCartAPI());
      router.push('/fronts');
    },
    [title, hall, etc]
  );

  const onRemoveOne = async (id: string, name: string) => {
    if (window.confirm(`${name} 품목을 삭제합니다.`)) {
      await dispatch(removeOneCartAPI(id));
      await dispatch(clearCart());
      await dispatch(viewCartAPI());
      toast.success('품목 삭제!');
    } else {
      return;
    }
  };

  const onRemoveCart = async () => {
    await dispatch(removeCartAPI());
    await dispatch(clearCart());
    await dispatch(viewCartAPI());
    toast.success('카트 전체 삭제!');
  };

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveCart();
  };

  useEffect(() => {
    dispatch(viewCartAPI());
  }, [dispatch]);

  return {
    title,
    hall,
    etc,
    cart,
    totalAmount,
    onChange,
    onAddBill,
    onRemoveOne,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
    loading: viewCartLoading,
  };
}
