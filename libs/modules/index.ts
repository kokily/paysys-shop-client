import { combineReducers } from 'redux';
import auth from './auth';
import bills from './bills';
import cart from './cart';
import menu from './menu';
import password from './password';
import reserve from './reserve';

const rootReducer = combineReducers({
  auth,
  bills,
  cart,
  menu,
  reserve,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
