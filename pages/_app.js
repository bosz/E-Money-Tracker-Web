import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './../styles/App.css';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AdminLayout } from '../components';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"
          integrity="undefined"
          crossorigin="anonymous"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Head>
      <AdminLayout pageTitle={titleText}>
        <Component {...pageProps} />
      </AdminLayout>
    </>
  );
}
