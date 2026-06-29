import { useState } from "react";

const navLinks = ["Home", "Browse Work", "How It Works", "Services", "Pricing", "Blog", "About", "Contact"];

const categories = [
  { id: "all", label: "All Topics" },
  { id: "getting-started", label: "Getting Started" },
  { id: "for-freelancers", label: "For Freelancers" },
  { id: "for-businesses", label: "For Businesses" },
  { id: "payments", label: "Payments & Billing" },
  { id: "account", label: "Account & Security" },
];

const faqSections = [
  {
    id: "getting-started",
    label: "Getting Started",
    color: "#7c3aed",
    questions: [
      "What is Huzzler AI?",
      "How do I hire a freelancer on Huzzler?",
      "Is Huzzler free to join?",
      "How quickly can I hire talent after posting a project?",
    ],
  },
  {
    id: "for-freelancers",
    label: "For Freelancers",
    color: "#7c3aed",
    questions: [
      "How do I create a standout freelancer profile?",
      "How do I receive payments as a freelancer?",
      "How do I submit a winning proposal?",
      "How does the AI matching system work for freelancers?",
      "How can I improve my visibility on the platform?",
      "How do I craft a compelling proposal?",
      "How does the AI matching system work for freelancers?",
      "How can I improve my visibility on the platform?",
    ],
  },
  {
    id: "for-businesses",
    label: "For Businesses",
    color: "#7c3aed",
    questions: [
      "How do I post a project effectively?",
      "How does freelancer verification work?",
      "Can I invite specific freelancers to my project?",
      "How are payments protected?",
      "Can I manage multiple projects simultaneously?",
    ],
  },
  {
    id: "payments",
    label: "Payments & Billing",
    color: "#7c3aed",
    questions: [
      "What payment methods does Huzzler support?",
      "Are there any fees on Huzzler Hustle?",
      "What is the Huzzler Charge?",
      "Can I download business and payment invoices?",
    ],
  },
  {
    id: "account",
    label: "Account & Security",
    color: "#7c3aed",
    questions: [
      "How do I reset my password?",
      "How is my personal data protected?",
      "Can I enable two-factor authentication?",
      "How do I delete my account?",
      "How do I update my profile information?",
    ],
  },
];

const helpCategories = [
  {
    icon: "👨‍💼",
    label: "Getting Started",
    color: "#e8e4ff",
    desc: "New to the platform? Find everything you need to get started and start hiring or finding your first gig.",
    tag: "Explore",
  },
  {
    icon: "💳",
    label: "Payments & Billing",
    color: "#d1fae5",
    desc: "Get clarity on payment processes, fee structures, and managing your financial transactions securely.",
    tag: "Explore",
  },
  {
    icon: "🤖",
    label: "AI Assistant",
    color: "#cffafe",
    desc: "Discover how our intelligent AI tools can help you match with the right freelancers or clients effortlessly.",
    tag: "Explore",
  },
  {
    icon: "🔒",
    label: "Account & Security",
    color: "#dbeafe",
    desc: "Learn how to keep your account safe, manage settings, and protect your personal information.",
    tag: "Explore",
  },
  {
    icon: "📁",
    label: "Project Management",
    color: "#fef9c3",
    desc: "Find out how to create, manage, and track your projects from start to finish with ease on the platform.",
    tag: "Explore",
  },
  {
    icon: "📞",
    label: "Customer Support",
    color: "#ffe4e6",
    desc: "Need direct help? Learn how to reach our support team and what to expect when you contact us.",
    tag: "Explore",
  },
];

const aiCards = [
  { q: "What can the AI Assistant do?", desc: "Our AI assistant can help you navigate the platform, manage projects, and answer your questions instantly, anytime.", color: "#4f46e5", tag: "Assistant" },
  { q: "Can AI write project descriptions for me?", desc: "Yes! Our AI can generate compelling project briefs based on your requirements, saving you time and effort.", color: "#7c3aed", tag: "Content" },
  { q: "Can AI recommend the right freelancers?", desc: "Absolutely. Our smart matching engine evaluates skills, reviews, and past work to suggest the best candidates.", color: "#6d28d9", tag: "Matching" },
  { q: "Does AI help manage active proposals?", desc: "Yes, the AI tracks proposal status, sends reminders, and helps you compare applicants side by side.", color: "#5b21b6", tag: "Proposals" },
  { q: "Can AI assist with project management?", desc: "From setting milestones to tracking deliverables, our AI keeps your projects organized and on schedule.", color: "#4338ca", tag: "Projects" },
  { q: "Is this AI available 24/7?", desc: "Yes! Our AI Assistant is always on, giving you instant support and answers whenever you need them.", color: "#6366f1", tag: "Support" },
];

const supportOptions = [
  { icon: "💬", label: "Live Chat", desc: "Get instant answers from our support team through live chat available during business hours.", cta: "Start Chat" },
  { icon: "📧", label: "Email Support", desc: "Send us a detailed message and our team will respond within 24 hours with a resolution.", cta: "Send Email" },
  { icon: "📞", label: "Schedule a Call", desc: "Book a one-on-one call with a support specialist for complex issues or onboarding help.", cta: "Book Now" },
  { icon: "📚", label: "Knowledge Base", desc: "Browse our library of guides, tutorials, and documentation for self-paced learning.", cta: "Explore Docs" },
];

const communityCards = [
  { icon: "💬", label: "Community Forum", bg: "#e8e4ff", desc: "Join discussions with thousands of freelancers and clients sharing tips, experiences, and advice." },
  { icon: "✏️", label: "Freelancer Events", bg: "#d1fae5", desc: "Attend live webinars, workshops, and networking events designed to grow your freelance career." },
  { icon: "🌐", label: "Resource Hub", bg: "#cffafe", desc: "Access templates, guides, and tools curated to help freelancers and businesses succeed." },
  { icon: "🔗", label: "Learning Bonus", bg: "#fef9c3", desc: "Unlock exclusive learning content and courses to sharpen your skills and grow your income." },
];

function AccordionItem({ question }: { question: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ borderBottom: "1px solid #e5e7eb", padding: "14px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{question}</span>
      <span style={{ color: "#9ca3af", fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{open ? "−" : "+"}</span>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSections = activeCategory === "all" ? faqSections : faqSections.filter(s => s.id === activeCategory);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#111", background: "#fff" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)", padding: "48px 40px", display: "flex", gap: 32, alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ background: "rgba(139,92,246,0.3)", color: "#c4b5fd", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 4, display: "inline-block", marginBottom: 16, letterSpacing: "0.08em" }}>HELP CENTER</div>
          <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 800, lineHeight: 1.15, margin: "0 0 12px" }}>
            Frequently<br /><span style={{ color: "#a78bfa" }}>Asked Questions</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 24px", lineHeight: 1.6 }}>
            Everything you need to know about hiring freelancers, managing payments, protection of finances, and growing your business with Huzzler.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <input placeholder="Search for answers and more..." style={{ flex: 1, padding: "9px 14px", borderRadius: 7, border: "1px solid #4f46e5", background: "rgba(255,255,255,0.08)", color: "#e2e8f0", fontSize: 12, outline: "none" }} />
            <button style={{ background: "#7c3aed", color: "#fff", border: "none", borderRadius: 7, padding: "9px 18px", fontWeight: 600, fontSize: 12, cursor: "pointer" }}>Search</button>
          </div>
        </div>

        {/* Stats Card */}
        <div style={{ width: 220, background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ color: "#c4b5fd", fontSize: 11, fontWeight: 600, marginBottom: 14 }}>Account Billing</div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
            <div style={{ color: "#94a3b8", fontSize: 10, marginBottom: 4 }}>Username or Password</div>
            <div style={{ height: 6, background: "rgba(139,92,246,0.4)", borderRadius: 3 }} />
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "10px 12px", marginBottom: 14 }}>
            <div style={{ color: "#94a3b8", fontSize: 10, marginBottom: 4 }}>Verified Professionals</div>
            <div style={{ height: 6, background: "rgba(16,185,129,0.4)", borderRadius: 3 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["500k+", "Freelancers"], ["180+", "Countries"], ["4.9★", "Rating"], ["24/7", "Support"]].map(([v, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14 }}>{v}</div>
                <div style={{ color: "#64748b", fontSize: 9 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What can we help */}
      <div style={{ padding: "48px 40px 32px", textAlign: "center" }}>
        <div style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>COMMON HELP</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>What can we <span style={{ color: "#7c3aed" }}>help you with?</span></h2>
        <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 32px" }}>Select a category for the answer you need — navigating Huzzler is simplified & beyond.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {helpCategories.map(c => (
            <div key={c.label} style={{ background: c.color, borderRadius: 12, padding: "20px", textAlign: "left", cursor: "pointer", position: "relative" }}>
              <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.06)", color: "#374151", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>{c.tag}</div>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: "#111" }}>{c.label}</div>
              <div style={{ color: "#374151", fontSize: 12, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse All Answers */}
      <div style={{ padding: "40px", background: "#f8f8ff" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>ALL ANSWERS</div>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>Browse <span style={{ color: "#7c3aed" }}>all answers</span></h2>
          <p style={{ color: "#6b7280", fontSize: 13 }}>Organized by topic for easy navigation. Use the sidebar to jump to any category.</p>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          {/* Sidebar */}
          <div style={{ width: 200, flexShrink: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 12, color: "#374151", marginBottom: 8 }}>Browse Account</div>
            {categories.map(c => (
              <div key={c.id} onClick={() => setActiveCategory(c.id)} style={{ padding: "8px 12px", borderRadius: 7, cursor: "pointer", fontSize: 12, fontWeight: activeCategory === c.id ? 700 : 400, background: activeCategory === c.id ? "#ede9fe" : "transparent", color: activeCategory === c.id ? "#7c3aed" : "#6b7280", marginBottom: 2 }}>
                {c.label}
              </div>
            ))}
          </div>

          {/* FAQ List */}
          <div style={{ flex: 1 }}>
            {filteredSections.map(section => (
              <div key={section.id} style={{ marginBottom: 28 }}>
                <div style={{ color: section.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>#{section.label}</div>
                <div style={{ background: "#fff", borderRadius: 10, padding: "0 16px", border: "1px solid #e5e7eb" }}>
                  {section.questions.map((q, i) => <AccordionItem key={i} question={q} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div style={{ padding: "48px 40px", textAlign: "center" }}>
        <div style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>AI ASSISTANT</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>Huzzler <span style={{ color: "#7c3aed" }}>AI Assistant</span></h2>
        <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 32 }}>Our intelligent assistant is ready for project management, and smart advice.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {aiCards.map((c, i) => (
            <div key={i} style={{ background: `linear-gradient(135deg, ${c.color}dd, ${c.color}99)`, borderRadius: 12, padding: "20px", textAlign: "left", position: "relative" }}>
              <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>{c.tag}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 8px", lineHeight: 1.4 }}>{c.q}</div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Options */}
      <div style={{ padding: "48px 40px", background: "#f8f8ff", textAlign: "center" }}>
        <div style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>SUPPORT</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 32px" }}>Get <span style={{ color: "#7c3aed" }}>in touch</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {supportOptions.map(s => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: "24px 18px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{s.label}</div>
              <div style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.5, marginBottom: 16 }}>{s.desc}</div>
              <button style={{ background: "#7c3aed", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", width: "100%" }}>{s.cta}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Community */}
      <div style={{ padding: "48px 40px", textAlign: "center" }}>
        <div style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>COMMUNITY</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 32px" }}>Join our <span style={{ color: "#7c3aed" }}>community</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {communityCards.map(c => (
            <div key={c.label} style={{ background: c.bg, borderRadius: 12, padding: "24px 18px", textAlign: "left", cursor: "pointer" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: "#111" }}>{c.label}</div>
              <div style={{ color: "#374151", fontSize: 12, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#1a1a2e", color: "#fff", padding: "40px", textAlign: "center" }}>
        <div style={{ fontSize: 14, marginBottom: 8 }}>© 2026 Huzzler. All rights reserved.</div>
        <div style={{ fontSize: 12, color: "#999" }}>Unified application merging all Huzzler pages.</div>
      </div>
    </div>
  );
}
