import 'styles/globals.css'
import type { AppProps } from 'next/app'
import axios from "axios";
import Layout from "../Layout";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
