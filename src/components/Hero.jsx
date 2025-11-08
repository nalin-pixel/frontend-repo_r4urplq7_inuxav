import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full mx-auto mt-6" aria-label="Hero">
      <div className="w-[min(1200px,94%)] mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_80px_rgba(0,0,0,0.35)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-blue-500/20" />
        </div>

        <div className="flex flex-col gap-6 py-2">
          <span className="inline-flex items-center gap-2 w-fit rounded-full px-3 py-1 text-xs font-medium border border-white/20 bg-white/10 text-white/80 backdrop-blur-xl">
            <Shield className="h-4 w-4" /> Secure & Modern
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Smart Glassmorphic
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300"> Fintech</span>
            
            Dashboard
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Kelola kartu, transaksi, dan analitik Anda dalam satu tampilan elegan. Desain kaca modern dengan 3D interaktif memberikan pengalaman premium.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/15 border border-white/20 text-white hover:bg-white/25 active:scale-[0.98] transition">
              <Rocket className="h-4 w-4" /> Mulai Sekarang
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 border border-white/30 text-white hover:from-cyan-400/40 hover:to-indigo-400/40 active:scale-[0.98] transition">
              <CreditCard className="h-4 w-4" /> Lihat Kartu
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-2">
            {[
              { label: 'Saldo', value: 'Rp 120jt' },
              { label: 'Transaksi', value: '1.2k+' },
              { label: 'Limit', value: 'Rp 50jt' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-4 bg-white/10 border border-white/20 text-white/90 backdrop-blur-xl">
                <p className="text-xs text-white/60">{s.label}</p>
                <p className="text-lg font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
