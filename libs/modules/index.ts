import { combineReducers } from 'redux';
import auth from './auth';
import bills from './bills';
import cart from './cart';
import items from './items';
import menu from './menu';
import password from './password';
import reserve from './reserve';
import result from './result';
import users from './users';

const rootReducer = combineReducers({
  auth,
  bills,
  cart,
  items,
  menu,
  password,
  reserve,
  result,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
