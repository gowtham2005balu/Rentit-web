import { useState } from "react";

const TOPIC_TAGS = ["AI", "Freelancing", "Remote Work", "Startups", "Hiring", "Productivity", "Design", "Development"];

const TRENDING = [
  { id: 1, tag: "AI", color: "#2d5a1b", title: "AI Hiring Trends 2026", meta: "6 min · 18.2K views" },
  { id: 2, tag: "Productivity", color: "#1a3a5c", title: "10 Productivity Hacks for Freelancers", meta: "4 min · 14K views" },
  { id: 3, tag: "Remote Work", color: "#1a4a3a", title: "Building a Remote Team That Scales", meta: "7 min · 9.8K views" },
  { id: 4, tag: "Hiring", color: "#3a1a5c", title: "Why Businesses Prefer Freelancers", meta: "5 min · 5.6K views" },
  { id: 5, tag: "Design", color: "#3a3a1a", title: "Future of Design Careers", meta: "6 min · 4.7K views" },
];

const ARTICLES = [
  {
    bg: "linear-gradient(135deg, #4a1a8a 0%, #6a3aaa 100%)",
    label: "The AI Tools Every Freelancer Needs in 2026",
    tag: "AI", tagColor: "#4a90d9",
    title: "10 AI Tools That Will Supercharge Your Freelance Career",
    desc: "From automated proposal writing to AI-powered client matching, these tools are reshaping how freelancers work.",
    author: "Mike Kim", date: "Jun 1 · 8 min", saves: "4.2K",
  },
  {
    bg: "linear-gradient(135deg, #1a7a5a 0%, #2aaa7a 100%)",
    label: "Remote Work Culture Blueprint",
    tag: "Remote Work", tagColor: "#2aaa7a",
    title: "How to Build an Async-First Remote Culture That Actually Works",
    desc: "The companies thriving in remote work aren't doing it by accident. Here's their playbook.",
    author: "Amy Lee", date: "May 28 · 6 min", saves: "5.0K",
  },
  {
    bg: "linear-gradient(135deg, #c04a10 0%, #e06a20 100%)",
    label: "From Freelancer to Founder",
    tag: "Startups", tagColor: "#e06a20",
    title: "How 3 Freelancers Built 7-Figure Agencies in 18 Months",
    desc: "Success stories from the Huzzler community — and the exact strategies they used to scale.",
    author: "Ryan Park", date: "May 28 · 8 min", saves: "5.6K",
  },
  {
    bg: "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 100%)",
    label: "Client Communication Mastery",
    tag: "Hiring", tagColor: "#e06a20",
    title: "The Freelancer's Guide to Landing Premium Clients Consistently",
    desc: "Stop chasing low-paying gigs. Here's how top earners position themselves to attract high-value clients.",
    author: "Julia Torres", date: "May 28 · 7 min", saves: "4.6K",
  },
  {
    bg: "linear-gradient(135deg, #8a7a10 0%, #c0aa20 100%)",
    label: "Design Systems for Freelancers",
    tag: "Design", tagColor: "#c0aa20",
    title: "Why Freelance Designers Are Charging 3x More With Design Systems",
    desc: "Design systems aren't just for big teams. Freelancers using them are commanding premium rates.",
    author: "Dana North", date: "May 28 · 5 min", saves: "5.0K",
  },
  {
    bg: "linear-gradient(135deg, #6a1a8a 0%, #c040c0 100%)",
    label: "Full-Stack Dev Market 2026",
    tag: "Development", tagColor: "#a040d0",
    title: "The Most In-Demand Dev Skills for Freelancers This Year",
    desc: "TypeScript, AI APIs, and serverless architectures are reshaping what clients will pay top dollar for.",
    author: "Chris Moore", date: "May 22 · 7 min", saves: "7.6K",
  },
];

const TagBadge = ({ text, color }: { text: string; color: string }) => (
  <span style={{
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 4,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.3,
  }}>{text}</span>
);

export default function DesignJS() {
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#f5f6fa", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d2b 0%, #1a1060 40%, #2a1a80 70%, #1a0d40 100%)",
        padding: "48px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 32, minHeight: 280,
        position: "relative", overflow: "hidden",
      }}>
        {/* Background circles */}
        <div style={{ position: "absolute", top: -60, right: 300, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #6a3aff33, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: 200, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, #3a1aff22, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 480, zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "#ffffff18", border: "1px solid #ffffff30", borderRadius: 20, padding: "3px 12px", fontSize: 12, color: "#c0b8ff", marginBottom: 16 }}>
            ✦ Huzzler Insights
          </div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: 800, lineHeight: 1.15, margin: "0 0 14px", letterSpacing: -0.5 }}>
            The Future of<br />Freelancing, AI &<br />Remote Work
          </h1>
          <p style={{ color: "#b0aacc", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
            Actionable insights, hiring trends, productivity guides, freelance success stories, AI workflows, and expert advice.
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <input placeholder="Search articles, guides, more..." style={{
              background: "#ffffff18", border: "1px solid #ffffff30", borderRadius: 8,
              padding: "9px 14px", color: "#fff", fontSize: 13, width: 240, outline: "none",
            }} />
            <button style={{ background: "#7c5fff", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Search</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TOPIC_TAGS.map(t => (
              <span key={t} style={{ background: "#ffffff15", border: "1px solid #ffffff25", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#c0b8ff", cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Featured card */}
        <div style={{ width: 260, zIndex: 1 }}>
          <div style={{ background: "#c8b8ff", borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1060", marginBottom: 4 }}>AI Hiring 2026</div>
            <div style={{ fontSize: 11, color: "#5a4a99" }}>The definitive guide</div>
          </div>
          <div style={{ background: "#ffffff12", border: "1px solid #ffffff20", borderRadius: 12, padding: "14px 16px" }}>
            <span style={{ background: "#2aaa7a22", color: "#2aaa7a", border: "1px solid #2aaa7a44", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 600 }}>AI & Freelancing</span>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", margin: "10px 0 8px", lineHeight: 1.4 }}>
              How AI Is Transforming Freelance Hiring in 2026
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#5b4fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>SJ</div>
              <div>
                <div style={{ fontSize: 11, color: "#c0b8ff", fontWeight: 600 }}>Sarah Johnson</div>
                <div style={{ fontSize: 10, color: "#8880aa" }}>Senior Editor · Huzzler</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#8880aa", marginTop: 8 }}>✦ 8 min read · ⊙ 10.5K views</div>
          </div>
        </div>
      </div>

      {/* TRENDING */}
      <div style={{ background: "#fff", padding: "28px 32px", borderBottom: "1px solid #e8e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>🔥 Trending Now</span>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>What the community is reading this week</div>
          </div>
          <a href="#" style={{ fontSize: 13, color: "#5b4fff", textDecoration: "none", fontWeight: 500 }}>View all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {TRENDING.map((item, i) => (
            <div key={item.id} style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer" }}>
              <div style={{ background: item.color, height: 120, position: "relative", display: "flex", alignItems: "flex-start", padding: 10 }}>
                <span style={{ position: "absolute", top: 8, right: 10, fontSize: 11, color: "#ffffff80", fontWeight: 700 }}>{i + 1}</span>
                <span style={{ background: "#ffffff20", border: "1px solid #ffffff30", borderRadius: 4, padding: "2px 8px", fontSize: 10, color: "#fff", fontWeight: 600 }}>{item.tag}</span>
              </div>
              <div style={{ padding: "10px 0 4px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 4, lineHeight: 1.4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "#999" }}>{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <div style={{ padding: "32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>Latest Articles</span>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>Fresh perspectives from our editorial team</div>
          </div>
          <a href="#" style={{ fontSize: 13, color: "#5b4fff", textDecoration: "none", fontWeight: 500 }}>See all articles →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {ARTICLES.map((a, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px #00000010", cursor: "pointer", transition: "transform 0.2s", }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ background: a.bg, height: 140, position: "relative", display: "flex", alignItems: "flex-end", padding: "12px 14px" }}>
                <span style={{ fontSize: 12, color: "#ffffffcc", fontWeight: 600 }}>{a.label}</span>
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <TagBadge text={a.tag} color={a.tagColor} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: "10px 0 6px", lineHeight: 1.45 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.55, marginBottom: 14 }}>{a.desc}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #5b4fff, #a040d0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>
                      {a.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#333" }}>{a.author}</div>
                      <div style={{ fontSize: 10, color: "#999" }}>{a.date}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "#999" }}>🔖 {a.saves}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
