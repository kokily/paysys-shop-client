import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { listMenuAPI } from '../../api/menu';

type QueryType = {
  divide?: string;
  native?: string;
};

function useListMenu() {
  const router = useRouter();
  const { divide, native }: QueryType = router.query;
  const dispatch = useDispatch();
  const { menus, listMenuLoading } = useSelector((state) => state.menu);

  const onList = useCallback(() => {
    router.back();
  }, [router]);

  const onMenu = useCallback(
    (id: string) => {
      router.push(`/menu/${id}`);
    },
    [router]
  );

  useEffect(() => {
    dispatch(listMenuAPI({ divide, native }));
  }, [dispatch, router.query]);

  return {
    menu: menus,
    onList,
    onMenu,
    loading: listMenuLoading,
  };
}

export default useListMenu;
