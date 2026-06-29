export default function Navbar() {
  const links = ["Our Story", "Mission", "Team", "How It Works", "Careers"];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-[1456px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[88px]">
        <div className="text-white font-extrabold text-xl tracking-tight">
          Huzzler<span className="text-violet-400">AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[14px] text-white/70 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-[14px] font-medium text-white bg-white/10 rounded-full px-5 py-2.5 hover:bg-white/15 transition-colors">
            Log In
          </button>
          <button className="text-[14px] font-semibold text-white bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
