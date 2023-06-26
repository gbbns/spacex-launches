import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useSWRFetch from './api/launches';
import Launches from '../components/Launches';

export default function Home() {
  const { data, error, isLoading } = useSWRFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Space-X launches</h1>

        <p className={styles.description}>
          The 10 most recent Space-X launches,{' '}
          <a href="https://api.spacexdata.com/v5/launches/" target="_blank">
            powered by their API
          </a>{' '}
          - {process.env.API_ENDPOINT}
        </p>

        <Launches data={data} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
