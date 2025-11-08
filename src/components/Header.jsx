import { Search, Bell, User, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/10 dark:bg-neutral-900/20 border border-white/20 dark:border-white/10 rounded-2xl mx-auto mt-6 w-[min(1200px,94%)] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400/60 to-cyan-400/60 border border-white/30 shadow-inner" />
          <div>
            <p className="text-sm text-white/70">Fintech Dashboard</p>
            <h1 className="text-lg font-semibold text-white">GlassPay</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 w-[42%]">
          <div className="flex items-center gap-2 flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-lg focus-within:ring-2 ring-cyan-300/40">
            <Search className="h-4 w-4 text-white/60" />
            <input
              type="text"
              placeholder="Search accounts, cards or payments..."
              className="bg-transparent placeholder:text-white/50 text-white w-full outline-none"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 active:scale-[0.98] transition">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 active:scale-[0.98] transition">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-400/70 to-blue-400/70 border border-white/30 grid place-items-center text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
