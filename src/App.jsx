import Header from './components/Header';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import Transactions from './components/Transactions';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative">
      {/* Soft aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <StatsGrid />
      <Transactions />

      <footer className="w-[min(1200px,94%)] mx-auto mt-16 mb-10 text-center text-white/50">
        Dibuat dengan gaya glassmorphism • © {new Date().getFullYear()} GlassPay
      </footer>
    </div>
  );
}
