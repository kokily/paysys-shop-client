import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemAPI, updateItemAPI } from '../../api/items';
import { clearItem, clearItems } from '../../modules/items';

export default function useAddItem(edit: boolean) {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.items);
  const [inputs, setInputs] = useState({
    name: '',
    divide: '식사(뷔페)',
    native: '현역',
    unit: '',
    price: '',
  });
  const { name, divide, native, unit, price } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddItem = async (e: MouseEvent) => {
    e.preventDefault();

    if ([name, divide, native, unit, price].includes('')) {
      toast.error('빈 칸 없이 입력해 주세요!');
      return;
    }

    if (edit) {
      if (id) {
        await dispatch(
          updateItemAPI({
            id,
            name,
            divide,
            native,
            unit,
            price: parseInt(price),
          })
        );
        await dispatch(clearItems());
        await dispatch(clearItem());
        toast.success('수정 완료');
        router.back();
      }
    } else {
      await dispatch(addItemAPI({ name, divide, native, unit, price: parseInt(price) }));
      await dispatch(clearItems());
      await dispatch(clearItem());
      toast.success('품목 추가');
      router.push('/items');
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddItem(e);
    }
  };

  const onList = () => {
    router.push('/items');
  };

  useEffect(() => {
    if (id && item) {
      setInputs({
        name: item.name,
        divide: item.divide,
        native: item.native,
        unit: item.unit,
        price: item.price.toString(),
      });
    }
  }, [item, setInputs]);

  return {
    name,
    divide,
    native,
    unit,
    price,
    onChange,
    onAddItem,
    onKeyPress,
    onList,
  };
}
