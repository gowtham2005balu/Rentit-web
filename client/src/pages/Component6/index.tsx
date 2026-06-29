import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// ─── DATA ────────────────────────────────────────────────────────────────────
const contentPerfData = [
  { m: "Jan", views: 40, reads: 32, shares: 20, comments: 10 },
  { m: "Feb", views: 45, reads: 36, shares: 22, comments: 12 },
  { m: "Mar", views: 50, reads: 40, shares: 25, comments: 15 },
  { m: "Apr", views: 55, reads: 44, shares: 28, comments: 18 },
  { m: "May", views: 60, reads: 50, shares: 30, comments: 20 },
  { m: "Jun", views: 65, reads: 55, shares: 35, comments: 22 },
  { m: "Jul", views: 70, reads: 60, shares: 38, comments: 24 },
  { m: "Aug", views: 68, reads: 58, shares: 36, comments: 23 },
  { m: "Sep", views: 72, reads: 62, shares: 40, comments: 26 },
  { m: "Oct", views: 75, reads: 65, shares: 42, comments: 28 },
  { m: "Nov", views: 78, reads: 68, shares: 45, comments: 30 },
  { m: "Dec", views: 82, reads: 72, shares: 48, comments: 32 },
];

const trafficSources = [
  { name: "Organic Search", value: 43, color: "#6366f1" },
  { name: "Social Media", value: 28, color: "#f59e0b" },
  { name: "Direct", value: 20, color: "#10b981" },
  { name: "Referral", value: 6, color: "#3b82f6" },
  { name: "Other", value: 3, color: "#8b5cf6" },
];

const topArticles = [
  { title: "How AI Is Transforming Freelance Hiring", tag: "AI", tagColor: "#6366f1", author: "Sarah Johnson", views: "12.5K", reads: "8.2K", bar: 85 },
  { title: "Building Async-First Remote Culture", tag: "Remote Work", tagColor: "#10b981", author: "Amy Lee", views: "9.8K", reads: "6.1K", bar: 70 },
];

const topPerformingArticles = [
  { title: "How AI Is Transforming Freelance Hiring", tag: "AI", tagColor: "#6366f1", author: "Sarah Johnson", views: "12.5K", reads: 8.2, bar: 85 },
  { title: "Building Async-First Remote Culture", tag: "Remote Work", tagColor: "#10b981", author: "Amy Lee", views: "9.8K", reads: 6.1, bar: 70 },
  { title: "10 AI Tools Every Freelancer Needs in 2026", tag: "Productivity", tagColor: "#f59e0b", author: "Chris Moore", views: "8.4K", reads: 5.5, bar: 60 },
  { title: "How 3 Freelancers Built 7-Figure Agencies", tag: "Startups", tagColor: "#f97316", author: "Ryan Park", views: "7.2K", reads: 4.8, bar: 55 },
  { title: "Hiring Anyone: Senior Complete Guide", tag: "Hiring", tagColor: "#ec4899", author: "Julia Torres", views: "6.1K", reads: 4.0, bar: 48 },
  { title: "Design Trends Reshaping SaaS Products", tag: "Design", tagColor: "#8b5cf6", author: "Alex Chen", views: "5.8K", reads: 3.8, bar: 45 },
  { title: "Startup Funding in 2026 Blueprint", tag: "Startups", tagColor: "#f97316", author: "Mike Kim", views: "5.2K", reads: 3.2, bar: 40 },
  { title: "Remote Working Best Practices", tag: "Remote Work", tagColor: "#10b981", author: "Dana North", views: "4.8K", reads: 2.9, bar: 36 },
  { title: "Premium Client Acquisition Guide", tag: "Hiring", tagColor: "#ec4899", author: "Sarah Johnson", views: "4.2K", reads: 2.5, bar: 30 },
];

const recentArticles = [
  { title: "How AI Is Transforming Freelancers", tag: "AI", tagColor: "#6366f1", author: "Sarah Johnson", status: "Published", statusColor: "#10b981", views: "12.4K", comments: 41, saves: 35 },
  { title: "Building Async-First Remote Culture", tag: "Remote Work", tagColor: "#10b981", author: "Amy Lee", status: "Published", statusColor: "#10b981", views: "9.8K", comments: 28, saves: 22 },
  { title: "How 3 Freelancers Built 7 Figure", tag: "Startups", tagColor: "#f97316", author: "Ryan Park", status: "Scheduled", statusColor: "#f59e0b", views: "7.2K", comments: 19, saves: 15 },
  { title: "Premium Client Acquisition Guide", tag: "Hiring", tagColor: "#ec4899", author: "Julia Torres", status: "Draft", statusColor: "#6b7280", views: "—", comments: 0, saves: 0 },
  { title: "Most In-Demand Dev Skills 2026", tag: "Dev", tagColor: "#3b82f6", author: "Chris Moore", status: "Published", statusColor: "#10b981", views: "5.1K", comments: 14, saves: 11 },
];

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

const authorLeaderboard = [
  { name: "Sarah Johnson", revenue: "$8,500", bar: 90, color: "#6366f1" },
  { name: "Amy Lee", revenue: "$7,921", bar: 82, color: "#10b981" },
  { name: "Chris Moore", revenue: "$6,832", bar: 70, color: "#f59e0b" },
  { name: "Ryan Park", revenue: "$6,214", bar: 65, color: "#f97316" },
  { name: "Julia Torres", revenue: "$5,340", bar: 55, color: "#ec4899" },
];

const categoryAnalytics = [
  { name: "AI", articles: 24, color: "#6366f1", bar: 90 },
  { name: "Freelancing", articles: 18, color: "#10b981", bar: 70 },
  { name: "Startups", articles: 15, color: "#f97316", bar: 60 },
  { name: "Hiring", articles: 13, color: "#ec4899", bar: 52 },
  { name: "Remote", articles: 29, color: "#3b82f6", bar: 78 },
  { name: "Design", articles: 11, color: "#8b5cf6", bar: 44 },
  { name: "Dev", articles: 9, color: "#f59e0b", bar: 36 },
];

const subscriberData = [
  { m: "Jan", v: 800 }, { m: "Feb", v: 1200 }, { m: "Mar", v: 950 },
  { m: "Apr", v: 1400 }, { m: "May", v: 1100 }, { m: "Jun", v: 1600 },
  { m: "Jul", v: 1300 }, { m: "Aug", v: 1800 }, { m: "Sep", v: 1500 },
  { m: "Oct", v: 2100 }, { m: "Nov", v: 1900 }, { m: "Dec", v: 2400 },
];

const recentActivity = [
  { type: "Article Published", detail: "How AI Is Transforming... went live", time: "2 min ago", icon: "📄", color: "#6366f1" },
  { type: "Comment Received", detail: "New comment on Remote Culture post", time: "14 min ago", icon: "💬", color: "#10b981" },
  { type: "Subscriber Milestone", detail: "1.4M subscribers reached!", time: "1 hr ago", icon: "🎉", color: "#f59e0b" },
  { type: "Category Added", detail: "New category: AI Workflows created", time: "3 hrs ago", icon: "🏷️", color: "#8b5cf6" },
  { type: "Article Published", detail: "Design Trends 2026 is now live", time: "5 hrs ago", icon: "📄", color: "#6366f1" },
];

const comments = [
  { user: "Dan Morgan", tag: "Remote Work", tags: ["Remote Work", "Tech", "Hiring"], text: "This is really insightful — the async tips have changed how my entire team operates!", time: "Published", color: "#10b981" },
  { user: "James Dawson", tag: "Startups", tags: ["Startups", "Hiring"], text: "I've been following Huzzler for a while and this article on addressing enterprise clients is spot on!", time: "Review", color: "#f59e0b" },
  { user: "Priya Gupta", tag: "Design", tags: ["Design", "Tech", "Creative"], text: "Did you know the entire Huzzler site was redesigned in a week? It's so clean and so focused.", time: "Published", color: "#10b981" },
  { user: "Tom Collins", tag: "Startups", tags: ["Approved", "Tech", "Delete"], text: "Reached out to the creator and they're giving a talk about the Top 10 Tools for 7-Figure income...", time: "Rejected", color: "#ef4444" },
];

const notifications = [
  { text: "New subscriber milestone — 14,000 reached!", icon: "🎉", time: "Just now", color: "#f59e0b" },
  { text: "Ryan Park submitted Your Freelancer — for review", icon: "📋", time: "5 min ago", color: "#6366f1" },
  { text: "API rate-limit warning — 87% usage this hour", icon: "⚠️", time: "22 min ago", color: "#ef4444" },
  { text: "Scheduled post published: How to Increase Your ROI", icon: "✅", time: "1 hr ago", color: "#10b981" },
  { text: "Monthly revenue report ready — $34,000 total", icon: "📊", time: "3 hrs ago", color: "#3b82f6" },
];

const aiInsights = [
  { label: "TOP ARTICLE", title: "How AI Is Transforming...", detail: "4 articles from Computing the Scale beat benchmarks this week", icon: "🔥", color: "#6366f1" },
  { label: "ENGAGEMENT CONCERN", title: "Engagement Dropped", detail: "3 articles show lower-than-normal performing with shorter read times", icon: "📉", color: "#f59e0b" },
  { label: "BEST POSTING TIME", title: "Best Posting Time", detail: "Tuesday & Thu 9 AM and Thursday 1-4pm EST are optimal", icon: "⏰", color: "#10b981" },
  { label: "GROWTH TIP", title: "Category Opportunity", detail: "AI from this week — 87% and Freelancers vs 1 April CPC — AI!", icon: "📈", color: "#f97316" },
  { label: "CONTENT ALERT", title: "Content Alert", detail: "Articles categorised in the areas that perform 50% stronger returns this time", icon: "🔔", color: "#8b5cf6" },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────
const TagPill = ({ text, color = "#6366f1" }: { text: string; color?: string }) => (
  <span style={{ background: color + "20", color, border: `1px solid ${color}40`, borderRadius: 4, padding: "2px 8px", fontSize: 10, fontWeight: 600, whiteSpace: "nowrap" }}>{text}</span>
);

const StatCard = ({ icon, label, value, delta, positive = true, hasChart = false, chartData = [] }: { icon: string; label: string; value: string | number; delta: string; positive?: boolean; hasChart?: boolean; chartData?: any[] }) => (
  <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", flex: 1, minWidth: 0, border: "1px solid #e8e8f5" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>{value}</div>
        <div style={{ fontSize: 11, color: positive ? "#10b981" : "#ef4444", marginTop: 4 }}>{delta}</div>
      </div>
      <span style={{ fontSize: 20 }}>{icon}</span>
    </div>
    {hasChart && chartData.length > 0 && (
      <div style={{ marginTop: 12, height: 40 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="v" stroke={positive ? "#10b981" : "#ef4444"} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )}
  </div>
);

const sideLinks = [
  { icon: "🏠", label: "Dashboard", active: true },
  { icon: "📄", label: "Articles" },
  { icon: "🏷️", label: "Categories" },
  { icon: "👥", label: "Authors" },
  { icon: "💬", label: "Comments" },
  { icon: "📧", label: "Newsletter" },
  { icon: "🔍", label: "SEO" },
  { icon: "📊", label: "Analytics" },
  { icon: "⚙️", label: "Settings" },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function HuzzlerDashboard() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Inter','Segoe UI',sans-serif", background: "#f4f5fb", color: "#1a1a2e", fontSize: 13 }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width: 200, background: "#0f0f2e", display: "flex", flexDirection: "column", padding: "20px 0", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "0 18px 24px", borderBottom: "1px solid #ffffff15" }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>✦ Huzzler CMS</div>
        </div>
        <nav style={{ flex: 1, padding: "16px 10px" }}>
          {sideLinks.map((l, i) => (
            <div key={l.label} onClick={() => setActiveNav(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, marginBottom: 4, cursor: "pointer", background: activeNav === i ? "#6366f120" : "transparent", color: activeNav === i ? "#818cf8" : "#9090c0" }}>
              <span style={{ fontSize: 14 }}>{l.icon}</span>
              <span style={{ fontSize: 12, fontWeight: activeNav === i ? 600 : 400 }}>{l.label}</span>
            </div>
          ))}
        </nav>
        <div style={{ padding: "0 18px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>AD</div>
            <div>
              <div style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>Admin</div>
              <div style={{ color: "#6060a0", fontSize: 10 }}>Super Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, overflow: "auto" }}>

        {/* TOP BAR */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8e8f5", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Good Morning, 👋</div>
            <div style={{ fontSize: 11, color: "#888" }}>Here's what's happening with your blog today</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <input placeholder="Search anything..." style={{ background: "#f4f5fb", border: "1px solid #e0e0f0", borderRadius: 8, padding: "7px 14px", fontSize: 12, width: 200, outline: "none" }} />
            <span style={{ fontSize: 18 }}>🔔</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>AD</div>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Admin</span>
            </div>
            <button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>+ Create Post</button>
          </div>
        </div>

        <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}>

          {/* ── STAT CARDS ROW ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) 1fr 1fr 1fr", gap: 14 }}>
            <StatCard icon="👁️" label="Total Views" value="247" delta="▲ 12.5% vs last month" positive hasChart chartData={subscriberData.slice(0,8).map(d=>({v:d.v/30}))} />
            <StatCard icon="📰" label="Total Articles" value="1.4M" delta="▲ 8.3% vs last month" positive hasChart chartData={subscriberData.map(d=>({v:d.v/40}))} />
            <StatCard icon="👥" label="Subscribers" value="14.2K" delta="▲ 5.2% vs last month" positive hasChart chartData={subscriberData.map(d=>({v:d.v/35}))} />
            <StatCard icon="📈" label="Engagement Rate" value="8.4%" delta="▼ 1.2% vs last month" positive={false} hasChart chartData={subscriberData.map(d=>({v:d.v/50}))} />
            <StatCard icon="📝" label="Drafts" value="32" delta="▲ 4 new drafts" positive />
            <StatCard icon="⭐" label="Avg. Rating" value="7" delta="▲ 0.3 this month" positive />
          </div>

          {/* ── CONTENT PERFORMANCE + TRAFFIC ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Content Performance</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Views, reads, shares & comments over time</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["Daily", "Weekly", "Monthly"].map(t => (
                    <button key={t} style={{ background: t === "Monthly" ? "#6366f1" : "#f4f5fb", color: t === "Monthly" ? "#fff" : "#666", border: "none", borderRadius: 6, padding: "4px 10px", fontSize: 11, cursor: "pointer" }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, marginBottom: 10, fontSize: 11 }}>
                {[{ label: "Views", color: "#6366f1" }, { label: "Reads", color: "#10b981" }, { label: "Shares", color: "#f59e0b" }, { label: "Comments", color: "#f97316" }].map(l => (
                  <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 12, height: 3, borderRadius: 2, background: l.color, display: "inline-block" }} />
                    <span style={{ color: "#666" }}>{l.label}</span>
                  </span>
                ))}
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={contentPerfData}>
                  <XAxis dataKey="m" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <Line type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} dot={false} fill="#6366f110" />
                  <Line type="monotone" dataKey="reads" stroke="#10b981" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="shares" stroke="#f59e0b" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="comments" stroke="#f97316" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Traffic Sources</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Where your readers come from</div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                <PieChart width={130} height={130}>
                  <Pie data={trafficSources} cx={60} cy={60} innerRadius={38} outerRadius={60} dataKey="value" stroke="none">
                    {trafficSources.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                </PieChart>
              </div>
              {trafficSources.map(s => (
                <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                    <span style={{ fontSize: 11, color: "#444" }}>{s.name}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#333" }}>{s.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── TOP PERFORMING ARTICLES (2 rows) ── */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e8f5" }}>
            <div style={{ padding: "16px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Top Performing Articles</div>
                <div style={{ fontSize: 11, color: "#888" }}>Best performing articles this month</div>
              </div>
              <button style={{ background: "#f4f5fb", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 11, cursor: "pointer" }}>Export</button>
            </div>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 100px 100px 80px 80px 160px 60px", gap: 8, padding: "8px 20px", background: "#f8f8fd", fontSize: 10, color: "#888", fontWeight: 600, borderTop: "1px solid #f0f0f8" }}>
              <span>ARTICLE</span><span>CATEGORY</span><span>AUTHOR</span><span>VIEWS</span><span>READS</span><span>PERFORMANCE</span><span></span>
            </div>
            {topPerformingArticles.map((a, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 100px 100px 80px 80px 160px 60px", gap: 8, padding: "10px 20px", alignItems: "center", borderTop: "1px solid #f4f4fb" }}>
                <div style={{ fontWeight: 500, fontSize: 12, color: "#1a1a2e" }}>{a.title}</div>
                <TagPill text={a.tag} color={a.tagColor} />
                <span style={{ fontSize: 11, color: "#666" }}>{a.author}</span>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{a.views}</span>
                <span style={{ fontSize: 12, color: "#888" }}>{a.reads}K</span>
                <div style={{ height: 6, background: "#f0f0f8", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${a.bar}%`, height: "100%", background: a.tagColor, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 11, color: a.tagColor, fontWeight: 600 }}>{a.bar}%</span>
              </div>
            ))}
          </div>

          {/* ── RECENT ARTICLES ── */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e8f5" }}>
            <div style={{ padding: "16px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Recent Articles</div>
                <div style={{ fontSize: 11, color: "#888" }}>Latest content published by your team</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ background: "#f4f5fb", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 11, cursor: "pointer" }}>Export</button>
                <button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 11, cursor: "pointer" }}>+ Add</button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 90px 100px 80px 70px 70px 70px 80px", gap: 8, padding: "8px 20px", background: "#f8f8fd", fontSize: 10, color: "#888", fontWeight: 600, borderTop: "1px solid #f0f0f8" }}>
              <span>TITLE</span><span>CATEGORY</span><span>AUTHOR</span><span>STATUS</span><span>VIEWS</span><span>CMTS</span><span>SAVES</span><span>ACTIONS</span>
            </div>
            {recentArticles.map((a, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 90px 100px 80px 70px 70px 70px 80px", gap: 8, padding: "10px 20px", alignItems: "center", borderTop: "1px solid #f4f4fb" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: a.tagColor + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>📄</div>
                  <span style={{ fontWeight: 500, fontSize: 12 }}>{a.title}</span>
                </div>
                <TagPill text={a.tag} color={a.tagColor} />
                <span style={{ fontSize: 11, color: "#666" }}>{a.author}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: a.statusColor }}>{a.status}</span>
                <span style={{ fontSize: 11, fontWeight: 600 }}>{a.views}</span>
                <span style={{ fontSize: 11, color: "#888" }}>{a.comments}</span>
                <span style={{ fontSize: 11, color: "#888" }}>{a.saves}</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <button style={{ background: "#f4f5fb", border: "none", borderRadius: 4, padding: "3px 8px", fontSize: 10, cursor: "pointer" }}>Edit</button>
                  <button style={{ background: "#fff0f0", color: "#ef4444", border: "none", borderRadius: 4, padding: "3px 8px", fontSize: 10, cursor: "pointer" }}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          {/* ── CONTENT STATUS + PUBLISHING CALENDAR ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Content Status</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 16 }}>Current pipeline overview</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: "✏️", label: "Drafts", value: 18, sub: "In progress", bg: "#fff9ed", iconBg: "#f59e0b" },
                  { icon: "🔍", label: "In Review", value: 7, sub: "Pending approval", bg: "#fdf4ff", iconBg: "#a855f7" },
                  { icon: "✅", label: "Published", value: 12, sub: "This month", bg: "#f0fdf4", iconBg: "#10b981" },
                  { icon: "📅", label: "Scheduled", value: 210, sub: "Across all authors", bg: "#eff6ff", iconBg: "#3b82f6" },
                ].map(s => (
                  <div key={s.label} style={{ background: s.bg, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{s.icon}</div>
                      <span style={{ fontSize: 11, color: "#666" }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e" }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Publishing Calendar</div>
                <span style={{ fontSize: 11, color: "#6366f1", fontWeight: 600 }}>June 2026</span>
              </div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 12 }}>Scheduled content this month</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                {["S","M","T","W","T","F","S"].map((d, i) => <div key={i} style={{ textAlign: "center", fontSize: 10, color: "#999", fontWeight: 600, padding: "4px 0" }}>{d}</div>)}
                {[null, null, null].map((_, i) => <div key={"e"+i} />)}
                {calendarDays.map(d => (
                  <div key={d} style={{ textAlign: "center", fontSize: 11, padding: "5px 2px", borderRadius: 6, cursor: "pointer",
                    background: d === 15 ? "#6366f1" : d === 8 || d === 22 ? "#10b98120" : "transparent",
                    color: d === 15 ? "#fff" : d === 8 || d === 22 ? "#10b981" : "#555",
                    fontWeight: d === 15 ? 700 : 400,
                    border: d === 23 ? "1px solid #6366f1" : "none"
                  }}>{d}</div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 14, fontSize: 10 }}>
                {[{ color: "#6366f1", label: "Published" }, { color: "#10b981", label: "Scheduled" }, { color: "#f59e0b", label: "Drafts" }].map(l => (
                  <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: l.color, display: "inline-block" }} />
                    <span style={{ color: "#888" }}>{l.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── AUTHOR LEADERBOARD + CATEGORY ANALYTICS ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Author Leaderboard</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Top contributors this month</div>
              {authorLeaderboard.map((a, i) => (
                <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: a.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                    {a.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{a.name}</span>
                      <span style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>{a.revenue}</span>
                    </div>
                    <div style={{ height: 5, background: "#f0f0f8", borderRadius: 3 }}>
                      <div style={{ width: `${a.bar}%`, height: "100%", background: a.color, borderRadius: 3 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Category Analytics</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Performance by category</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {categoryAnalytics.map(c => (
                  <div key={c.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{c.name}</span>
                      <span style={{ fontSize: 11, color: "#888" }}>{c.articles} articles</span>
                    </div>
                    <div style={{ height: 5, background: "#f0f0f8", borderRadius: 3 }}>
                      <div style={{ width: `${c.bar}%`, height: "100%", background: c.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SUBSCRIBER GROWTH + RECENT ACTIVITY ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Subscriber Growth</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Monthly new subscribers</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["▲ New", "▼ Churned"].map((t, i) => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: i === 0 ? "#6366f1" : "#ef4444" }}>
                      <span style={{ width: 10, height: 3, borderRadius: 2, background: i === 0 ? "#6366f1" : "#ef4444", display: "inline-block" }} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={subscriberData} barSize={18}>
                  <XAxis dataKey="m" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <Bar dataKey="v" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Recent Activity</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Latest actions across your blog</div>
              {recentActivity.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: a.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e" }}>{a.type}</div>
                    <div style={{ fontSize: 11, color: "#777", lineHeight: 1.4 }}>{a.detail}</div>
                    <div style={{ fontSize: 10, color: "#bbb", marginTop: 2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── QUICK ACTIONS ── */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Quick Actions</div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Shortcuts to your workflow</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
              {[
                { label: "Create Article", icon: "📝", color: "#6366f120", iconColor: "#6366f1" },
                { label: "Manage Categories", icon: "🏷️", color: "#f59e0b20", iconColor: "#f59e0b" },
                { label: "Upload Media", icon: "🖼️", color: "#10b98120", iconColor: "#10b981" },
                { label: "View Analytics", icon: "📊", color: "#3b82f620", iconColor: "#3b82f6" },
                { label: "Manage Authors", icon: "👥", color: "#ec489920", iconColor: "#ec4899" },
              ].map(a => (
                <button key={a.label} style={{ background: a.color, border: "none", borderRadius: 10, padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <span style={{ fontSize: 22 }}>{a.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: a.iconColor }}>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── COMMENTS + NOTIFICATIONS ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Comments Overview</div>
                <a href="#" style={{ fontSize: 11, color: "#6366f1", textDecoration: "none" }}>Curate all</a>
              </div>
              {comments.map((c, i) => (
                <div key={i} style={{ borderBottom: "1px solid #f4f4fb", paddingBottom: 14, marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 700 }}>
                        {c.user.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{c.user}</span>
                    </div>
                    <span style={{ fontSize: 10, color: c.color === "#10b981" ? "#10b981" : c.color === "#f59e0b" ? "#f59e0b" : "#ef4444", fontWeight: 600 }}>{c.time}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 8 }}>{c.text}</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {c.tags.map(t => <TagPill key={t} text={t} color="#6366f1" />)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Notifications</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {["All", "Approved", "Pending"].map(t => (
                    <button key={t} style={{ background: t === "All" ? "#6366f1" : "#f4f5fb", color: t === "All" ? "#fff" : "#666", border: "none", borderRadius: 6, padding: "3px 10px", fontSize: 11, cursor: "pointer" }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Alerts and system updates today</div>
              {notifications.map((n, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: n.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{n.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: "#333", lineHeight: 1.4 }}>{n.text}</div>
                    <div style={{ fontSize: 10, color: "#bbb", marginTop: 2 }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── AI CONTENT INSIGHTS ── */}
          <div style={{ background: "linear-gradient(135deg, #0f0f2e 0%, #1a1060 60%, #0f0f2e 100%)", borderRadius: 14, padding: "22px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>🤖 AI Content Insights</div>
                <div style={{ color: "#8080c0", fontSize: 11, marginTop: 2 }}>Smart recommendations based on your content performance</div>
              </div>
              <button style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Live</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
              {aiInsights.map((a, i) => (
                <div key={i} style={{ background: "#ffffff0a", border: "1px solid #ffffff15", borderRadius: 10, padding: "14px 14px" }}>
                  <div style={{ fontSize: 18, marginBottom: 8 }}>{a.icon}</div>
                  <div style={{ fontSize: 10, color: a.color, fontWeight: 700, marginBottom: 4, letterSpacing: 0.5 }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 600, marginBottom: 6, lineHeight: 1.4 }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: "#8080c0", lineHeight: 1.5 }}>{a.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SYSTEM HEALTH ── */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #e8e8f5" }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>System Health</div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>Infrastructure status monitoring</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {[
                { label: "Uptime", value: "99.97%", status: "Operational", icon: "🖥️", color: "#10b981" },
                { label: "Response Time", value: "42ms", status: "Fast", icon: "⚡", color: "#10b981" },
                { label: "API Status", value: "98% or 100%", status: "Degraded", icon: "🔌", color: "#f59e0b" },
                { label: "Last Backup", value: "4 hours ago", status: "64 / 100", icon: "💾", color: "#3b82f6" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center", padding: "12px" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: s.color, fontWeight: 600, marginTop: 4 }}>{s.status}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}