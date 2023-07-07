import Head from "next/head";
import Layout from "../components/Layout";
import MainHome from "../components/MainHome";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>NextJS PWA App</title>
        <meta name="description" content="Weatherwise is a comprehensive smart home climate monitoring app that provides real-time data for temperature, humidity, and light level" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Layout>
        <main className='relative h-[calc(100vh-142px)]  bg-bgBlack -mt-[1px]'>
          <MainHome />
        </main>
      </Layout>
    </div>
  );
}
