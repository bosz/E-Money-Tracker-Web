import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './../styles/App.css';
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import { AdminLayout } from '../components';
import { useRouter } from 'next/router';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const { i18n } = useTranslation();

  const [titleText, setTitleText] = useState('');
  useEffect(() => {
    switch (pathname) {
      case '/':
        setTitleText('Home');
        break;
      case '/transactions':
        setTitleText('Transactions');
        break;
      case '/kiosks':
        setTitleText('Kiosks');
        break;
      case '/commercial-agents':
        setTitleText('Commercial agents');
        break;
      case '/zones':
        setTitleText('Zones');
        break;
      default:
        break;
    }
  }, [pathname]);

  useEffect(() => {
    let defaultLanguage = navigator.language;
    i18n.changeLanguage(defaultLanguage);
    // console.log(defaultLanguage);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"
          integrity="undefined"
          crossorigin="anonymous"
        />
      </Head>
      <AdminLayout pageTitle={titleText}>
        <Component {...pageProps} />
      </AdminLayout>
    </>
  );
}
