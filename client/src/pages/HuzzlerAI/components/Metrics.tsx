const stats = [
  { value: "50K", suffix: "+", label: "Verified Freelancers" },
  { value: "15K", suffix: "+", label: "Completed Projects" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "120", suffix: "+", label: "Countries Served" },
  { value: "24", suffix: "/7", label: "AI Assistance" },
];

export default function Metrics() {
  return (
    <section className="bg-black pb-24">
      <div className="max-w-[1456px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-wide text-violet-300 bg-white/10 rounded-full px-3 py-1.5 mb-5">
            THE METRICS
          </span>
          <h2 className="text-[36px] font-extrabold text-white tracking-tight mb-4">
            Built for Modern Workflows
          </h2>
          <p className="text-white/45 text-[15px] max-w-[480px] mx-auto leading-relaxed">
            Numbers that prove the Huzzler AI platform delivers results at
            scale, for businesses and freelancers alike.
          </p>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl grid grid-cols-2 sm:grid-cols-5 divide-x divide-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-9 px-2"
            >
              <div className="text-[32px] font-extrabold text-white leading-none mb-2">
                {s.value}
                <span className="text-violet-400">{s.suffix}</span>
              </div>
              <div className="text-[12px] text-white/45">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
