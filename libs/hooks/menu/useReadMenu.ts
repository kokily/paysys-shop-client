import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { readMenuAPI } from '../../api/items';
import { addCartAPI } from '../../api/cart';

export default function useReadMenu() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { menu, readMenuLoading } = useSelector((state) => state.menu);
  const [inputs, setInputs] = useState({
    count: 0,
    price: 0,
  });
  const { count, price } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onBack = () => {
    router.back();
  };

  const onAddCart = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      if (count < 1 || price < 1) {
        toast.warning('단가 또는 수량을 입력하세요');
        return;
      }

      if (id) {
        dispatch(addCartAPI({ item_id: id, count, price }));
        toast.success('메뉴 추가!');
        router.back();
      } else {
        return;
      }
    },
    [count, price]
  );

  const onKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddCart(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(readMenuAPI(id));
    } else {
      return;
    }
  }, [dispatch, router.query]);

  useEffect(() => {
    if (menu) {
      if (menu?.price !== 0) {
        setInputs({
          ...inputs,
          price: menu.price,
        });
      }
    }
  }, [menu]);

  return {
    menu,
    count,
    price,
    onChange,
    onBack,
    onAddCart,
    onKeyPress,
    loading: readMenuLoading,
  };
}
