import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './../styles/App.css';
import Head from 'next/head';
import { AdminLayout } from '../components';

export default function MyApp({ Component, pageProps }) {
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
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    </>
  );
}
