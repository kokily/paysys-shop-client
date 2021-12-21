import type { NextPage } from 'next';
import Cart from '../components/cart/Cart';
import PageTemlate from '../components/common/PageTemplate';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import useViewCart from '../libs/hooks/cart/useViewCart';

const CartPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
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
  } = useViewCart();

  return (
    <PageTemlate user={user}>
      <Cart
        title={title}
        hall={hall}
        etc={etc}
        cart={cart}
        totalAmount={totalAmount}
        onChange={onChange}
        onAddBill={onAddBill}
        onRemoveOne={onRemoveOne}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemlate>
  );
};

export default CartPage;
