import React from "react";
import "./InternetScholarshipPage.css";

export default function InternetScholarshipPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <span className="badge">Programs</span>
              <h1 className="hero-title">Internet for Scholarship Program</h1>
              <p className="hero-subtitle">
                Affordable community Wi-Fi that directly funds scholarships for
                vulnerable children in Mugure and neighbouring communities.
              </p>
              <div className="btn-group">
                <a href="#get-connected" className="btn-primary">
                  Get Connected
                </a>
                <a href="#sponsor" className="btn-ghost">
                  Sponsor a Child
                </a>
              </div>
            </div>
            <div className="stats-card">
              <div className="stats-grid">
                {[
                  { k: "Households & SMEs", v: "100+" },
                  { k: "Children on Scholarships (Yr 1)", v: "10" },
                  { k: "% Revenue to Scholarships", v: "30%" },
                ].map((item) => (
                  <div key={item.k} className="stat">
                    <div className="stat-value">{item.v}</div>
                    <div className="stat-label">{item.k}</div>
                  </div>
                ))}
              </div>
              <div className="stats-note">
                Every subscription strengthens digital inclusion and directly
                funds education. A self-sustaining loop of impact.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section" id="problem">
        <h2 className="section-title">Problem Statement</h2>
        <p>
          In Mugure slums, <span className="highlight">1 in 3 children</span>{" "}
          drops out of school before their 18th birthday due to lack of school
          fees. At the same time, Mugure and its neighboring communities remain
          among the most underserved in terms of affordable internet access.
        </p>
      </section>

      {/* Our Solution */}
      <section className="section">
        <div className="solution-grid">
          <div>
            <h2 className="section-title">Our Solution</h2>
            <p>
              The Internet for Scholarship Program addresses both challenges at
              once. By establishing a{" "}
              <span className="highlight">Community Wi-Fi Network</span>, we
              provide households, schools, and small businesses with affordable,
              reliable internet — while ensuring education stays within reach
              for vulnerable children.
            </p>
            <ul className="solution-list">
              {[
                {
                  title: "Internet Access",
                  body: "Wi-Fi hotspots are installed across the community, connecting schools, homes, and businesses.",
                },
                {
                  title: "Revenue Model",
                  body: "Community members pay an affordable monthly fee for internet access.",
                },
                {
                  title: "Scholarship Fund",
                  body: "30% of all subscription proceeds go directly into a fund for children at risk of dropping out.",
                },
                {
                  title: "Sustainability",
                  body: "Internet revenue covers operations while scholarships are funded continuously—less reliance on donations.",
                },
              ].map((item) => (
                <li key={item.title} className="solution-item">
                  <div className="solution-icon">✓</div>
                  <div>
                    <h3 className="solution-title">{item.title}</h3>
                    <p className="solution-body">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="money-flow">
            <h3>How the Money Flows</h3>
            <div className="money-grid">
              {[
                { label: "Subscriptions", note: "Monthly fees" },
                { label: "30% Scholarship Fund", note: "Direct allocation" },
                { label: "Tuition Support", note: "At-risk children" },
              ].map((n, i) => (
                <div key={n.label} className="money-step">
                  <div className="money-step-num">Step {i + 1}</div>
                  <div className="money-step-label">{n.label}</div>
                  <div className="money-step-note">{n.note}</div>
                </div>
              ))}
            </div>
            <p className="money-note">
              Remaining 70% covers connectivity, maintenance, and operations to
              keep internet affordable and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Year 1 Impact Goals */}
      <section className="section" id="impact">
        <div className="impact-box">
          <h2 className="section-title">Year 1 Impact Goals</h2>
          <div className="impact-grid">
            {[
              {
                title: "100 connections",
                body: "Households & businesses connected to affordable internet.",
              },
              {
                title: "10 scholarships",
                body: "Vulnerable children supported to remain in school.",
              },
              {
                title: "Free Hub Wi-Fi",
                body: "Supports our innovation hub; improved digital literacy for students, youth & SMEs.",
              },
            ].map((item) => (
              <div key={item.title} className="impact-item">
                <div className="impact-value">{item.title}</div>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section">
        <h2 className="section-title">Why It Matters</h2>
        <p>
          This program doesn’t just provide internet access — it creates a
          self-sustaining cycle of impact. Every subscription strengthens
          digital inclusion and directly funds education.
        </p>
      </section>

      {/* CTA */}
      <section className="section cta-grid" id="get-connected">
        <div className="cta-dark">
          <h3>Get Connected</h3>
          <p>
            Join the community Wi-Fi network. Fast, reliable, and affordable.
          </p>
          <div className="btn-group">
            <a href="#" className="btn-light">
              View Plans
            </a>
            <a href="#" className="btn-outline">
              Talk to Us
            </a>
          </div>
        </div>
        <div id="sponsor" className="cta-light">
          <h3>Sponsor a Child</h3>
          <p>
            Your contribution, combined with community internet revenue, keeps a
            child in school.
          </p>
          <div className="btn-group">
            <a href="#" className="btn-primary">
              Donate Now
            </a>
            <a href="#impact" className="btn-ghost">
              See Impact Goals
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
