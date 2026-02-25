import React from 'react';
import NeoButton from './NeoButton';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex-1 flex flex-col items-start gap-8 z-10">
        <div className="inline-block bg-orange text-ink font-bold px-4 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_var(--color-ink)] uppercase tracking-widest text-sm">
          The Anti-Instant Revolution
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter uppercase">
          Pack Light.<br />
          <span className="text-lime" style={{ textShadow: '4px 4px 0px var(--color-ink)' }}>Drink Heavy.</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
          100% Arabica Espresso Paste. No machines, no mess, no compromises. High-grade caffeine for the restless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NeoButton size="lg" variant="primary" className="flex items-center justify-center gap-2" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
            Get The Tube <ArrowRight size={24} strokeWidth={3} />
          </NeoButton>
          <NeoButton size="lg" variant="white" onClick={() => document.getElementById('friction')?.scrollIntoView({ behavior: 'smooth' })}>
            Why A Tube?
          </NeoButton>
        </div>
      </div>

      <div className="flex-1 w-full relative flex justify-center items-center mt-12 md:mt-0">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-purple/20 blur-3xl rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-lime/20 blur-3xl rounded-full transform translate-x-1/4 translate-y-1/4"></div>

        <div className="relative w-full max-w-md aspect-[3/4] border-8 border-ink bg-white shadow-[16px_16px_0px_0px_var(--color-ink)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
          {/* TODO: Replace src with the uploaded tube image */}
          <img
            src={`${import.meta.env.BASE_URL}assets/Gemini_Generated_Image_2sn2yr2sn2yr2sn2.png`}
            alt="Coffy Tube"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-ink text-white p-4 font-display text-2xl uppercase text-center border-t-4 border-ink">
            Squeeze. Stir. Wander.
          </div>
        </div>
      </div>
    </section>
  );
}
