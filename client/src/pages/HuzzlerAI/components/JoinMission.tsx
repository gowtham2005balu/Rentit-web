import { motion } from "framer-motion";

const perks = [
  { emoji: "🌎", label: "Remote First" },
  { emoji: "🏥", label: "Full Benefits" },
  { emoji: "📚", label: "Learning Budget" },
  { emoji: "✈️", label: "Team Retreats" },
  { emoji: "⚡", label: "Flexible Hours" },
  { emoji: "💰", label: "Equity Package" },
  { emoji: "🎨", label: "Creative Freedom" },
  { emoji: "🚀", label: "Fast Growth" },
];

export default function JoinMission() {
  return (
    <section className="relative bg-[#15102e] overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 80% 20%, rgba(99,70,230,0.35), transparent 60%), #15102e",
        }}
      />
      <div className="relative max-w-[1456px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-wide text-violet-200 bg-white/10 rounded-full px-3 py-1.5 mb-5">
              JOIN THE TEAM
            </span>
            <h2 className="text-[36px] leading-tight font-extrabold text-white tracking-tight mb-5">
              Join Our
              <br />
              Mission
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-[420px] mb-8">
              We're building the future of work and looking for passionate
              creators, designers, engineers, and innovators who want to make
              a real global impact.
            </p>
            <div className="flex items-center gap-3">
              <button className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-[14px] font-semibold rounded-full px-6 py-3.5 hover:opacity-90 transition-opacity">
                View Open Roles
              </button>
              <button className="border border-white/20 text-white text-[14px] font-semibold rounded-full px-6 py-3.5 hover:bg-white/5 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {perks.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5"
              >
                <span className="text-[16px]">{p.emoji}</span>
                <span className="text-[13px] font-medium text-white/85">
                  {p.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
