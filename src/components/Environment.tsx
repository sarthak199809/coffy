import React from 'react';
import NeoCard from './NeoCard';
import { Leaf, Trash2 } from 'lucide-react';

export default function Environment() {
  return (
    <section id="environment" className="py-24 px-6 bg-ink text-white border-y-4 border-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 text-lime" style={{ textShadow: '4px 4px 0px #000' }}>
            Leave No Trace.<br />Just Taste.
          </h2>
          <p className="text-2xl font-medium mb-12 max-w-xl text-bg/80">
            Travelers want to keep the environment clean. Stop littering the mountains with plastic sachets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <NeoCard variant="black" elevation="sm" className="border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <Trash2 size={32} className="text-orange" />
                <h3 className="text-2xl font-display uppercase">The Old Way</h3>
              </div>
              <p className="text-lg opacity-80">20 cups = 20 plastic wrappers. Tearing, spilling, and littering.</p>
            </NeoCard>

            <NeoCard variant="lime" elevation="sm" className="border-ink">
              <div className="flex items-center gap-4 mb-4">
                <Leaf size={32} className="text-ink" />
                <h3 className="text-2xl font-display uppercase">The Coffy Way</h3>
              </div>
              <p className="text-lg font-bold text-ink">1 Tube = 20 cups. Zero wrappers. Clean trails, perfect coffee.</p>
            </NeoCard>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-square border-8 border-white bg-bg shadow-[16px_16px_0px_0px_var(--color-lime)] transform -rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
            {/* TODO: Replace with an image of nature/travel */}
            <img
              src="assets/Gemini_Generated_Image_olnqtxolnqtxolnq.png"
              alt="Clean Mountains"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-ink/20 flex items-center justify-center">
              <span className="bg-lime text-ink font-display text-4xl uppercase px-6 py-2 border-4 border-ink transform rotate-12 shadow-[8px_8px_0px_0px_var(--color-ink)]">
                Zero Baggage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
