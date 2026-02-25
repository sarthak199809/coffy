import React from 'react';
import NeoCard from './NeoCard';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="friction" className="py-24 px-6 bg-bg border-b-4 border-ink">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-6">
            The Friction Audit
          </h2>
          <p className="text-2xl font-medium max-w-2xl mx-auto">
            Instant coffee is flavored dust. Professional setups are a workout. Coffy is the Goldilocks solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sachet Column */}
          <NeoCard variant="white" elevation="md" className="flex flex-col gap-6">
            <div className="bg-ink text-white font-display text-2xl uppercase p-4 text-center border-b-4 border-ink -mx-6 -mt-6 mb-2">
              Instant Pouch
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Quality</span>
                <span className="text-orange font-display">1/10 (Dust)</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Effort</span>
                <span className="text-orange font-display">Messy</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Weight</span>
                <span className="text-ink font-display">2g</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Vibe</span>
                <span className="text-ink font-display">"Desperate"</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex justify-center">
              <X size={48} className="text-orange" />
            </div>
          </NeoCard>

          {/* Full Setup Column */}
          <NeoCard variant="white" elevation="md" className="flex flex-col gap-6">
            <div className="bg-ink text-white font-display text-2xl uppercase p-4 text-center border-b-4 border-ink -mx-6 -mt-6 mb-2">
              Full Setup
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Quality</span>
                <span className="text-lime font-display">9/10 (Fresh)</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Effort</span>
                <span className="text-orange font-display">15 Mins + Clean</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Weight</span>
                <span className="text-orange font-display">2,000g</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Vibe</span>
                <span className="text-ink font-display">"Obsessed"</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex justify-center">
              <X size={48} className="text-orange" />
            </div>
          </NeoCard>

          {/* Coffy Column */}
          <NeoCard variant="lime" elevation="lg" className="flex flex-col gap-6 transform md:-translate-y-4">
            <div className="bg-ink text-lime font-display text-3xl uppercase p-4 text-center border-b-4 border-ink -mx-6 -mt-6 mb-2">
              Coffy Tube
            </div>
            <div className="flex-1 flex flex-col gap-4 text-ink">
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Quality</span>
                <span className="font-display text-xl">9/10 (Espresso)</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Effort</span>
                <span className="font-display text-xl">30 Seconds</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Weight</span>
                <span className="font-display text-xl">50g</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-ink/20 pb-2">
                <span className="font-bold">Vibe</span>
                <span className="font-display text-xl">"Smart"</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex justify-center">
              <Check size={64} className="text-ink" strokeWidth={3} />
            </div>
          </NeoCard>
        </div>

        {/* The Math Section */}
        <div id="math" className="mt-16 bg-ink text-white border-4 border-ink shadow-[12px_12px_0px_0px_var(--color-orange)] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <img
            src="assets/Gemini_Generated_Image_fla7y2fla7y2fla7.png"
            alt="Iced Coffee Pour"
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
          />
          <div className="flex-1 relative z-10">
            <h3 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-4 text-lime">
              ₹20 &gt; ₹350
            </h3>
            <p className="text-2xl font-medium max-w-lg">
              Stop paying the 'Cafe Tax'. Get 20 cafe-quality shots in one tube. That's ₹20 per cup for the same beans used by world-class baristas.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-center bg-orange text-ink border-4 border-ink p-8 shadow-[8px_8px_0px_0px_#fff] transform rotate-3">
              <div className="text-8xl font-display uppercase leading-none">20</div>
              <div className="text-3xl font-bold uppercase tracking-widest mt-2">Shots</div>
              <div className="text-xl font-medium mt-4 border-t-4 border-ink pt-4">1 TUBE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
