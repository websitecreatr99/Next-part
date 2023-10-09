import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux/es'
import { store } from '../app/store'


export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    <Footer />
  </>}


