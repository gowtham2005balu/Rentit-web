import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black py-24 px-6 lg:px-10">
      <div className="max-w-[1456px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] py-20 px-6 text-center"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at 30% 20%, rgba(255,255,255,0.6), transparent 60%), linear-gradient(135deg, #e7e2fb 0%, #ddd6f8 100%)",
          }}
        >
          <h2 className="text-[38px] font-extrabold text-gray-900 tracking-tight mb-4">
            Ready to Work Smarter?
          </h2>
          <p className="text-gray-600 text-[15px] mb-8">
            Hire top freelancers, launch projects faster, and scale with
            confidence.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-[14px] font-semibold rounded-full px-6 py-3.5 hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3.5 hover:bg-gray-50 transition-colors">
              Explore Talent
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
