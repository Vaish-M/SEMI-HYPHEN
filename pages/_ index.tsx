import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Semi Hyphen Clone</title>
        <meta name="description" content="Frontend Clone of Semi Hyphen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* Add more sections as per the design */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
