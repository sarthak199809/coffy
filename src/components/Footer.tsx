import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 px-6 border-t-8 border-lime">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        <h2 className="text-[12vw] font-display uppercase leading-[0.75] tracking-tighter text-center text-white/10 hover:text-lime transition-colors duration-500 cursor-default">
          COFFY
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl uppercase text-lime mb-2">Shop</h4>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">The Tube</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Bundles</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Gift Cards</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl uppercase text-lime mb-2">About</h4>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Our Story</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Chikmagalur</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Sustainability</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl uppercase text-lime mb-2">Support</h4>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">FAQ</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Shipping</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xl uppercase text-lime mb-2">Social</h4>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Instagram</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">Twitter</a>
            <a href="#" className="font-medium opacity-80 hover:opacity-100 hover:text-orange transition-colors">TikTok</a>
          </div>
        </div>
        
        <div className="w-full border-t-2 border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium opacity-60">
          <p>&copy; {new Date().getFullYear()} Coffy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
