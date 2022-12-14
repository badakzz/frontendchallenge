import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}