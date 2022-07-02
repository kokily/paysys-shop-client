import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { listWeddingsAPI } from '../../api/weddings';
import { clearWeddings } from '../../modules/weddings';
import useLocalStorage from 'use-local-storage';

export default function useListWeddings() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useLocalStorage('listWeddings', 0);
  const { weddings, hasMoreWeddings, listWeddingsLoading } = useSelector(
    (state) => state.weddings
  );
  const [search, setSearch] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await setSearch('');
      await dispatch(clearWeddings());
      await dispatch(listWeddingsAPI({ date: search }));
    } else {
      await setSearch(search);
      await dispatch(clearWeddings());
      await dispatch(listWeddingsAPI({ date: search }));
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadWedding = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/weddings/${id}`);
  };

  useEffect(() => {
    dispatch(listWeddingsAPI({ date: search }));
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!listWeddingsLoading && hasMoreWeddings) {
        if (
          window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
        ) {
          const lastId = weddings[weddings.length - 1]?.id;

          dispatch(listWeddingsAPI({ date: search, cursor: lastId }));
        }
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [weddings, hasMoreWeddings, listWeddingsLoading]);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    weddings,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onReadWedding,
  };
}
