import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { readUserAPI, removeUserAPI, setAdminAPI, setEmployeeAPI } from '../../api/users';
import { clearUser, clearUsers } from '../../modules/users';

export default function useReadUser() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [modal, setModal] = useState(false);

  const onList = () => {
    router.push('/users');
  };

  const onSetAdmin = async () => {
    if (id) {
      await dispatch(setAdminAPI({ id }));
      await dispatch(clearUser());
      await dispatch(readUserAPI(id));
    } else {
      return;
    }
  };

  const onSetEmployee = async () => {
    if (id) {
      await dispatch(setEmployeeAPI({ id }));
      await dispatch(clearUser());
      await dispatch(readUserAPI(id));
    } else {
      return;
    }
  };

  const onRemoveUser = async () => {
    try {
      if (id) {
        await dispatch(removeUserAPI(id));
        await dispatch(clearUsers());
        toast.success('사용자 삭제 완료');
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
    onRemoveUser();
  };

  useEffect(() => {
    if (id) {
      dispatch(clearUser());
      dispatch(readUserAPI(id));
    }
  }, [router.query]);

  return {
    user,
    onList,
    onSetAdmin,
    onSetEmployee,
    modal,
    onRemoveClick,
    onCancel,
    onConfirm,
  };
}
