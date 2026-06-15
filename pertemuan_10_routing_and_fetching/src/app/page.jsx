import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        background:
          "radial-gradient(circle at top, #161e31 0%, var(--bg-primary) 70%)",
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: "3rem",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <header>
          <span
            style={{
              color: "var(--accent-primary)",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            STTB - Web Programming 2
          </span>

          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginTop: "0.75rem",
              background:
                "linear-gradient(135deg, #ffffff 0%, var(--text-secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Routing & Fetching
          </h1>
        </header>

        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            fontSize: "1.1rem",
          }}
        >
          Explore Next.js App Router dynamic routes, layouts, and page fetching
          patterns. View the styled layout in the about section below.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              background:
                "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
              color: "#ffffff",
              fontWeight: 600,
              borderRadius: "var(--radius-md)",
              boxShadow: "0 4px 20px var(--accent-glow)",
              transition: "var(--transition-smooth)",
            }}
          >
            Go to About Section
          </Link>
        </div>
      </div>
    </main>
  );
}
