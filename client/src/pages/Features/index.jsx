import { useState } from "react";

// ===== COLORS (matched to screenshot: white/light page, deep indigo-purple hero, navy "Why Huzzler" band) =====
const P = "#7C3AED";      // primary purple
const P2 = "#A78BFA";     // lighter purple accent
const PD = "#1E1B4B";     // deep indigo (hero bg)
const PD2 = "#2E1065";    // deep purple (hero bg gradient end)
const NAVY = "#0B1120";   // "Why Huzzler" dark navy band
const W = "#FFFFFF";
const OFFWHITE = "#F8F9FC";
const LILAC = "#F1EEFF";  // very light lilac section bg
const INK = "#111827";    // near-black text on white
const G = "#6B7280";      // gray body text
const BORDER = "#E5E7EB"; // light border on white sections

const C = {
  body: { background: W, color: INK, fontFamily: "'Inter',sans-serif", margin: 0, padding: 0 },
  nav: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 4rem", borderBottom:"1px solid "+BORDER, background:"rgba(255,255,255,0.95)", position:"sticky", top:0, zIndex:100 },
  sec: (bg) => ({ padding:"5rem 4rem", background: bg||W }),
  card: { background:W, border:"1px solid "+BORDER, borderRadius:16, padding:"1.5rem", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" },
  cardOnDark: { background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:16, padding:"1.5rem" },
  h1: { fontSize:64, fontWeight:800, lineHeight:1.1, letterSpacing:"-2px", margin:"0 0 1.5rem" },
  h2: { fontSize:42, fontWeight:800, letterSpacing:"-1px", margin:"0 0 1rem", lineHeight:1.15, color: INK },
  label: { color:P, fontSize:13, fontWeight:600, letterSpacing:"1px", textTransform:"uppercase", marginBottom:12 },
  btn: (outline) => ({ padding:"8px 20px", borderRadius:8, border: outline?"1px solid "+BORDER:"none", background: outline?"transparent":P, color: outline?INK:W, fontSize:14, cursor:"pointer", fontWeight: outline?500:600 }),
  btnLg: (outline) => ({ padding:"14px 28px", borderRadius:10, border: outline?"1px solid rgba(255,255,255,0.25)":"none", background: outline?"transparent":W, color: outline?W:P, fontSize:16, cursor:"pointer", fontWeight: outline?500:600, display:"flex", alignItems:"center", gap:8 }),
  grad: { background:"linear-gradient(135deg,#A78BFA,#60A5FA)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" },
  badge: { display:"inline-flex", alignItems:"center", padding:"6px 14px", borderRadius:999, background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.25)", color:"#E0D7FF", fontSize:13, fontWeight:500, marginBottom:24 },
  pill: (a) => ({ padding:"6px 14px", borderRadius:999, fontSize:13, fontWeight:500, cursor:"pointer", background: a?P:W, color: a?W:G, border: a?"none":"1px solid "+BORDER }),
  avatar: (bg,fg) => ({ width:36, height:36, borderRadius:"50%", background:bg, color:fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0 }),
  row: (gap=20) => ({ display:"flex", gap, alignItems:"center" }),
  grid: (cols,gap=20) => ({ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap }),
};

const FREELANCERS = [
  {i:"SC",n:"Sarah Chen",r:"UI/UX Designer",s:98,bg:"#EDE9FE",fg:"#7C3AED",loc:"San Francisco",tags:["UI/UX","Figma","Mobile"],rate:"$95/hr",rev:"★★★★★ (148)"},
  {i:"MR",n:"Marcus Roy",r:"React Developer",s:95,bg:"#D1FAE5",fg:"#065F46",loc:"London",tags:["React","TypeScript","Node"],rate:"$120/hr",rev:"★★★★★ (203)"},
  {i:"AT",n:"Aiko Tanaka",r:"Brand Strategist",s:91,bg:"#FEF3C7",fg:"#92400E",loc:"Tokyo",tags:["Branding","Strategy","Copy"],rate:"$85/hr",rev:"★★★★★ (97)"},
];

const SmCard = ({icon,title,desc}) => (
  <div style={C.card}>
    <div style={{width:44,height:44,borderRadius:10,background:"rgba(124,58,237,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:16}}>{icon}</div>
    <div style={{fontSize:17,fontWeight:700,marginBottom:8,color:INK}}>{title}</div>
    <div style={{fontSize:14,color:G,lineHeight:1.7}}>{desc}</div>
  </div>
);

const Hero = () => (
  <section style={{
    position:"relative", overflow:"hidden", padding:"6rem 4rem 7rem", display:"grid",
    gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center",
    background:"#1A1535", color:W
  }}>
    {/* ambient glow blobs */}
    <div style={{position:"absolute", top:"-10%", left:"5%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)", filter:"blur(10px)"}}/>
    <div style={{position:"absolute", top:"20%", right:"8%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)", filter:"blur(10px)"}}/>
    <div style={{position:"absolute", bottom:"-15%", left:"30%", width:500, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)", filter:"blur(10px)"}}/>

    <div style={{position:"relative", zIndex:2}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,background:"rgba(124,58,237,0.25)",border:"1px solid rgba(167,139,250,0.4)",color:"#D8CFFF",fontSize:12.5,fontWeight:500,marginBottom:22}}>▸ Platform Features</div>
      <h1 style={{fontSize:42,fontWeight:800,lineHeight:1.2,letterSpacing:"-1px",margin:"0 0 18px",color:W}}>
        Everything You Need<br/>To <span style={{color:"#A5A6F6"}}>Hire, Manage &</span><br/><span style={{color:"#A5A6F6"}}>Scale</span>
      </h1>
      <p style={{color:"#B8B6CC",fontSize:15,maxWidth:430,lineHeight:1.7,marginBottom:30}}>Huzzler AI combines talent discovery, project management, AI-powered hiring, collaboration tools, and business intelligence into one powerful platform.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
        <button style={{padding:"11px 22px",borderRadius:8,border:"none",background:P,color:W,fontSize:14,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>Explore Talent →</button>
        <button style={{padding:"11px 22px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.04)",color:W,fontSize:14,fontWeight:500,cursor:"pointer"}}>Start Hiring</button>
        <button style={{padding:"11px 22px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",background:"transparent",color:W,fontSize:14,fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>▶ Watch Demo</button>
      </div>
    </div>

    <div style={{position:"relative", zIndex:2}}>
      <div style={{background:"rgba(30,24,58,0.85)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"1.25rem", backdropFilter:"blur(6px)"}}>
        <div style={{fontSize:14,fontWeight:700,color:W,marginBottom:2}}>AI Talent Dashboard</div>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:16}}>
          <span style={{fontSize:11,color:"#9591B8"}}>Live matching results</span>
          <span style={{display:"flex",gap:3,marginLeft:"auto"}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#EF4444"}}/>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#F59E0B"}}/>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#10B981"}}/>
          </span>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"flex-end",height:48,marginBottom:18}}>
          {[60,50,95,55,40,70,80].map((h,idx)=>(
            <div key={idx} style={{flex:1,height:`${h}%`,borderRadius:4,background: idx===2?P:"rgba(139,92,246,0.35)"}}/>
          ))}
        </div>
        {[{i:"S",n:"Sarah Chen",r:"UI/UX Designer",s:98,bg:"#7C3AED"},{i:"M",n:"Marcus Roy",r:"React Developer",s:95,bg:"#F97316"},{i:"A",n:"Aiko Tanaka",r:"Brand Strategist",s:91,bg:"#10B981"}].map(({i,n,r,s,bg})=>(
          <div key={n} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
            <div style={{width:30,height:30,borderRadius:"50%",background:bg,color:W,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0}}>{i}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12.5,fontWeight:600,color:W}}>{n}</div>
              <div style={{fontSize:11,color:"#9591B8"}}>{r}</div>
            </div>
            <span style={{fontSize:11,fontWeight:700,color:"#C4B5FD",background:"rgba(124,58,237,0.25)",padding:"3px 9px",borderRadius:999}}>{s}%</span>
          </div>
        ))}
      </div>
      {/* floating badges */}
      <div style={{position:"absolute", top:-26, right:-14, background:"rgba(255,255,255,0.9)", borderRadius:10, padding:"8px 14px", fontSize:12, fontWeight:700, color:"#1F2230", boxShadow:"0 8px 24px rgba(0,0,0,0.3)"}}>50K+</div>
      <div style={{position:"absolute", left:-34, top:"42%", width:64, height:36, background:"rgba(255,255,255,0.85)", borderRadius:10, filter:"blur(1px)", boxShadow:"0 8px 24px rgba(0,0,0,0.3)"}}/>
      <div style={{position:"absolute", right:8, bottom:-18, width:80, height:30, background:"rgba(245,200,80,0.85)", borderRadius:10, filter:"blur(2px)"}}/>
    </div>
  </section>
);

const Overview = () => (
  <section style={{...C.sec(OFFWHITE),textAlign:"center"}}>
    <div style={C.label}>🧩 Platform Overview</div>
    <h2 style={{...C.h2,textAlign:"center"}}>Built For <span style={{color:P}}>Modern Teams</span></h2>
    <p style={{color:G,fontSize:18,maxWidth:560,margin:"0 auto 3rem"}}>Eight powerful modules that work together seamlessly.</p>
    <div style={C.grid(4)}>
      {[["🤖","AI Talent Matching","Smart algorithms connect you with the most qualified professionals."],
        ["💼","Project Marketplace","Browse thousands of verified experts across every discipline."],
        ["📄","Smart Proposals","AI-powered proposal generator crafts winning pitches in seconds."],
        ["📊","Project Analytics","Rich dashboards surface insights that drive smarter hiring."],
        ["💬","Real-Time Messaging","Built-in chat, file sharing, and video meetings in one place."],
        ["🛡","Secure Payments","Escrow protection, milestone releases, and global payouts."],
        ["⚡","AI Assistant","Your always-on project manager — from briefs to task breakdowns."],
        ["📈","Team Collaboration","Milestone boards, timelines, and shared workspaces."],
      ].map(([icon,title,desc])=><SmCard key={title} icon={icon} title={title} desc={desc}/>)}
    </div>
  </section>
);

const AIMatching = () => (
  <section style={{...C.sec(W),display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
    <div>
      <div style={C.label}>🤖 Feature 01 · AI Matching Engine</div>
      <h2 style={C.h2}>Find The Perfect Freelancer In <span style={{color:P}}>Seconds</span></h2>
      <p style={{color:G,fontSize:16,marginBottom:28}}>Our AI analyzes your project requirements and recommends the most suitable talent automatically.</p>
      {["Skill matching across 200+ categories","Experience scoring with portfolio analysis","Real-time availability & response rate tracking","Smart recommendations that improve over time"].map(t=>(
        <div key={t} style={{display:"flex",gap:10,marginBottom:12}}><span style={{color:"#10B981",fontWeight:700}}>✓</span><span style={{color:"#374151",fontSize:15}}>{t}</span></div>
      ))}
    </div>
    <div style={C.card}>
      <div style={{fontSize:13,fontWeight:600,color:G,marginBottom:16}}>TOP MATCHES FOR YOUR PROJECT</div>
      {[{i:"SC",n:"Sarah Chen",r:"Senior UI/UX Designer · 5yr",s:98,bg:"#EDE9FE",fg:"#7C3AED"},{i:"MR",n:"Marcus Roy",r:"Product Designer · 7yr",s:94,bg:"#D1FAE5",fg:"#065F46"},{i:"AT",n:"Aiko Tanaka",r:"Brand Specialist · 4yr",s:88,bg:"#FEF3C7",fg:"#92400E"}].map(({i,n,r,s,bg,fg})=>(
        <div key={n} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:"1px solid "+BORDER}}>
          <div style={C.avatar(bg,fg)}>{i}</div>
          <div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:INK}}>{n}</div><div style={{fontSize:12,color:G}}>{r}</div></div>
          <div style={{fontSize:18,fontWeight:800,color:P}}>{s}%</div>
        </div>
      ))}
      <div style={{marginTop:16,padding:"10px 14px",background:"rgba(124,58,237,0.07)",borderRadius:8,fontSize:13,color:"#7C3AED"}}>🤖 AI analyzed 312 profiles in 0.4s</div>
    </div>
  </section>
);

const Marketplace = () => {
  const [active,setActive] = useState("All");
  return (
    <section style={C.sec(LILAC)}>
      <div style={{textAlign:"center",marginBottom:"2rem"}}>
        <div style={C.label}>💼 Feature 02</div>
        <h2 style={{...C.h2,textAlign:"center"}}>Discover Top Professionals <span style={{color:P}}>Worldwide</span></h2>
      </div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:28,justifyContent:"center"}}>
        {["All","🎨 Design","💻 Dev","📝 Writing","📊 Marketing","🎬 Video","⚙️ Engineering"].map(t=><button key={t} style={C.pill(active===t)} onClick={()=>setActive(t)}>{t}</button>)}
      </div>
      <div style={C.grid(3)}>
        {FREELANCERS.map(({i,n,loc,tags,rate,rev,bg,fg})=>(
          <div key={n} style={{...C.card,display:"flex",flexDirection:"column",gap:12}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{...C.avatar(bg,fg),width:48,height:48,fontSize:14}}>{i}</div>
              <div><div style={{fontWeight:700,fontSize:15,color:INK}}>{n}</div><div style={{fontSize:12,color:G}}>{loc} ✅ Verified</div></div>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{tags.map(t=><span key={t} style={{padding:"4px 10px",borderRadius:6,background:OFFWHITE,fontSize:12,color:"#4B5563",border:"1px solid "+BORDER}}>{t}</span>)}</div>
            <div style={{color:"#059669",fontSize:14}}>{rev}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:18,fontWeight:800,color:INK}}>{rate}</span>
              <button style={{...C.btn(),padding:"8px 16px",fontSize:13}}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AIAssistant = () => (
  <section style={{
    padding:"5rem 4rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-start",
    background:`linear-gradient(135deg, ${PD2} 0%, ${PD} 100%)`, color:W
  }}>
    <div>
      <div style={{...C.label,color:"#C4B5FD"}}>⚡ Feature 03</div>
      <h2 style={{...C.h2,color:W}}>Your AI-Powered Project Manager</h2>
      <p style={{color:"#C7C9F5",fontSize:16,marginBottom:28}}>Let AI handle the heavy lifting — from drafting project briefs to structuring deliverables.</p>
      <div style={C.grid(2,12)}>
        {[["📝","Generate Briefs","Auto-create project descriptions"],["💡","Proposal Tips","Targeted recommendations"],["📋","Task Breakdown","Structure any project fast"],["📅","Meeting Notes","Auto-summarize calls"],["🔍","Requirement Analysis","Surface gaps early"],["📈","Project Insights","Predictive delay alerts"]].map(([icon,title,desc])=>(
          <div key={title} style={{display:"flex",gap:10,padding:12,background:"rgba(255,255,255,0.07)",borderRadius:10,border:"1px solid rgba(255,255,255,0.12)"}}>
            <span style={{fontSize:18}}>{icon}</span>
            <div><div style={{fontSize:13,fontWeight:600,color:W}}>{title}</div><div style={{fontSize:12,color:"#A5A8E0"}}>{desc}</div></div>
          </div>
        ))}
      </div>
    </div>
    <div style={{...C.card,background:"rgba(255,255,255,0.97)"}}>
      <div style={{fontSize:13,color:G,marginBottom:8}}>Your Request</div>
      <div style={{background:OFFWHITE,borderRadius:10,padding:"12px 14px",fontSize:14,color:"#374151",marginBottom:12,fontStyle:"italic"}}>"Create a project brief for a mobile banking app redesign with a 6-week timeline..."</div>
      <div style={{fontSize:12,color:P,marginBottom:10}}>Huzzler AI is generating...</div>
      <div style={{fontSize:13,fontWeight:600,marginBottom:8,color:INK}}>✨ AI Generated Brief</div>
      {["User research & competitive audit (Week 1-2)","Wireframes & information architecture (Week 2-3)","High-fidelity UI design with design system (Week 3-5)","Prototype, testing & handoff documentation (Week 5-6)"].map(s=>(
        <div key={s} style={{display:"flex",gap:8,padding:"8px 0",borderBottom:"1px solid "+BORDER,fontSize:13,color:"#374151"}}><span style={{color:P}}>▸</span>{s}</div>
      ))}
      <div style={{display:"flex",gap:8,marginTop:16}}>
        <button style={{...C.btn(),flex:1,borderRadius:8,fontSize:13}}>Use This Brief</button>
        <button style={{...C.btn(true),flex:1,borderRadius:8,fontSize:13}}>Regenerate</button>
      </div>
    </div>
  </section>
);

const Messaging = () => (
  <section style={{...C.sec(W),display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
    <div style={C.card}>
      <div style={{fontSize:14,fontWeight:600,marginBottom:16,borderBottom:"1px solid "+BORDER,paddingBottom:12,color:INK}}>Project Chat · Brand Redesign</div>
      {[{i:"SC",bg:"#EDE9FE",fg:"#7C3AED",msg:"Hey! I just uploaded the wireframes to the shared folder 🎉",a:"left"},{i:"You",bg:"#F3F4F6",fg:"#4B5563",msg:"Love the direction! Can we hop on a quick call?",a:"right"},{i:"SC",bg:"#EDE9FE",fg:"#7C3AED",msg:"Absolutely, I'm free in 20 min. I'll send a Zoom link 📹",a:"left"},{i:"You",bg:"#F3F4F6",fg:"#4B5563",msg:"Perfect. Also the client approved the color palette! ✅",a:"right"}].map(({i,bg,fg,msg,a},idx)=>(
        <div key={idx} style={{display:"flex",gap:10,marginBottom:12,flexDirection:a==="right"?"row-reverse":"row"}}>
          <div style={{...C.avatar(bg,fg),fontSize:10}}>{i}</div>
          <div style={{background:a==="right"?"rgba(124,58,237,0.1)":OFFWHITE,borderRadius:10,padding:"10px 12px",fontSize:13,color:"#374151",maxWidth:"75%"}}>{msg}</div>
        </div>
      ))}
      <div style={{display:"flex",gap:8,marginTop:12,padding:10,background:OFFWHITE,borderRadius:10,alignItems:"center"}}>
        <input placeholder="Write a message..." style={{flex:1,background:"transparent",border:"none",color:INK,fontSize:13,outline:"none"}}/>
        <button style={{...C.btn(),padding:"6px 12px",fontSize:12,borderRadius:6}}>→</button>
      </div>
    </div>
    <div>
      <div style={C.label}>💬 Feature 04</div>
      <h2 style={C.h2}>Collaborate In <span style={{color:P}}>Real Time</span></h2>
      <p style={{color:G,fontSize:16,marginBottom:28}}>Built-in messaging, file sharing, and video meetings — stay aligned without switching tabs.</p>
      {[["💬","Threaded project chat with @mentions"],["📁","Drag-and-drop file sharing with previews"],["📹","One-click video meetings via Zoom/Meet"],["🔔","Smart notifications — only what matters"]].map(([icon,text])=>(
        <div key={text} style={{display:"flex",gap:12,marginBottom:16}}><span style={{fontSize:20}}>{icon}</span><span style={{color:"#374151",fontSize:15}}>{text}</span></div>
      ))}
    </div>
  </section>
);

const Analytics = () => (
  <section style={{...C.sec(OFFWHITE),display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
    <div>
      <div style={C.label}>📊 Feature 05</div>
      <h2 style={C.h2}>Track Progress Without <span style={{color:P}}>Micromanaging</span></h2>
      <p style={{color:G,fontSize:16,marginBottom:28}}>Visual milestones, task boards, and automated status updates keep every stakeholder informed.</p>
      {[["🏁","Visual milestone tracker with dependencies"],["📋","Kanban task boards with drag-and-drop"],["⏱","Automated status updates & notifications"],["📅","Gantt-style project timelines"],["📈","Performance & velocity analytics"]].map(([icon,text])=>(
        <div key={text} style={{display:"flex",gap:12,marginBottom:16}}><span>{icon}</span><span style={{color:"#374151",fontSize:15}}>{text}</span></div>
      ))}
    </div>
    <div style={C.card}>
      <div style={C.grid(3,12)}>
        {[["24","Active Projects"],["96%","Completion Rate ↑"],["4.2d","Avg. Delivery ↓"]].map(([v,l])=>(
          <div key={l} style={{background:OFFWHITE,borderRadius:10,padding:"14px 12px",textAlign:"center",marginBottom:20,border:"1px solid "+BORDER}}>
            <div style={{fontSize:22,fontWeight:800,color:INK}}>{v}</div><div style={{fontSize:11,color:G,marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{fontSize:13,fontWeight:600,marginBottom:12,color:INK}}>Project Milestones</div>
      {[{l:"Discovery & Research",s:"Complete",d:"Delivered 2 days early",c:"#10B981"},{l:"Wireframes & Prototypes",s:"Complete",d:"Client approved on first review",c:"#10B981"},{l:"UI Design System",s:"In Progress",d:"68% complete · Due in 3 days",c:"#D97706"},{l:"Final Delivery",s:"Upcoming",d:"Scheduled for Nov 28",c:G}].map(({l,s,d,c})=>(
        <div key={l} style={{padding:"12px 0",borderBottom:"1px solid "+BORDER}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:14,fontWeight:500,color:INK}}>{l}</span><span style={{fontSize:12,color:c,fontWeight:600}}>{s}</span></div>
          <div style={{fontSize:12,color:G}}>{d}</div>
        </div>
      ))}
    </div>
  </section>
);

const WhyHuzzler = () => (
  <section style={{...C.sec(NAVY),textAlign:"center",color:W}}>
    <div style={{...C.label,color:P2}}>💜 Why Huzzler</div>
    <h2 style={{...C.h2,textAlign:"center",color:W}}>Why Teams Love <span style={C.grad}>Huzzler</span></h2>
    <p style={{color:"#9CA3AF",fontSize:18,maxWidth:520,margin:"0 auto 3rem"}}>Join 15,000+ teams that have transformed how they hire.</p>
    <div style={{...C.grid(3),marginBottom:20}}>
      {[["👥","50K+","Verified Freelancers","Across 200+ skill categories worldwide"],["💼","15K+","Projects Completed","From MVPs to enterprise builds"],["✅","98%","Satisfaction Rate","Clients rate their experience 5 stars"],["🌍","120+","Countries Served","Global talent, local compliance"],["⚡","24/7","AI Support","Always-on AI plus human support"],["🔐","SOC2","Enterprise Security","SOC2 Type II + GDPR + SSO"]].map(([icon,num,title,desc])=>(
        <div key={title} style={C.cardOnDark}>
          <div style={{fontSize:32,marginBottom:8}}>{icon}</div>
          <div style={{fontSize:40,fontWeight:900,color:P2}}>{num}</div>
          <div style={{fontSize:16,fontWeight:700,margin:"8px 0 4px",color:W}}>{title}</div>
          <div style={{fontSize:13,color:"#9CA3AF"}}>{desc}</div>
        </div>
      ))}
    </div>
  </section>
);

const HowItWorks = () => (
  <section style={C.sec(W)}>
    <div style={{textAlign:"center",marginBottom:"3rem"}}>
      <div style={C.label}>🔄 How It Works</div>
      <h2 style={{...C.h2,textAlign:"center"}}>How <span style={{color:P}}>Huzzler</span> Works</h2>
    </div>
    <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
      {[["1","Post Project","Describe your needs — AI crafts the perfect brief"],["2","AI Matches Talent","Smart algorithm surfaces best-fit professionals"],["3","Review Applications","Compare profiles and AI-scored proposals"],["4","Hire Freelancer","Sign contracts, fund escrow, kick off"],["5","Collaborate","Chat, share files, track milestones"],["6","Deliver","Approve work, release payment, review"]].map(([num,title,desc],i)=>(
        <div key={num} style={{display:"flex",alignItems:"flex-start",gap:8,flex:1}}>
          <div style={{...C.card,padding:"1.5rem",flex:1,minWidth:0}}>
            <div style={{width:32,height:32,borderRadius:"50%",background:P,color:W,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,marginBottom:12}}>{num}</div>
            <div style={{fontSize:14,fontWeight:700,marginBottom:6,color:INK}}>{title}</div>
            <div style={{fontSize:12,color:G,lineHeight:1.6}}>{desc}</div>
          </div>
          {i<5&&<div style={{color:"#C4B5FD",fontSize:20,marginTop:20,flexShrink:0}}>→</div>}
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section style={C.sec(LILAC)}>
    <div style={{textAlign:"center",marginBottom:"3rem"}}>
      <div style={C.label}>❤️ Testimonials</div>
      <h2 style={{...C.h2,textAlign:"center"}}>Loved By <span style={{color:P}}>Businesses Worldwide</span></h2>
    </div>
    <div style={C.grid(2)}>
      {[{q:"Huzzler AI completely transformed our hiring process. We went from 3 weeks to hire down to 3 days.",i:"SM",n:"Sofia Martínez",r:"Head of Ops, Luxe Media",bg:"#EDE9FE",fg:"#7C3AED"},{q:"The AI proposal generator alone has saved our team over 8 hours per week.",i:"JL",n:"James Liu",r:"CTO, FinScale",bg:"#D1FAE5",fg:"#065F46"},{q:"My acceptance rate jumped from 12% to 58% with Huzzler's smart matching.",i:"AK",n:"Arjun Kapoor",r:"Freelance Developer",bg:"#FEF3C7",fg:"#92400E"},{q:"Zero payment disputes across 40+ projects thanks to the escrow system.",i:"PW",n:"Priya Walsh",r:"Founder, Craft Studio",bg:"#DBEAFE",fg:"#1E3A5F"}].map(({q,i,n,r,bg,fg})=>(
        <div key={n} style={C.card}>
          <div style={{color:"#F59E0B",fontSize:16,marginBottom:12}}>★★★★★</div>
          <p style={{fontSize:15,color:"#374151",lineHeight:1.7,marginBottom:20,fontStyle:"italic"}}>"{q}"</p>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{...C.avatar(bg,fg),width:40,height:40}}>{i}</div>
            <div><div style={{fontWeight:700,fontSize:14,color:INK}}>{n}</div><div style={{fontSize:12,color:G}}>{r}</div></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Enterprise = () => (
  <section style={{...C.sec(NAVY),textAlign:"center"}}>
    <div style={{
      maxWidth:780, margin:"0 auto", padding:"2.5rem 2rem", borderRadius:16,
      border:"1.5px dashed #38BDF8", background:"rgba(255,255,255,0.02)"
    }}>
      <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:999,background:"rgba(124,58,237,0.25)",color:"#C4B5FD",fontSize:11,fontWeight:600,marginBottom:20}}>🛡 ENTERPRISE</div>
      <h2 style={{...C.h2,textAlign:"center",color:W,fontSize:30,marginBottom:10}}>Built For <span style={{color:P2}}>Growing Businesses</span></h2>
      <p style={{color:"#9CA3AF",fontSize:14,maxWidth:460,margin:"0 auto 28px"}}>Advanced controls, custom workflows, and dedicated support for teams that demand more.</p>
      <div style={C.grid(3,14)}>
        {[["🏢","Multi-Team Management","Unified workspace for all departments with role-based access"],
          ["🔑","Advanced Permissions","Granular controls so everyone sees exactly what they need"],
          ["⚙️","Custom Workflows","Build approval flows and automation that match your process"],
          ["📊","Enterprise Analytics","Executive dashboards with exportable data and API access"],
          ["🎧","Priority Support","Dedicated CSM with SLA guarantees and on-call assistance"],
          ["🔒","Security Controls","SSO, SAML, GDPR, SOC2 Type II, and custom data retention"],
        ].map(([icon,title,desc])=>(
          <div key={title} style={{...C.cardOnDark,padding:"0.9rem",textAlign:"left",borderRadius:10}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:8}}>
              <div style={{width:26,height:26,borderRadius:7,background:"rgba(124,58,237,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0}}>{icon}</div>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:W,marginBottom:3}}>{title}</div>
                <div style={{fontSize:10.5,color:"#9CA3AF",lineHeight:1.5}}>{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section style={{
    padding:"5rem 4rem", textAlign:"center",
    background:`linear-gradient(135deg, #7C5CFC 0%, #6D8DF6 60%, #5BA8F2 100%)`, color:W
  }}>
    <h2 style={{...C.h2,textAlign:"center",fontSize:36,color:W}}>Experience The Future Of<br/>Freelance Hiring</h2>
    <p style={{color:"rgba(255,255,255,0.85)",fontSize:15,maxWidth:460,margin:"0 auto 32px"}}>Join thousands of companies using Huzzler AI to hire faster, collaborate better, and scale smarter.</p>
    <div style={{display:"flex",gap:14,justifyContent:"center"}}>
      <button style={{padding:"10px 22px",borderRadius:8,border:"none",background:W,color:"#5B4FE8",fontSize:14,fontWeight:700,cursor:"pointer"}}>Get Started Free →</button>
      <button style={{padding:"10px 22px",borderRadius:8,border:"1px solid rgba(255,255,255,0.4)",background:"rgba(255,255,255,0.12)",color:W,fontSize:14,fontWeight:500,cursor:"pointer"}}>Explore Talent</button>
      <button style={{padding:"10px 22px",borderRadius:8,border:"1px solid rgba(255,255,255,0.4)",background:"rgba(255,255,255,0.12)",color:W,fontSize:14,fontWeight:500,cursor:"pointer"}}>📅 Book Demo</button>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{background:"#0A0A14",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"3rem 4rem"}}>
    <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:40,marginBottom:40}}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:8,fontWeight:700,fontSize:18,marginBottom:12,color:W}}>
          <span style={{color:P2}}>⚡</span>Huzzler<span style={{color:P2,fontSize:11,padding:"2px 6px",background:"rgba(167,139,250,0.15)",borderRadius:4}}>AI</span>
        </div>
        <p style={{color:"#6B7280",fontSize:13,maxWidth:220,lineHeight:1.7}}>The AI-powered platform that connects the world's best talent with companies that need them.</p>
        <div style={{display:"flex",gap:10,marginTop:16}}>
          {["𝕏","in","f","▶"].map(s=><div key={s} style={{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.06)",color:"#9CA3AF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>{s}</div>)}
        </div>
      </div>
      {[["Company",["About","Careers","Press","Partners"]],["Features",["AI Matching","Marketplace","Payments","Analytics"]],["Resources",["Pricing","Blog","Docs","API"]],["Support",["Help Center","Contact","Privacy","Terms"]]].map(([h,links])=>(
        <div key={h}><div style={{fontSize:14,fontWeight:700,marginBottom:16,color:W}}>{h}</div>{links.map(l=><div key={l} style={{color:"#6B7280",fontSize:13,marginBottom:10,cursor:"pointer"}}>{l}</div>)}</div>
      ))}
    </div>
    <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:24,display:"flex",justifyContent:"space-between"}}>
      <span style={{color:"#6B7280",fontSize:13}}>© 2024 Huzzler AI. All rights reserved.</span>
      <span style={{color:"#6B7280",fontSize:13}}>Made with ❤️ for modern teams</span>
    </div>
  </footer>
);

export default function Features() {
  return (
    <div style={C.body}>
      <Hero />
      <Overview />
      <AIMatching />
      <Marketplace />
      <AIAssistant />
      <Messaging />
      <Analytics />
      <WhyHuzzler />
      <HowItWorks />
      <Testimonials />
      <Enterprise />
      <CTA />
      <Footer />
    </div>
  );
}