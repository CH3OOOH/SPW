'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Timeline from '../components/Timeline';
import Shops from '../components/Shops';
import Culture from '../components/Culture';
import Mascot from '../components/Mascot';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Header />
      <Overview />
      <Timeline />
      <Shops />
      <Culture />
      <Mascot />
      <Footer />
    </main>
  );
}
