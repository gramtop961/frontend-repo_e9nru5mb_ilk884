import React from 'react';
import { Gamepad2, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Gamepad2,
    title: 'Live match insights',
    desc: 'Surface only what matters: timing, rotations, utilities. Precision without noise.'
  },
  {
    icon: Zap,
    title: 'Latency-light models',
    desc: 'Optimized inference keeps your FPS smooth and your focus uninterrupted.'
  },
  {
    icon: Shield,
    title: 'Private by default',
    desc: 'On-device processing and encrypted sync. Your plays stay yours.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0b0b0d]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight">A minimal stack for maximal focus</h2>
          <p className="mt-4 text-white/60 leading-relaxed">Designed with muted tones and generous spacing so you can think clearly and play better.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                {React.createElement(f.icon, { className: 'h-5 w-5 text-white/80' })}
              </div>
              <h3 className="mt-4 text-white/90 font-medium">{f.title}</h3>
              <p className="mt-2 text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
