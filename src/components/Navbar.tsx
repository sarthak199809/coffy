import React from 'react';
import NeoButton from './NeoButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg border-b-4 border-ink px-6 py-4 flex items-center justify-between">
      <div className="font-display text-3xl tracking-tighter">
        COFFY<span className="text-orange">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-sm">
        <a href="#friction" className="hover:text-orange transition-colors">The Problem</a>
        <a href="#math" className="hover:text-orange transition-colors">The Math</a>
        <a href="#product" className="hover:text-orange transition-colors">The Tube</a>
      </div>
      <NeoButton size="sm" variant="primary" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
        Buy Now
      </NeoButton>
    </nav>
  );
}
