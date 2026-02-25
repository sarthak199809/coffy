import React from 'react';
import NeoButton from './NeoButton';
import NeoCard from './NeoCard';
import { ShoppingCart, Zap, Droplets, Mountain } from 'lucide-react';

export default function ProductDetail() {
  return (
    <section id="product" className="py-24 px-6 bg-bg border-b-4 border-ink">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left: Product Images */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="w-full aspect-square border-8 border-ink bg-white shadow-[16px_16px_0px_0px_var(--color-ink)] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}assets/Gemini_Generated_Image_78t9k678t9k678t9.png`}
              alt="Coffy Action Shot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="w-full aspect-square border-4 border-ink bg-white shadow-[8px_8px_0px_0px_var(--color-ink)] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}assets/Gemini_Generated_Image_jl1g7ojl1g7ojl1g.png`}
                alt="Coffy Texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square border-4 border-ink bg-white shadow-[8px_8px_0px_0px_var(--color-ink)] overflow-hidden flex items-center justify-center bg-lime">
              <span className="font-display text-4xl uppercase text-ink transform -rotate-12">50g</span>
            </div>
          </div>
        </div>

        {/* Right: Product Info & CTA */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <div className="inline-block bg-orange text-ink font-bold px-4 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_var(--color-ink)] uppercase tracking-widest text-sm mb-6">
              Limited Launch Edition
            </div>
            <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.85] tracking-tighter mb-4">
              Coffy: Travel Espresso Paste
            </h2>
            <p className="text-2xl font-medium text-ink/80 mb-8">
              The anti-instant revolution in a 50g tube. Just squeeze, stir, and wander.
            </p>
          </div>

          <div className="flex items-end gap-6 mb-8">
            <span className="text-6xl font-display text-ink">₹399</span>
            <span className="text-3xl font-display text-ink/40 line-through mb-2">₹699</span>
            <span className="bg-lime text-ink font-bold px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_var(--color-ink)] uppercase text-sm mb-3">
              40% OFF
            </span>
          </div>

          <NeoButton size="lg" variant="primary" className="w-full flex items-center justify-center gap-4 text-2xl py-6">
            <ShoppingCart size={32} strokeWidth={3} />
            Add To Cart
          </NeoButton>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <NeoCard variant="white" elevation="sm" className="flex flex-col gap-4">
              <Zap size={32} className="text-orange" />
              <h4 className="font-display text-xl uppercase">18-Hour Extract</h4>
              <p className="font-medium text-ink/80">Cold-brewed and concentrated for maximum flavor and zero bitterness.</p>
            </NeoCard>
            <NeoCard variant="white" elevation="sm" className="flex flex-col gap-4">
              <Droplets size={32} className="text-lime" />
              <h4 className="font-display text-xl uppercase">Nitrogen Flushed</h4>
              <p className="font-medium text-ink/80">Sealed for freshness. No refrigeration needed. Shelf stable for 9 months.</p>
            </NeoCard>
            <NeoCard variant="white" elevation="sm" className="flex flex-col gap-4 sm:col-span-2 overflow-hidden relative group">
              <img
                src={`${import.meta.env.BASE_URL}assets/Gemini_Generated_Image_s3xsbss3xsbss3xs.png`}
                alt="Chikmagalur Plantation"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
              />
              <div className="relative z-10 flex flex-col gap-4 p-4">
                <Mountain size={32} className="text-purple" />
                <h4 className="font-display text-xl uppercase">Born in Chikmagalur</h4>
                <p className="font-medium text-ink/80">Sourced from the Baba Budan Giri hills. 100% Single-Origin Arabica. We didn't invent coffee; we just compressed the bullshit.</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
