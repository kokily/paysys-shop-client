import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import rootReducer from '../libs/modules';
import GlobalStyle from '../styles';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({ reducer: rootReducer });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer draggable={false} position="top-center" />
    </>
  );
}

export default App;
