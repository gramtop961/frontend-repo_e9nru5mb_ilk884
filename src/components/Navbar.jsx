import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <Rocket className="h-5 w-5 text-white/70" />
          <span className="font-semibold tracking-tight">NeonArc</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/60 hover:text-white/90 transition-colors">Sign in</button>
          <button className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 transition-colors">Get started</button>
        </div>
      </nav>
    </header>
  );
}
