import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#0b0b0d]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 lg:col-span-5">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white/95"
          >
            AI copilots for gamers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-prose"
          >
            Minimal, fast, and focused. NeonArc helps you analyze matches, optimize setups, and sharpen strategy with zero clutter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#get-started" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 transition-colors text-sm">
              Try it free
            </a>
            <a href="#features" className="px-5 py-3 rounded-full bg-white/0 hover:bg-white/10 text-white/70 border border-white/10 transition-colors text-sm">
              Learn more
            </a>
          </motion.div>
        </div>
        <div className="md:col-span-7 lg:col-span-7">
          <div className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <Spline
              scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),rgba(0,0,0,0))]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
