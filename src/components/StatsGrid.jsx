import { ArrowUpRight, ArrowDownRight, Wallet, Activity } from 'lucide-react';

const StatCard = ({ title, value, change, up, icon: Icon }) => (
  <div className="rounded-2xl p-5 bg-white/10 border border-white/20 text-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-white/60">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-tr from-indigo-400/40 to-cyan-400/40 border border-white/30">
        <Icon className="h-5 w-5 text-white" />
      </div>
    </div>
    <div className={`mt-4 inline-flex items-center gap-1 text-xs font-medium ${up ? 'text-emerald-300' : 'text-rose-300'}`}>
      {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />} {change}
    </div>
  </div>
);

export default function StatsGrid() {
  const stats = [
    { title: 'Total Saldo', value: 'Rp 120.532.000', change: '+3.8% bulan ini', up: true, icon: Wallet },
    { title: 'Pengeluaran', value: 'Rp 18.245.000', change: '-1.2% minggu ini', up: false, icon: Activity },
    { title: 'Pemasukan', value: 'Rp 22.980.000', change: '+5.3% minggu ini', up: true, icon: Activity },
    { title: 'Tagihan Aktif', value: '6', change: '+1 baru', up: true, icon: Wallet },
  ];

  return (
    <section className="w-[min(1200px,94%)] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.title} {...s} />
      ))}
    </section>
  );
}
