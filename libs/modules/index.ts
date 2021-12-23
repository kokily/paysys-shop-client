import { combineReducers } from 'redux';
import auth from './auth';
import bills from './bills';
import cart from './cart';
import expense from './expense';
import items from './items';
import menu from './menu';
import password from './password';
import reserve from './reserve';
import result from './result';
import sign from './sign';
import users from './users';
import weddings from './weddings';

const rootReducer = combineReducers({
  auth,
  bills,
  cart,
  expense,
  items,
  menu,
  password,
  reserve,
  result,
  sign,
  users,
  weddings,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
