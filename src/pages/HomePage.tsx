import { Link } from "react-router-dom";
import logo from "@/imports/LOGO.png";
import { useEffect } from "react";

export default function HomePage() {
  // Track PageView when HomePage loads
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Home Page',
        content_category: 'Page View',
        page_url: '/',
      });
    }
  }, []);
  return (
    <div className="min-h-full w-full bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1a2e] via-[#0a0a0a] to-[#0a0a0a] animate-pulse-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#dceb3a]/30 animate-float-1" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#dceb3a]/20 animate-float-2" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#dceb3a]/25 animate-float-3" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-[#dceb3a]/15 animate-float-4" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-[#dceb3a]/20 animate-float-1" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-16">
        {/* Logo with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl bg-[#dceb3a]/20 rounded-full scale-150" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-[#1b220b] to-[#0a0a0a] ring-1 ring-[#dceb3a]/30 shadow-[0_0_60px_rgba(220,235,58,0.2)] sm:h-40 sm:w-40">
            <img src={logo} alt="Kara Bottles" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center mb-12">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-[#dceb3a]/70 mb-3">
            Coming Soon
          </p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-[#dceb3a] bg-clip-text text-transparent">
              Kara Bottles
            </span>
          </h1>
          <p className="mt-3 text-lg text-white/50 font-medium">
            by <span className="text-[#dceb3a]">Carramica</span>
          </p>
        </div>

        {/* Development status card */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#dceb3a] opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#dceb3a]" />
            </div>
            <span className="text-sm font-semibold text-[#dceb3a] uppercase tracking-wider">
              Under Development
            </span>
          </div>

          {/* Progress bar */}
          <div className="relative mb-6 h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-[#dceb3a] to-[#b9c526] rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shimmer" />
          </div>

          {/* Features list */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#dceb3a]/20 text-[#dceb3a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Product Showcase</p>
                <p className="text-xs text-white/40">Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#dceb3a]/20 text-[#dceb3a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">E-Commerce Integration</p>
                <p className="text-xs text-white/40">Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-white/40">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white/60">Full Website Experience</p>
                <p className="text-xs text-white/30">In Progress</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/links"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#dceb3a] to-[#b9c526] px-6 py-4 font-display text-sm font-bold text-[#1b220b] transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,235,58,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Our Links</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-xs text-white/30">
            © 2026 PT Carramica Kreasi Indonesia
          </p>
        </footer>
      </main>

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 20px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -40px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 5s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
}
