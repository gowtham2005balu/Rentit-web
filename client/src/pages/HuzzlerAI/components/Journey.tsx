import { motion } from "framer-motion";

const items = [
  {
    year: "2023",
    emoji: "🚀",
    color: "bg-[#dcd3fb]",
    title: "Huzzler Founded",
    desc: "A small team of builders launched Huzzler with a bold vision — to transform how freelancers and businesses connect on a global scale.",
  },
  {
    year: "2024",
    emoji: "🌍",
    color: "bg-[#e2f178]",
    title: "Expanded Globally",
    desc: "Huzzler grew to serve freelancers and clients in over 120 countries, removing every geographic barrier in the talent marketplace.",
  },
  {
    year: "2025",
    emoji: "🤖",
    color: "bg-[#a6ecc9]",
    title: "Introduced AI Matching",
    desc: "Our breakthrough AI engine launched, intelligently connecting projects with perfect talent within seconds — not days.",
  },
  {
    year: "TODAY",
    emoji: "🏆",
    color: "bg-[#fbe199]",
    title: "Thousands Hiring Daily",
    desc: "Huzzler AI has become the go-to platform for ambitious startups and enterprises seeking world-class freelance talent, every day.",
  },
];

export default function Journey() {
  return (
    <section className="bg-[#f5f3fb] py-24">
      <div className="max-w-[1456px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold tracking-wide text-violet-600 bg-violet-100 rounded-full px-3 py-1.5 mb-5">
            OUR JOURNEY
          </span>
          <h2 className="text-[38px] leading-[1.2] font-extrabold text-gray-900 tracking-tight">
            From a Simple Idea to a
            <br />
            Global Freelance Ecosystem
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.color} rounded-2xl p-6 h-[265px] flex flex-col`}
            >
              <span className="text-[12px] font-semibold text-gray-500/80 mb-3">
                {item.year}
              </span>
              <span className="text-[26px] mb-4 leading-none">
                {item.emoji}
              </span>
              <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-gray-700/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
