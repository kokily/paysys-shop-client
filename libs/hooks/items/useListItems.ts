import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { listItemsAPI, ListItemsQuery } from '../../api/items';
import { clearItems } from '../../modules/items';

export default function useListItems() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, divide, native, cursor }: ListItemsQuery = router.query;
  const { items, hasMoreItems, listItemsLoading } = useSelector((state) => state.items);
  const [search, setSearch] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await setSearch('');
      await dispatch(clearItems());
      await dispatch(listItemsAPI({ name, divide, native, cursor }));
    } else {
      await setSearch(search);
      await dispatch(clearItems());
      await dispatch(listItemsAPI({ name: search, divide, native, cursor }));
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadItem = (id: string) => {
    router.push(`/items/${id}`);
  };

  useEffect(() => {
    dispatch(listItemsAPI({ name: search, cursor }));
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!listItemsLoading && hasMoreItems) {
        if (
          window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
        ) {
          const lastId = items[items.length - 1]?.id;

          dispatch(listItemsAPI({ name: search, cursor: lastId }));
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [listItemsLoading, hasMoreItems, items]);

  return {
    items,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadItem,
  };
}
