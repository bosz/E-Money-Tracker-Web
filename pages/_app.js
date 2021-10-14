import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './../styles/App.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}