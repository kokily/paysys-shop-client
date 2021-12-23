import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ReadItem from '../../components/items/ReadItem';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadItem from '../../libs/hooks/items/useReadItem';

const ReadItemPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const { item, onList, onEdit, modal, onRemoveClick, onCancel, onConfirm } =
    useReadItem();

  return (
    <PageTemlate user={user}>
      <ReadItem
        item={item}
        onList={onList}
        onEdit={onEdit}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemlate>
  );
};

export default ReadItemPage;
