const columns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Services",
    links: ["UI/UX Design", "Development", "Marketing", "AI Services"],
  },
  {
    title: "Resources",
    links: ["Help Center", "API Docs", "Community", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0816] pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-[1456px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <div className="text-white font-extrabold text-xl tracking-tight mb-4">
              Huzzler<span className="text-violet-400">AI</span>
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-[300px] mb-5">
              The AI-powered freelance platform connecting ambitious
              businesses with world-class talent across 120+ countries.
            </p>
            <div className="flex items-center gap-2.5">
              {["𝕏", "in", "▶", "◆"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 text-[12px]"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-[14px] mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/40 text-[13px] hover:text-white/70 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <span className="text-white/30 text-[12px]">
            © 2025 Huzzler AI. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5">
            🛡️ Powered by Huzzler AI
          </span>
          <span className="text-white/30 text-[12px]">
            Made with ❤️ for freelancers worldwide
          </span>
        </div>
      </div>
      <div className="absolute bottom-[-40px] left-0 right-0 text-center pointer-events-none select-none">
        <span className="text-[110px] font-extrabold text-white/[0.03] tracking-tight leading-none">
          HUZZLER
        </span>
      </div>
    </footer>
  );
}
