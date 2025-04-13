import Head from 'next/head';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Remodix | Home Remodeling Services</title>
        <meta
          name="description"
          content="Remodix provides expert remodeling services with a portfolio of stunning transformations. Get your free estimate today!"
        />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <HomePage />
      </main>
    </>
  );
}
