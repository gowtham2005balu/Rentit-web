import { motion } from "framer-motion";

const stats = [
  { value: "$25M+", label: "Total Freelancer Earnings", color: "bg-violet-500" },
  { value: "100K+", label: "Job Applications Processed", color: "bg-[#c4f25a]" },
  { value: "15K+", label: "Successful Projects Delivered", color: "bg-[#7cc8f7]" },
  { value: "4.9★", label: "Average Platform Rating", color: "bg-[#fbd95e]" },
];

export default function Impact() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_480px] gap-16 justify-center items-center mx-auto">
          <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden h-[500px]"
        >
          <img
            src="/images/image.png"
            alt="Community Impact"
            className="w-full h-full object-cover"
          />
        </motion.div>

          <div>
            <span className="inline-block text-[11px] font-semibold tracking-wide text-violet-300 bg-white/10 rounded-full px-3 py-1.5 mb-5">
              COMMUNITY IMPACT
            </span>
            <h2 className="text-[34px] leading-tight font-extrabold text-white tracking-tight mb-7">
              Numbers That
              <br />
              Tell the Story
            </h2>
            <div className="flex flex-col gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4"
                >
                  <span className={`w-2 h-2 rounded-full ${s.color}`} />
                  <span className="text-[18px] font-extrabold text-white">
                    {s.value}
                  </span>
                  <span className="text-[13px] text-white/45">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
