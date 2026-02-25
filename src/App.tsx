import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Environment from './components/Environment';
import Comparison from './components/Comparison';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-lime selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <Environment />
        <Comparison />
        <ProductDetail />
      </main>
      <Footer />
    </div>
  );
}
