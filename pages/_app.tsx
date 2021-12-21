import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import rootReducer from '../libs/modules';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({ reducer: rootReducer });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer draggable={false} position="top-center" />
    </>
  );
}

export default App;
