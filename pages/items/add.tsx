import type { NextPage } from 'next';
import PageTemlate from '../../components/common/PageTemplate';
import AddItem from '../../components/items/AddItem';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useAddItem from '../../libs/hooks/items/useAddItem';

const AddItemPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const { name, divide, native, unit, price, onChange, onAddItem, onKeyPress, onList } =
    useAddItem();

  return (
    <PageTemlate user={user}>
      <AddItem
        name={name}
        divide={divide}
        native={native}
        unit={unit}
        price={price}
        onChange={onChange}
        onAddItem={onAddItem}
        onKeyPress={onKeyPress}
        onList={onList}
      />
    </PageTemlate>
  );
};

export default AddItemPage;
