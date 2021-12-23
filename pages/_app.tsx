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
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="행사전표시스템 - v5.0" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>행사전표시스템 - v5.0</title>
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
