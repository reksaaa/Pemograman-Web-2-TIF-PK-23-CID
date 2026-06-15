export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <span style={{ color: "var(--accent-primary)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}>Company Profile</span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem", background: "linear-gradient(to right, var(--text-primary), var(--text-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          About Our Platform
        </h1>
      </header>
      
      <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>
          Welcome to the next generation of web experience. We build highly interactive, performant, and visual digital products that connect businesses with their audience.
        </p>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>
          Our stack leverages modern capabilities, utilizing the latest frameworks to achieve outstanding speeds, robust search engine optimization, and unparalleled user experiences.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h3 style={{ color: "var(--accent-secondary)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Our Mission</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>To deliver speed, efficiency, and stunning visuals to the modern web environment.</p>
        </div>
        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h3 style={{ color: "var(--accent-primary)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Our Vision</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>Empowering developers and creators to design frictionless and immersive web interfaces.</p>
        </div>
      </div>
    </div>
  );
}
