import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    step: "STEP 01",
    title: "Create a Project",
    desc: "Describe your project needs with our AI-guided brief builder. It asks the right questions to attract the best talent profiles immediately.",
    color: "bg-[#dcd3fb]",
  },
  {
    num: "2",
    step: "STEP 02",
    title: "AI Finds Best Talent",
    desc: "Our matching algorithm scans 50K+ freelancers and surfaces the top profiles ranked by fit, rating, and real-time availability.",
    color: "bg-[#e2f178]",
  },
  {
    num: "3",
    step: "STEP 03",
    title: "Review Applications",
    desc: "Compare AI-curated proposals side by side. Our intelligent scoring system highlights the strongest candidates for you instantly.",
    color: "bg-[#aedcf9]",
  },
  {
    num: "4",
    step: "STEP 04",
    title: "Hire & Collaborate",
    desc: "Onboard in one click. Access our built-in workspace with contracts, payments, and real-time chat — all from day one.",
    color: "bg-[#fbe199]",
  },
  {
    num: "5",
    step: "STEP 05",
    title: "Track Progress",
    desc: "Monitor milestones, approve deliverables, and release payments securely as each stage is completed to your satisfaction.",
    color: "bg-[#a6ecc9]",
  },
  {
    num: "6",
    step: "STEP 06",
    title: "Complete Successfully",
    desc: "Close out projects, leave reviews, and build lasting relationships with freelancers who truly understand your business.",
    color: "bg-[#fbcdb9]",
  },
];

export default function Process() {
  return (
    <section className="bg-[#ece7fb] py-24">
      <div className="max-w-[1456px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-wide text-violet-600 bg-white rounded-full px-3 py-1.5 mb-5">
              THE PROCESS
            </span>
            <h2 className="text-[34px] leading-tight font-extrabold text-gray-900 tracking-tight">
              How Huzzler
              <br />
              Works
            </h2>
          </div>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-[420px]">
            From idea to delivered project — our streamlined workflow removes
            friction at every step, powered by intelligent AI every step of
            the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`${s.color} rounded-2xl p-7 h-[195px] relative overflow-hidden`}
            >
              <span className="absolute top-3 right-5 text-[64px] font-extrabold text-black/10 leading-none select-none">
                {s.num}
              </span>
              <span className="text-[11px] font-semibold text-gray-600/60 tracking-wide relative z-10">
                {s.step}
              </span>
              <h3 className="text-[18px] font-bold text-gray-900 mt-2 mb-2 relative z-10">
                {s.title}
              </h3>
              <p className="text-[13px] text-gray-700/70 leading-relaxed relative z-10 max-w-[230px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
