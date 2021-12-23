import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import ListItems from '../../components/items/ListItems';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListItems from '../../libs/hooks/items/useListItems';

const ListItemsPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const { items, search, onChange, onSearch, onKeyPress, onReadItem } = useListItems();

  return (
    <PageTemlate user={user}>
      <ListItems
        items={items}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onReadItem={onReadItem}
      />
    </PageTemlate>
  );
};

export default ListItemsPage;
