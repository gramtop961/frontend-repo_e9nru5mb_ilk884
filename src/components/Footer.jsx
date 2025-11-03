import React from 'react';

export default function Footer() {
  return (
    <footer id="get-started" className="bg-[#0b0b0d] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-10 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white/90">Quiet power, visible results</h3>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto">Start with a minimal toolkit that scales with your skill. No clutter, just clarity.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 transition-colors text-sm">Create account</button>
            <button className="px-5 py-3 rounded-full bg-white/0 hover:bg-white/10 text-white/70 border border-white/10 transition-colors text-sm">Contact sales</button>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
          <p>© {new Date().getFullYear()} NeonArc Labs</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
