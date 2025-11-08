import { ArrowRightLeft, ExternalLink, Download } from 'lucide-react';

const Row = ({ name, time, amount, type }) => (
  <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 grid place-items-center text-white">
        <ArrowRightLeft className="h-5 w-5" />
      </div>
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-xs text-white/60">{time} • {type}</p>
      </div>
    </div>
    <p className={`text-sm font-semibold ${amount.startsWith('-') ? 'text-rose-300' : 'text-emerald-300'}`}>{amount}</p>
  </div>
);

export default function Transactions() {
  const items = [
    { name: 'Spotify Premium', time: 'Hari ini, 09:12', amount: '- Rp 54.990', type: 'Auto-debit' },
    { name: 'Gaji Bulanan', time: 'Kemarin, 17:02', amount: '+ Rp 12.500.000', type: 'Transfer' },
    { name: 'Grab', time: 'Kemarin, 08:33', amount: '- Rp 24.300', type: 'Transaksi' },
    { name: 'Refund Tiket', time: '2 hari lalu', amount: '+ Rp 320.000', type: 'Refund' },
  ];

  return (
    <section className="w-[min(1200px,94%)] mx-auto mt-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-2xl p-5 bg-white/10 border border-white/20 text-white/90 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Transaksi Terbaru</h3>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            <ExternalLink className="h-4 w-4" /> Lihat Semua
          </button>
        </div>
        <div>
          {items.map((i) => (
            <Row key={i.name + i.time} {...i} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-5 bg-white/10 border border-white/20 text-white/90 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Ringkasan Bulan Ini</h3>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 border border-white/30 text-white hover:from-cyan-400/40 hover:to-indigo-400/40 transition">
            <Download className="h-4 w-4" /> Unduh
          </button>
        </div>
        <div className="space-y-3">
          {[
            ['Total Pemasukan', 'Rp 92.400.000'],
            ['Total Pengeluaran', 'Rp 68.120.000'],
            ['Tagihan Dibayar', '12'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
              <p className="text-white/70 text-sm">{k}</p>
              <p className="text-white font-medium">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
