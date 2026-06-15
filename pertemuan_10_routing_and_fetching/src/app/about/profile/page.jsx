export default function Profile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <span style={{ color: "var(--accent-secondary)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}>User Account</span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem", background: "linear-gradient(to right, var(--text-primary), var(--text-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Member Profile
        </h1>
      </header>

      <div className="glass-card" style={{ padding: "2rem", display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        {/* Modern avatar component */}
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#ffffff",
          boxShadow: "0 8px 30px var(--accent-glow)"
        }}>
          AR
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.25rem" }}>Alex Rivera</h2>
          <p style={{ color: "var(--accent-primary)", fontWeight: 500, marginBottom: "0.75rem", fontSize: "1rem" }}>Lead Developer & Systems Architect</p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
            Focusing on scalable backend infrastructures, state machines, and building next-level user interfaces that are both responsive and hyper-performant.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
        <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }}>120+</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: 600 }}>Completed Projects</div>
        </div>
        <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-primary)", marginBottom: "0.25rem" }}>14k+</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: 600 }}>Git Commits</div>
        </div>
        <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-secondary)", marginBottom: "0.25rem" }}>8 Yrs</div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", fontWeight: 600 }}>Coding Experience</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>Core Tech Stack</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {["React / Next.js", "TypeScript", "Node.js", "CSS Modules", "PostgreSQL", "GraphQL"].map((skill) => (
            <span key={skill} style={{
              padding: "0.4rem 0.8rem",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.85rem",
              color: "var(--text-secondary)"
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
