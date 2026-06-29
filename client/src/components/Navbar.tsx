import { useLocation } from "wouter";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Browse Talent", path: "/browse-talent" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
        height: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => setLocation("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#6D4AFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            ⚡
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Huzzler{" "}
            <span
              style={{
                color: "#6D4AFF",
              }}
            >
              AI
            </span>
          </div>
        </div>

        {/* Center Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => setLocation(item.path)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: isActive(item.path) ? 600 : 500,
                color: isActive(item.path)
                  ? "#6D4AFF"
                  : "#4B5563",
                transition: "0.2s",
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={() => setLocation("/dashboard")}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              color: "#111827",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <button
            onClick={() => setLocation("/become-freelancer")}
            style={{
              border: "none",
              background: "#6D4AFF",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Get Started →
          </button>
        </div>
      </div>
    </header>
  );
}