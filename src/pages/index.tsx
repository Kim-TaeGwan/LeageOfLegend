import type { NextPage } from 'next'
import Head from 'next/head'
import MainPage from "./MainPage";

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>OP.GG</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainPage />
      </div>
  )
}

export default Home