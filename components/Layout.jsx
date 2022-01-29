import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({title, children}) {
  return <div>
    <Head>
        <title>{title}</title>
    </Head>
    <main>
        <Navbar/>
        {children}
        <p>Footer</p>
    </main>
  </div>;
}


