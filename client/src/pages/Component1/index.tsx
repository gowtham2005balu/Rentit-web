import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ─── Utility ──────────────────────────────────────────────────────────────────
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden border-y-[3px] border-black",
        dark ? "bg-black border-black" : "bg-[#F5D547]"
      )}
      style={{ borderTopWidth: 3, borderBottomWidth: 3 }}
    >
      <div className="ticker-track py-3">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center gap-[18px] px-11 text-sm font-bold tracking-[0.56px] uppercase whitespace-nowrap",
              dark ? "text-white/60" : "text-black"
            )}
          >
            <span className="text-[10px]">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Fade-up animation wrapper ─────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [tab, setTab] = useState<"talent" | "jobs">("talent");

  return (
    <section
      id="hero"
      className="relative h-screen bg-[#06040F] overflow-hidden flex flex-col"
    >
      {/* Glow decorations */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-120px] left-[-80px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,92,231,0.25) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,92,231,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Nav spacer
      <div className="h-[72px]" /> */}

        <div className="flex-1 w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">        {/* Left col */}
       <div className="flex flex-col gap-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-2.5 px-[18px] py-2 rounded-full border border-[#6C5CE7]/25 bg-[#6C5CE7]/12"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#00D68F] flex-shrink-0" />
            <span className="text-[#8B7CF6] text-xs font-bold tracking-[0.96px] uppercase">
              AI-Powered Freelance Marketplace
            </span>
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col leading-none">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-extrabold leading-[0.93] tracking-[-3px] text-[clamp(52px,6vw,88px)]"
            >
              Hire
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#8B7CF6] font-extrabold leading-[0.93] tracking-[-3px] text-[clamp(52px,6vw,88px)]"
            >
              Freelancers
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
           className="text-white/55 text-[16px] leading-[1.7] max-w-[420px]"
          >
            The world's most intelligent platform for enterprise hiring and
            elite independent talent. Powered by AI precision matching — find
            the perfect expert in seconds.
          </motion.p>

          {/* Search card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-[24px] border border-white/10 bg-[#141024]/90 shadow-[0_32px_80px_0_rgba(0,0,0,0.5),0_1px_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-xl p-[18px] flex flex-col gap-[18px] max-w-[520px]"
          >
            {/* Tabs */}
            <div className="flex items-center gap-1.5 bg-white/5 rounded-full p-1">
              <button
                onClick={() => setTab("talent")}
                className={cn(
                  "flex-1 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-200",
                  tab === "talent"
                    ? "bg-[#6C5CE7] text-white shadow-[0_4px_14px_0_rgba(108,92,231,0.45)]"
                    : "text-white/38"
                )}
              >
                Find Talent
              </button>
              <button
                onClick={() => setTab("jobs")}
                className={cn(
                  "flex-1 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-200",
                  tab === "jobs"
                    ? "bg-[#6C5CE7] text-white shadow-[0_4px_14px_0_rgba(108,92,231,0.45)]"
                    : "text-white/38"
                )}
              >
                Browse Jobs
              </button>
            </div>

            {/* Search row */}
            <div className="flex items-center gap-2.5">
              <div className="flex-1 h-[54px] rounded-full border border-white/10 bg-white/6 flex items-center gap-2.5 px-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 flex-shrink-0">
                  <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" strokeWidth="1.33333"/>
                  <path d="M14 13.9996L11.1 11.0996" stroke="white" strokeWidth="1.33333"/>
                </svg>
                <span className="text-white/25 text-sm truncate">
                  Search for developers, designers, writers...
                </span>
              </div>
              <motion.button
                onClick={() => window.open('https://huzzler.io/', '_blank')}
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(108,92,231,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="h-[54px] px-8 rounded-full bg-[#6C5CE7] text-white text-sm font-bold shadow-[0_4px_16px_0_rgba(108,92,231,0.4)] flex-shrink-0 transition-all"
              >
                Search
              </motion.button>
            </div>

            {/* Trust bar */}
            <div className="pt-4 border-t border-white/7 flex flex-col gap-3">
              <p className="text-white/25 text-[10px] font-bold tracking-[1.5px] uppercase">
                Trusted by builders at
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {["Microsoft", "Airbnb", "Stripe", "Notion", "Figma"].map((name) => (
                  <span key={name} className="text-white/28 text-[13px] font-bold tracking-[-0.13px]">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
           className="flex items-center gap-8 pt-0"
          >
            {[
              { value: "48K+", label: "Active Freelancers" },
              { value: "$2.4M", label: "Paid Out Monthly" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-white font-extrabold text-[32px] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/40 text-[11px] font-semibold tracking-[1px] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right col - empty to keep grid structure */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Hero Image - Bleeding to right edge */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[50vw] h-full hidden lg:block pointer-events-none"
      >
        <div className="relative w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/86a4e0be3e0fc6c3bcb9ee581af679fad127bc97?width=1816"
            alt="Freelancer working"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#06040F]/80 to-[#06040F]" />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-11 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-white text-[10px] font-bold tracking-[1.2px] uppercase">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Categories Section ────────────────────────────────────────────────────────
const categories = [
  {
    name: "Graphics & Design", count: "12,400",
    bg: "linear-gradient(135deg, #E0D8FF 0%, #C4B0FF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" fill="#7C5CF6"/>
        <path d="M24 15.5C25.933 15.5 27.5 13.933 27.5 12C27.5 10.067 25.933 8.5 24 8.5C22.067 8.5 20.5 10.067 20.5 12C20.5 13.933 22.067 15.5 24 15.5Z" fill="#A855F7"/>
        <path d="M18 26.5C19.933 26.5 21.5 24.933 21.5 23C21.5 21.067 19.933 19.5 18 19.5C16.067 19.5 14.5 21.067 14.5 23C14.5 24.933 16.067 26.5 18 26.5Z" fill="#6D4CF5"/>
        <path d="M12 12L18 23L24 12L18 16L12 12Z" fill="#6C4CF5" fillOpacity="0.3"/>
        <path d="M9 27C15 30.3333 21 30.3333 27 27" stroke="#7C5CF6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Programming & Tech", count: "8,200",
    bg: "linear-gradient(135deg, #DAEEFF 0%, #A8D4FF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M28 8H8C6.34315 8 5 9.34315 5 11V23C5 24.6569 6.34315 26 8 26H28C29.6569 26 31 24.6569 31 23V11C31 9.34315 29.6569 8 28 8Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M5 28H31" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 17L11 14L14 11" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 17L25 14L22 11" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10L16 19" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Digital Marketing", count: "6,800",
    bg: "linear-gradient(135deg, #FFE9CE 0%, #FFCF8B 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M7 26L14 18L19 22L28 10" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 10H28V15" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 27H8C7.44772 27 7 27.4477 7 28V32C7 32.5523 7.44772 33 8 33H10C10.5523 33 11 32.5523 11 32V28C11 27.4477 10.5523 27 10 27Z" fill="#FDBA74"/>
        <path d="M17 22H15C14.4477 22 14 22.4477 14 23V32C14 32.5523 14.4477 33 15 33H17C17.5523 33 18 32.5523 18 32V23C18 22.4477 17.5523 22 17 22Z" fill="#FB923C"/>
        <path d="M24 17H22C21.4477 17 21 17.4477 21 18V32C21 32.5523 21.4477 33 22 33H24C24.5523 33 25 32.5523 25 32V18C25 17.4477 24.5523 17 24 17Z" fill="#F97316"/>
      </svg>
    ),
  },
  {
    name: "Video & Animation", count: "4,100",
    bg: "linear-gradient(135deg, #FFE0ED 0%, #FFAED0 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M28 9H8C6.34315 9 5 10.3431 5 12V24C5 25.6569 6.34315 27 8 27H28C29.6569 27 31 25.6569 31 24V12C31 10.3431 29.6569 9 28 9Z" stroke="#EC4899" strokeWidth="2"/>
        <path d="M5 13H31" stroke="#EC4899" strokeWidth="1.5"/>
        <path d="M15 18V26L24 22L15 18Z" fill="#F472B6"/>
      </svg>
    ),
  },
  {
    name: "Writing & Translation", count: "5,600",
    bg: "linear-gradient(135deg, #D4F5E7 0%, #9EECC8 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M22 7L29 14L14 29H7V22L22 7Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 10L26 17" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 11C26.6569 11 28 9.65685 28 8C28 6.34315 26.6569 5 25 5C23.3431 5 22 6.34315 22 8C22 9.65685 23.3431 11 25 11Z" fill="#34D399"/>
      </svg>
    ),
  },
  {
    name: "AI Services", count: "3,200",
    bg: "linear-gradient(135deg, #DDD8FF 0%, #B8ACFF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M23 11H13C10.7909 11 9 12.7909 9 15V22C9 24.2091 10.7909 26 13 26H23C25.2091 26 27 24.2091 27 22V15C27 12.7909 25.2091 11 23 11Z" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="2"/>
        <path d="M14 20.5C15.3807 20.5 16.5 19.3807 16.5 18C16.5 16.6193 15.3807 15.5 14 15.5C12.6193 15.5 11.5 16.6193 11.5 18C11.5 19.3807 12.6193 20.5 14 20.5Z" fill="#7C3AED"/>
        <path d="M22 20.5C23.3807 20.5 24.5 19.3807 24.5 18C24.5 16.6193 23.3807 15.5 22 15.5C20.6193 15.5 19.5 16.6193 19.5 18C19.5 19.3807 20.6193 20.5 22 20.5Z" fill="#7C3AED"/>
        <path d="M14 22C16.6667 24 19.3333 24 22 22" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 11V8M22 11V8M9 19H6M30 19H27" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Music & Audio", count: "2,900",
    bg: "linear-gradient(135deg, #D0F4F0 0%, #93E6DE 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M13 31C15.2091 31 17 29.2091 17 27C17 24.7909 15.2091 23 13 23C10.7909 23 9 24.7909 9 27C9 29.2091 10.7909 31 13 31Z" fill="#0D9488" fillOpacity="0.12" stroke="#0D9488" strokeWidth="2"/>
        <path d="M27 28C29.2091 28 31 26.2091 31 24C31 21.7909 29.2091 20 27 20C24.7909 20 23 21.7909 23 24C23 26.2091 24.7909 28 27 28Z" fill="#0D9488" fillOpacity="0.12" stroke="#0D9488" strokeWidth="2"/>
        <path d="M17 27V12L31 9V24" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 16L31 13" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Data & Analytics", count: "1,800",
    bg: "linear-gradient(135deg, #FFDDE6 0%, #FFA8BF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M10.5 22H8.5C7.67157 22 7 22.6716 7 23.5V29.5C7 30.3284 7.67157 31 8.5 31H10.5C11.3284 31 12 30.3284 12 29.5V23.5C12 22.6716 11.3284 22 10.5 22Z" fill="#F43F5E"/>
        <path d="M18.5 15H16.5C15.6716 15 15 15.6716 15 16.5V29.5C15 30.3284 15.6716 31 16.5 31H18.5C19.3284 31 20 30.3284 20 29.5V16.5C20 15.6716 19.3284 15 18.5 15Z" fill="#FB7185"/>
        <path d="M26.5 9H24.5C23.6716 9 23 9.67157 23 10.5V29.5C23 30.3284 23.6716 31 24.5 31H26.5C27.3284 31 28 30.3284 28 29.5V10.5C28 9.67157 27.3284 9 26.5 9Z" fill="#F43F5E"/>
        <path d="M7 8L9.5 22L18 12L28 4" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Business", count: "2,400",
    bg: "linear-gradient(135deg, #D8EDFF 0%, #A5CFFF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M27 16H9C7.34315 16 6 17.3431 6 19V28C6 29.6569 7.34315 31 9 31H27C28.6569 31 30 29.6569 30 28V19C30 17.3431 28.6569 16 27 16Z" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="2"/>
        <path d="M13 16V13C13 11 14.6667 10 18 10C21.3333 10 23 11 23 13V16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 23C14 26.3333 22 26.3333 30 23" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 20H16C15.4477 20 15 20.4477 15 21V24C15 24.5523 15.4477 25 16 25H20C20.5523 25 21 24.5523 21 24V21C21 20.4477 20.5523 20 20 20Z" fill="#3B82F6"/>
      </svg>
    ),
  },
  {
    name: "Photography", count: "1,600",
    bg: "linear-gradient(135deg, #EBE6FF 0%, #CABFFF 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M28.5 12H7.5C5.567 12 4 13.567 4 15.5V27.5C4 29.433 5.567 31 7.5 31H28.5C30.433 31 32 29.433 32 27.5V15.5C32 13.567 30.433 12 28.5 12Z" fill="#6C4CF5" fillOpacity="0.08" stroke="#6C4CF5" strokeWidth="2"/>
        <path d="M13 12L14.5 8H21.5L23 12" stroke="#6C4CF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 26C20.7614 26 23 23.7614 23 21C23 18.2386 20.7614 16 18 16C15.2386 16 13 18.2386 13 21C13 23.7614 15.2386 26 18 26Z" fill="#6C4CF5" fillOpacity="0.12" stroke="#6C4CF5" strokeWidth="2"/>
        <path d="M27 17.5C27.8284 17.5 28.5 16.8284 28.5 16C28.5 15.1716 27.8284 14.5 27 14.5C26.1716 14.5 25.5 15.1716 25.5 16C25.5 16.8284 26.1716 17.5 27 17.5Z" fill="#8B6FF8"/>
      </svg>
    ),
  },
  {
    name: "Personal Growth", count: "980",
    bg: "linear-gradient(135deg, #D5F5E8 0%, #8FE0BE 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 29V16" stroke="#059669" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M18 20C22 16 25.3333 13.3333 28 12" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 23C14 19 10.6667 16.3333 8 15" stroke="#34D399" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 32C19.6569 32 21 30.6569 21 29C21 27.3431 19.6569 26 18 26C16.3431 26 15 27.3431 15 29C15 30.6569 16.3431 32 18 32Z" fill="#059669"/>
      </svg>
    ),
  },
  {
    name: "Finance", count: "1,200",
    bg: "linear-gradient(135deg, #FFF0D0 0%, #FFD47A 100%)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6C22 6 24.6667 7.66667 26 11L28 18C28 22 24.6667 26 18 30C11.3333 26 8 22 8 18L10 11C11.3333 7.66667 14 6 18 6Z" fill="#D97706" fillOpacity="0.1" stroke="#D97706" strokeWidth="2"/>
        <path d="M18 12V24" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M15 15C15 13 16 12 18 12C20 12 21 13 21 15C21 16.3333 20 17.3333 18 18C20 18 21 19 21 21C21 23 20 24 18 24C16 24 15 23 15 21" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-24 bg-[#F5F6FA] border-b border-[#EAEBF0]"
    >
      <div className="max-w-[1380px] mx-auto px-8 xl:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#6C4CF5]" />
              <span className="text-[#6C4CF5] text-xs font-bold tracking-[1.44px] uppercase">
                Browse Services
              </span>
            </div>
            <h2 className="text-[#0A0F2C] font-extrabold text-[clamp(36px,5vw,62px)] leading-tight tracking-[-1.5px]">
              Explore{" "}
              <span className="text-[#6C4CF5]">Categories</span>
            </h2>
            <p className="text-[#6B7280] text-base max-w-[400px] leading-[1.65]">
              Discover thousands of services across 12+ categories. Find the
              perfect service for your needs.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="self-start sm:self-auto flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#6C4CF5]/20 bg-white shadow-[0_4px_20px_0_rgba(108,76,245,0.1),0_1px_4px_0_rgba(10,15,44,0.05)] text-[#6C4CF5] text-[15px] font-semibold transition-all hover:shadow-[0_4px_24px_rgba(108,76,245,0.2)]"
          >
            All Categories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 12L13 8L9 4" stroke="#6C4CF5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((cat, i) => (
            <FadeUp key={cat.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(10,15,44,0.12)" }}
                transition={{ duration: 0.2 }}
                className="relative rounded-[22px] border border-[#EAEBF0] bg-white shadow-[0_2px_12px_0_rgba(10,15,44,0.06)] overflow-hidden cursor-pointer"
                style={{ aspectRatio: "1 / 1.06" }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-100 rounded-[22px]"
                  style={{
                    background:
                      "linear-gradient(137deg, rgba(108,76,245,0.05) 0%, rgba(108,76,245,0.00) 60%)",
                  }}
                />

                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  {/* Icon circle */}
                  <div
                    className="w-[76px] h-[76px] rounded-full flex items-center justify-center"
                    style={{ background: cat.bg }}
                  >
                    {cat.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-[#0A0F2C] font-bold text-[15px] leading-[1.3]">
                      {cat.name}
                    </p>
                    <p className="text-[#6B7280] text-[13px] font-medium mt-1">
                      {cat.count} services
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="w-9 h-9 rounded-full border border-[#6C4CF5]/30 flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M3 7.5H12M8.5 11L12 7.5L8.5 4" stroke="#6C4CF5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Trust bar */}
        <FadeUp delay={0.3}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 rounded-[28px] border border-[#EAEBF0] bg-white shadow-[0_2px_20px_0_rgba(10,15,44,0.05)] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#EAEBF0]">
            {[
              { icon: "shield", title: "Trusted Professionals", desc: "Verified experts you can rely on." },
              { icon: "star", title: "Quality Services", desc: "Top-rated services, guaranteed." },
              { icon: "chat", title: "24/7 Support", desc: "We're here to help anytime." },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 px-8 py-6">
                <div className="w-12 h-12 rounded-[14px] bg-[#6C4CF5]/8 flex items-center justify-center flex-shrink-0">
                  {item.icon === "shield" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L20 5.5V11.5C20 15.8 16.4 19.8 12 21C7.6 19.8 4 15.8 4 11.5V5.5L12 2Z" fill="#6C4CF5" fillOpacity="0.08" stroke="#6C4CF5" strokeWidth="1.8"/>
                      <path d="M9 12L11 14L15 10" stroke="#6C4CF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === "star" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0031 2L14.4031 8.5H21.3031L15.9031 12.5L18.2031 19L12.0031 15L5.80313 19L8.10313 12.5L2.70312 8.5H9.60313L12.0031 2Z" fill="#6C4CF5" fillOpacity="0.08" stroke="#6C4CF5" strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === "chat" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3C7 3 3 7 3 12C3 14.4 4 16.6 5.6 18.2L4 21L7.2 19.7C8.6 20.5 10.2 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z" fill="#6C4CF5" fillOpacity="0.08" stroke="#6C4CF5" strokeWidth="1.8"/>
                      <path d="M9 11C9 9.66667 9.66667 9 11 9C12.3333 9 13 9.66667 13 11C13 12.3333 12.3333 13 11 13V15" stroke="#6C4CF5" strokeWidth="1.6" strokeLinecap="round"/>
                      <path d="M11 18C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18Z" fill="#6C4CF5"/>
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-[#0A0F2C] font-bold text-[15px]">{item.title}</p>
                  <p className="text-[#6B7280] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Why Huzzler / Feature Cards ──────────────────────────────────────────────
// ─── Why Huzzler / Feature Cards ──────────────────────────────────────────────
function WhyHuzzlerSection() {
  return (
    <section
      id="why-huzzler"
      className="py-28 bg-white border-t border-[#E4E4E4]"
    >
      <div className="max-w-[1380px] mx-auto px-8 xl:px-16 flex flex-col gap-12">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col items-center gap-4 pb-12 border-b border-[#E4E4E4]">
            <span className="text-[#6C5CE7] text-[11px] font-bold tracking-[1.32px] uppercase">
              Why Huzzler?
            </span>
            <h2 className="text-[#111] font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-2.56px] text-center">
              Built for modern workflows
            </h2>
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-8">
              {[
                { value: "4.9/5", label: "Average Rating" },
                { value: "10K+", label: "Tasks Completed" },
                { value: "24/7", label: "Trusted Support" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="text-[#111] font-extrabold text-[clamp(32px,4vw,52px)] tracking-[-2.6px] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[#888] text-sm text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Feature cards bento - row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 items-stretch">
          {/* Card 1: Photo (man) */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] overflow-hidden h-[380px] relative cursor-pointer"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5c8d14cad26aa142f987b6a69cb7a883ba7399ad?width=76"
                alt="Verified professional"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7C3AED]" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-white font-extrabold text-[13px]">Huzzler</p>
                <p className="text-white/65 text-[11px]">Verified Professionals</p>
              </div>
            </motion.div>
          </FadeUp>

          {/* Card 2: Yellow Ironclad Escrow Protection */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#FFFF7B] overflow-hidden h-[380px] flex flex-col justify-between p-7 relative cursor-pointer"
            >
              <div className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full bg-black/8">
                <span className="text-black/70 text-[11px] font-bold tracking-[0.77px] uppercase">
                  Escrow Protected
                </span>
              </div>
              <p className="text-black/55 text-[13px] font-medium leading-[1.65]">
                Your capital is protected. Funds are locked securely upfront and never released until you are 100% satisfied with the final deliverable.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FFFF7B] overflow-hidden">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/5c8d14cad26aa142f987b6a69cb7a883ba7399ad?width=76" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#FFFF7B] overflow-hidden -ml-3">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/c2a85006cc635de495fbefd636d3d1e7d0717d0e?width=76" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-black font-extrabold text-[22px] leading-[1.2] tracking-[-0.78px]">
                  Ironclad<br />Escrow<br />Protection
                </h3>
                <p className="text-black/40 text-[10px] font-bold tracking-[0.8px] uppercase">
                  HUZZLER.COM · Faster, simpler
                </p>
              </div>
            </motion.div>
          </FadeUp>

          {/* Card 3: Photo (woman) */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] overflow-hidden h-[380px] relative cursor-pointer"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e88b826aab733b53aa9ec740b87771b137eff27?width=605"
                alt="Elite global talent"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CCFF00]" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-white font-extrabold text-[13px]">Huzzler</p>
                <p className="text-white/65 text-[11px]">Elite Global Talent</p>
              </div>
            </motion.div>
          </FadeUp>

          {/* Card 4: Green Proven Track Record */}
          <FadeUp delay={0.25}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#6EF0A2] overflow-hidden h-[380px] flex flex-col p-10 relative cursor-pointer"
            >
              <div className="flex flex-col gap-5 h-full">
                <div className="inline-flex self-start items-center px-3 py-1.5 rounded-full border border-white/25 bg-white/15">
                  <span className="text-black text-[10px] font-bold tracking-[0.5px]">⚡ Backed by Results</span>
                </div>
                <p className="text-black/55 text-[13px] font-medium leading-[1.65]">
                  Backed by a history of successful enterprise deployments, our ecosystem is strictly built to consistently deliver high-stakes outcomes.
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <h3 className="text-black font-extrabold text-[36px] leading-[1.1] tracking-[-1.44px]">
                    Proven<br />Track<br />Record
                  </h3>
                  <p className="text-black/35 text-[10px] font-bold tracking-[0.8px] uppercase">
                    HUZZLER.COM · Faster, simpler
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* Feature cards bento - row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 items-stretch">
          {/* Card: Blue verified professionals */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#80C9FF] overflow-hidden h-[300px] flex flex-col justify-end p-10 relative cursor-pointer"
            >
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-black/25 opacity-80" />
              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10" />
              <div className="flex flex-col gap-3">
                <div className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full bg-white/8 border border-white/60 border-opacity-60">
                  <span className="text-white/60 text-[11px] font-bold tracking-[0.77px] uppercase">
                    🛡️ #Huzzler · Secure
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-[28px] leading-[1.15] tracking-[-1.12px]">
                  Work with verified<br />professionals only
                </h3>
                <p className="text-white/70 text-sm leading-[1.71]">
                  Every freelancer is ID-verified, skill-tested, and reference-checked before listing on our platform.
                </p>
              </div>
            </motion.div>
          </FadeUp>

          {/* Card: White quality check */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-white border border-[#E4E4E4] overflow-hidden h-[300px] flex flex-col justify-end p-10 relative cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[#111] font-extrabold text-[18px] leading-[1.4] tracking-[-0.5px]">
                  Every freelancer is<br />screened for quality
                </p>
                <div className="flex flex-col gap-2.5">
                  {["Portfolio Review", "Skill Validation Tests", "Reference Checks", "ID Verification"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#444] text-[13px] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[#BBB] text-[10px] font-bold tracking-[1px]">QUALITY · ©2026</span>
              </div>
            </motion.div>
          </FadeUp>

          {/* Card: Purple secure payments */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] overflow-hidden h-[300px] flex flex-col justify-between p-10 cursor-pointer"
              style={{ background: "rgba(124, 58, 237, 0.50)" }}
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full bg-white/15">
                  <span className="text-white/80 text-[11px] font-bold tracking-[0.77px] uppercase">⚡ #Escrow</span>
                </div>
                <h3 className="text-white font-extrabold text-[28px] leading-[1.15] tracking-[-1.12px]">
                  Secure<br />payments.<br />Always<br />protected.
                </h3>
                <p className="text-white/70 text-sm leading-[1.71]">
                  Funds are locked securely upfront and never released until you're 100% satisfied with the final deliverable.
                </p>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* Feature cards bento - row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
          {/* Card: Yellow no risk */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#FFFF7B] overflow-hidden flex flex-col justify-between p-10 cursor-pointer h-[300px]"
            >
              <h3 className="text-[#111] font-extrabold text-[28px] leading-[1.15] tracking-[-1.12px]">
                No more risk<br />of paying for<br />incomplete<br />work.
              </h3>
              <span className="text-black/40 text-[10px] font-bold tracking-[1px]">#HUZZLER · ©2026</span>
            </motion.div>
          </FadeUp>

          {/* Card: Green fast delivery */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#6EF0A2] overflow-hidden flex flex-col justify-between h-[300px] p-10 cursor-pointer"
            >
              <div className="flex flex-col gap-5">
                <div className="inline-flex self-start items-center px-3.5 py-1.5 rounded-full bg-[#F5D547]">
                  <span className="text-black text-[11px] font-bold tracking-[0.66px]">⚡ 24H TURNAROUND AVAILABLE</span>
                </div>
                <h3 className="text-black font-extrabold text-[28px] leading-[1.15] tracking-[-1.12px]">
                  Fast delivery.<br />Reliable results.
                </h3>
                <div className="flex gap-2.5">
                  <div className="w-12 h-12 rounded-full bg-[#CCFF00]" />
                  <div className="w-12 h-12 rounded-full bg-[#6C5CE7]" />
                </div>
              </div>
              <span className="text-black text-[10px] font-bold tracking-[0.8px]">VELOCITY · 24/7</span>
            </motion.div>
          </FadeUp>

          {/* Card: Gray stats */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[36px] bg-[#F0F0F0] overflow-hidden flex flex-col justify-center h-[300px] p-10 cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <div className="text-[60px] font-extrabold tracking-[-3px] leading-none">
                  <span className="text-[#111]">4.9</span>
                  <span className="text-[#6C5CE7]">★</span>
                </div>
                <p className="text-[#AAA] text-[11px] font-bold tracking-[1.1px] uppercase">Average Rating</p>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <div className="text-[60px] font-extrabold tracking-[-3px] leading-none text-[#111]">10K+</div>
                <p className="text-[#AAA] text-[11px] font-bold tracking-[1.1px] uppercase">Tasks Completed</p>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews / Testimonials ────────────────────────────────────────────────────
const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Working with Huzzler changed everything for us. Got matched with an expert in minutes and the quality was outstanding.",
    name: "Stephen A.",
    badge: "⚡ Delivered in 18h",
    bg: "bg-[#6C5CE7]",
    textColor: "text-white",
    dividerColor: "bg-white",
    badgeBorder: "border-white",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Super professional, organised and great to work with. These guys were invaluable on our last major project. Can't recommend enough.",
    name: "Marcus L.",
    badge: "Hired in 10 mins",
    bg: "bg-[#7C3AED]/50",
    textColor: "text-white",
    dividerColor: "bg-white",
    badgeBorder: "border-white",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Really useful system. We got an amazing service for our company and events going forward. Highly recommended to all.",
    name: "Barry W.",
    badge: "⭐ 4.9 Rating",
    bg: "bg-white border border-[#E4E4E4]",
    textColor: "text-[#444]",
    dividerColor: "bg-[#CCC]",
    badgeBorder: "border-[#6C5CE7]",
    badgeTextColor: "text-[#6C5CE7]",
    starsColor: "text-[#6C5CE7]",
    nameColor: "text-[#111]",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Sorted out our frontend bugs in very timely manner. Excellent rates and highly recommended. Will definitely come back!",
    name: "Simon F.",
    badge: "⚡ Delivered in 24h",
    bg: "bg-[#CCFF00]/50",
    textColor: "text-black",
    dividerColor: "bg-black",
    badgeBorder: "border-black",
    nameColor: "text-black",
    starsColor: "text-black",
    badgeTextColor: "text-black",
  },
];

function ReviewsSection() {
  const doubled = [...reviews, ...reviews];
  return (
    <section id="reviews" className="py-28 bg-white border-t border-[#E4E4E4] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-8 xl:px-16">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="flex flex-col gap-4">
              <span className="text-[#6C5CE7] text-[11px] font-bold tracking-[1.32px] uppercase">
                Rating & Reviews
              </span>
              <h2 className="text-[#111] font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-2.56px]">
                Trusted by people
              </h2>
            </div>
            <button className="self-start sm:self-auto flex items-center px-[18px] py-2 rounded-full border border-[#6C5CE7]/30 text-[#6C5CE7] text-sm font-semibold hover:bg-[#6C5CE7]/5 transition-colors">
              Read all reviews →
            </button>
          </div>
        </FadeUp>
      </div>

      {/* Scrolling testimonials */}
      <div className="overflow-hidden">
        <div className="testimonial-track">
          {doubled.map((review, i) => (
            <div
              key={i}
              className={cn(
                "flex-shrink-0 w-[300px] mx-3.5 rounded-[28px] p-8 flex flex-col gap-3",
                review.bg
              )}
            >
              <span className={cn("text-[13px]", review.starsColor || review.textColor)}>
                {review.stars}
              </span>
              <p className={cn("text-sm leading-[1.71] flex-1", review.textColor)}>
                {review.text}
              </p>
              <div className={cn("w-8 h-0.5 opacity-20", review.dividerColor)} />
              <p className={cn("text-sm font-bold", review.nameColor || review.textColor)}>
                {review.name}
              </p>
              <div
                className={cn(
                  "self-start flex items-center px-3 py-1.5 rounded-full border text-[10px] font-bold tracking-[0.7px] uppercase opacity-65",
                  review.badgeBorder,
                  review.badgeTextColor || review.textColor
                )}
              >
                {review.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog / Insights ──────────────────────────────────────────────────────────
const blogPosts = [
  {
    date: "Apr 12, 2026",
    title: "Revolutionizing Team Collaboration: The Huzzler Way",
    excerpt: "Discover how Huzzler's AI-precision matching is changing the game in team collaboration, boosting productivity and sparking creativity.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/d76c3468add629a8c3a14b2207afdc3d6edfd7ca?width=809",
  },
  {
    date: "Mar 28, 2026",
    title: "Unleashing Creativity: How Our Talent Inspires Innovation",
    excerpt: "Explore how our strict vetting process nurtures a culture of elite independence, empowering experts to unleash their potential.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/2db3eace711f28cfd3f982bb1b43c1d9f11781b9?width=809",
  },
  {
    date: "Feb 15, 2026",
    title: "Efficiency Redefined: The Power of Escrow Protection",
    excerpt: "Learn how Huzzler's ironclad escrow features streamline workflows, increase efficiency, and keep your most critical projects completely secure.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/59b552b65c375c1f84b1ced7e7e18e9a3ab67b64?width=809",
  },
];

function BlogSection() {
  return (
    <section
      className="py-28 border-t border-[#E4E4E4]"
      style={{ background: "linear-gradient(188deg, #FFF 55%, #D3EDFF 94%)" }}
    >
      <div className="max-w-[1380px] mx-auto px-8 xl:px-16 flex flex-col gap-12">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-[#6C5CE7] text-[11px] font-bold tracking-[1.32px] uppercase">
                Insights & Stories
              </span>
              <h2 className="text-[#111] font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-2.56px]">
                Discover the<br />Huzzler advantage
              </h2>
            </div>
            <button className="self-start sm:self-auto flex items-center px-[18px] py-2 rounded-full border border-[#E4E4E4] text-[#111] text-sm font-semibold hover:bg-black/5 transition-colors">
              Read all stories →
            </button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, i) => (
            <FadeUp key={post.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-[#E4E4E4] bg-white overflow-hidden cursor-pointer"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2.5">
                  <span className="text-[#999] text-[11px] font-semibold tracking-[0.66px] uppercase">
                    {post.date}
                  </span>
                  <h3 className="text-[#111] font-bold text-[16px] leading-[1.45] tracking-[-0.32px]">
                    {post.title}
                  </h3>
                  <p className="text-[#666] text-[13px] leading-[1.68]">{post.excerpt}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  {
    num: "1",
    title: "SCOPE YOUR\nPROJECT",
    desc: "Define strict criteria, set your timeline, and launch your requirement to our elite network.",
    bg: "bg-[#D7D2FF]",
    textColor: "text-[#111]",
    arrowColor: "#111111",
  },
  {
    num: "2",
    title: "SELECT\nYOUR EXPERT",
    desc: "AI matches you with the best-fit freelancers. Review profiles and choose your expert.",
    bg: "bg-[#CCFF00]/50",
    textColor: "text-black",
    arrowColor: "black",
  },
  {
    num: "3",
    title: "Collaborate\n& Track",
    desc: "Work with your expert through our managed workspace with milestone tracking.",
    bg: "bg-[#6EF0A2]",
    textColor: "text-black",
    arrowColor: "white",
  },
  {
    num: "4",
    title: "Approve &\nRelease",
    desc: "Review deliverables and release escrow payment only when 100% satisfied.",
    bg: "bg-[#FFFF7B]",
    textColor: "text-[#111]",
    arrowColor: "black",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-28 bg-white border-t border-[#E4E4E4]"
    >
      <div className="max-w-[1240px] mx-auto px-8 flex flex-col gap-6">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div className="flex flex-col gap-3">
              <span className="text-[#22C55E] text-[11px] font-bold tracking-[1.32px] uppercase">
                Our Process
              </span>
              <h2 className="text-[#111] font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-2.56px]">
                How it<br />works
              </h2>
            </div>
            <div className="max-w-[420px]">
              <p className="text-[#555] text-[17px] leading-[1.72]">
                From sharing your requirement to approving delivery, every step is designed to make freelance hiring simpler, faster, and more reliable.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Flex container: big card + 2x2 step grid */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {/* Large text card */}
          <FadeUp delay={0.1} className="lg:w-[360px] lg:flex-shrink-0">
            <div className="rounded-[36px] bg-[#D3EDFF] overflow-hidden relative h-full flex flex-col justify-between p-8 min-h-[356px]">
              <div>
                <p className="text-black/45 text-[10px] font-bold tracking-[1.2px] uppercase mb-3">
                  How it works — A clear & reliable flow
                </p>
                <h3 className="text-[#262323] font-extrabold text-[clamp(26px,3.2vw,38px)] leading-[1] tracking-[-1.6px]">
                  HOW IT<br />WORKS,<br />A CLEAR<br />AND<br />RELIABLE<br />FLOW.
                </h3>
              </div>
              <p className="text-[#1E2939] text-[14px] leading-[1.65] max-w-[280px]">
                We've optimized the process so you can focus on outcomes, not operations — even taking care of the most complex coordination challenges.
              </p>
              {/* Decorative circles */}
              <div className="absolute bottom-[-30px] right-[-30px] w-44 h-44 rounded-full bg-[#BCE3FF] opacity-70" />
              <div className="absolute top-[-30px] left-[-30px] w-32 h-32 rounded-full bg-[#1400840F]" />
            </div>
          </FadeUp>

          {/* 2x2 grid of step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={(i + 1) * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    "rounded-[28px] overflow-hidden p-6 flex flex-col justify-between h-[170px] cursor-pointer relative",
                    step.bg
                  )}
                >
                  {/* Step number - top-right */}
                  <span className="absolute top-4 right-4 text-[32px] font-extrabold leading-none tracking-[-1.6px] opacity-20 text-black select-none">
                    {step.num}
                  </span>

                  <div className="flex flex-col gap-1.5 relative z-10 pr-6">
                    <h4 className={cn("font-extrabold text-[14px] leading-[1.2] tracking-[-0.3px] uppercase", step.textColor)}>
                      {step.title}
                    </h4>
                    <p className={cn("text-[12px] leading-[1.5] opacity-70", step.textColor)}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow button - bottom-right */}
                  <div className="flex justify-end relative z-10 mt-auto">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.10)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4.66663 11.3327L11.3333 4.66602M11.3333 11.3327V4.66602H4.66663" stroke={step.arrowColor} strokeWidth="1.66667"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-14 px-16 bg-[#F8F8F8]">
      <FadeUp>
        <div className="relative rounded-[36px] border border-white/4 bg-[#06040F] overflow-hidden px-20 py-24 flex flex-col items-center text-center">
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(108,92,231,0.22) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 max-w-[800px]">
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#6C5CE7]/28 bg-[#6C5CE7]/14">
              <span className="text-[#8B7CF6] text-xs font-bold tracking-[0.72px]">
                🚀 Join 48,000+ freelancers already earning
              </span>
            </div>

            <h2 className="text-white font-extrabold text-[clamp(40px,6vw,76px)] leading-[1] tracking-[-3.8px]">
              World-class experts<br />at your command
            </h2>

            <p className="text-white/50 text-[18px] leading-[1.68] max-w-[520px]">
              Huzzler helps startups and enterprises scale faster with vetted global freelancers — powered by AI precision.
            </p>

            <div className="flex flex-wrap gap-3.5 justify-center pt-6">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(108,92,231,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#6C5CE7] text-white font-bold text-[15px] px-9 py-[17px] rounded-full shadow-[0_8px_32px_0_rgba(108,92,231,0.5)] transition-all"
              >
                Hire Top Talent
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33331 8H12.6666M7.99998 12.6673L12.6666 8L7.99998 3.33398" stroke="white" strokeWidth="1.66667"/>
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-white font-semibold text-[15px] px-9 py-[16px] rounded-full border border-white/18 hover:bg-white/5 transition-all"
              >
                Become a Freelancer
              </motion.button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = {
    Category: ["Graphics & Design", "Writing & Translation", "Music & Audio", "AI Services", "Data", "Personal Growth & Hobbies", "Finance"],
    Company: ["About Us", "Careers", "Press", "Blog", "Partners"],
    Support: ["Help Center", "Safety & Trust", "Accessibility", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#06040F] border-t border-white/8">
      {/* Footer ticker */}
      <div className="overflow-hidden border-t-2 border-b-2 border-black bg-[#F5D547]">
        <div className="ticker-track py-3">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-[18px] px-11 text-sm font-bold tracking-[0.78px] uppercase whitespace-nowrap text-black">
              <span className="text-[13px]">✦</span>
              HUZZLER. FREELANCE MADE SIMPLE
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-8 xl:px-16">
        {/* Top row */}
        <div className="py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">H</span>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">Huzzler</span>
          </div>
          {/* App buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/18 bg-white/5 hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M7.58337 2.04102C8.0092 1.55685 8.71503 1.18935 9.29837 1.16602C9.3742 1.84852 9.10003 2.53685 8.6917 3.02685C8.2892 3.52268 7.6242 3.90768 6.97087 3.85518C6.88337 3.18435 7.21003 2.48435 7.58337 2.04102Z" fill="white"/>
                <path d="M10.9142 11.3743C10.43 12.0977 9.9167 12.8035 9.13503 12.8152C8.35337 12.8327 8.10253 12.3543 7.21587 12.3543C6.32337 12.3543 6.0492 12.8035 5.30837 12.8327C4.5442 12.8618 3.9667 12.0627 3.4767 11.3568C2.4792 9.91601 1.71503 7.26185 2.7417 5.47685C3.2492 4.59018 4.1592 4.03018 5.14503 4.01268C5.8917 4.00102 6.60337 4.52018 7.0642 4.52018C7.5192 4.52018 8.38253 3.89602 9.28087 3.98935C9.66003 4.00685 10.7217 4.14102 11.4042 5.14435C11.3517 5.17935 10.1384 5.89102 10.15 7.36685C10.1675 9.12852 11.6959 9.71768 11.7134 9.72352C11.6959 9.76435 11.4684 10.5635 10.9084 11.3743" fill="white"/>
              </svg>
              <span className="text-white text-[13px] font-semibold">App Store</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/18 bg-white/5 hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M1.75 10.7912V3.20787C1.7636 3.08049 1.80501 2.95764 1.8713 2.84801C1.93759 2.73839 2.02715 2.64466 2.13364 2.57344C2.24013 2.50222 2.36096 2.45526 2.48759 2.43587C2.61423 2.41647 2.74358 2.42512 2.8665 2.4612L10.4498 6.25287C10.5778 6.33103 10.6835 6.44074 10.7568 6.57149C10.8301 6.70223 10.8686 6.84963 10.8686 6.99954C10.8686 7.14945 10.8301 7.29684 10.7568 7.42759C10.6835 7.55833 10.5778 7.66805 10.4498 7.7462L2.8665 11.5379C2.74358 11.574 2.61423 11.5826 2.48759 11.5632C2.36096 11.5438 2.24013 11.4969 2.13364 11.4256C2.02715 11.3544 1.93759 11.2607 1.8713 11.1511C1.80501 11.0414 1.7636 10.9186 1.75 10.7912Z" fill="white"/>
              </svg>
              <span className="text-white text-[13px] font-semibold">Google Play</span>
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 gap-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-6">
              <p className="text-white/45 text-[10px] font-bold tracking-[1.2px] uppercase">{section}</p>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/82 text-[15px] font-semibold hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="py-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Huzzler. All rights reserved.</p>
          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { label: "Instagram",
                svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><g clipPath="url(#ig)"><path d="M9.91663 1.16602H4.08329C2.47246 1.16602 1.16663 2.47185 1.16663 4.08268V9.91602C1.16663 11.5268 2.47246 12.8327 4.08329 12.8327H9.91663C11.5275 12.8327 12.8333 11.5268 12.8333 9.91602V4.08268C12.8333 2.47185 11.5275 1.16602 9.91663 1.16602Z" stroke="white" strokeWidth="1.05"/><path d="M9.33333 6.6317C9.40532 7.11718 9.32239 7.61299 9.09635 8.04862C8.87031 8.48426 8.51266 8.83752 8.07427 9.05818C7.63589 9.27883 7.13909 9.35563 6.65453 9.27766C6.16998 9.19969 5.72235 8.97091 5.37531 8.62388C5.02828 8.27684 4.7995 7.82921 4.72153 7.34466C4.64356 6.8601 4.72036 6.3633 4.94102 5.92492C5.16167 5.48653 5.51493 5.12888 5.95057 4.90284C6.3862 4.6768 6.88202 4.59388 7.36749 4.66587C7.8627 4.7393 8.32115 4.97005 8.67515 5.32404C9.02914 5.67804 9.25989 6.13649 9.33333 6.6317Z" stroke="white" strokeWidth="1.05"/><path d="M10.2084 3.79102H10.2142" stroke="white" strokeWidth="1.05"/></g><defs><clipPath id="ig"><rect width="14" height="14" fill="white"/></clipPath></defs></svg>
              },
              { label: "Twitter",
                svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.6423 1.3125H12.5719L8.35619 6.13083L13.3157 12.6875H9.43245L6.68261 9.05275L3.53203 12.6875H1.60061L6.11386 7.53375L0.731445 1.3125H4.71328L7.1942 4.592L10.6423 1.3125ZM9.96503 11.5325H11.0343L4.13228 2.40683H2.98486L9.96503 11.5325Z" fill="white"/></svg>
              },
              { label: "LinkedIn",
                svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><g clipPath="url(#li)"><path d="M10.5 1.16602H3.49996C2.21129 1.16602 1.16663 2.21068 1.16663 3.49935V10.4993C1.16663 11.788 2.21129 12.8327 3.49996 12.8327H10.5C11.7886 12.8327 12.8333 11.788 12.8333 10.4993V3.49935C12.8333 2.21068 11.7886 1.16602 10.5 1.16602Z" stroke="white" strokeWidth="1.05"/><path d="M4.08337 5.83398V9.91732M4.08337 4.08398V4.08982M9.33337 9.91732V7.58398C9.33337 7.27457 9.21046 6.97782 8.99166 6.75903C8.77287 6.54023 8.47613 6.41732 8.16671 6.41732C7.85729 6.41732 7.56054 6.54023 7.34175 6.75903C7.12296 6.97782 7.00004 7.27457 7.00004 7.58398V9.91732V5.83398" stroke="white" strokeWidth="1.05"/></g><defs><clipPath id="li"><rect width="14" height="14" fill="white"/></clipPath></defs></svg>
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-[38px] h-[38px] rounded-full border border-white/18 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Giant watermark */}
        <div className="overflow-hidden pb-4">
          <p className="text-center font-extrabold text-white/7 leading-none tracking-[-9px] select-none"
             style={{ fontSize: "clamp(60px, 15vw, 220px)" }}>
            HUZZLER
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Index() {
  const tickerItems = [
    "Huzzler. Freelance Made Simple",
    "AI-Powered Matching",
    "Ironclad Escrow Protection",
    "48K+ Elite Freelancers",
    "10K+ Tasks Completed",
    "Trusted by Top Teams",
    "World-Class Experts",
    "Fast Delivery. Reliable Results",
  ];

  return (
    <div className="font-sans">
      <HeroSection />
      <Ticker items={tickerItems} />
      <CategoriesSection />
      <WhyHuzzlerSection />
      <ReviewsSection />
      <BlogSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
