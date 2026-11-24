import './About.css'

const strengths = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Delivering production-ready features quickly without compromising code quality or maintainability.' },
  { icon: '🌐', title: 'Cross-Browser Compatibility', desc: 'Ensuring flawless performance across all modern browsers — Chrome, Firefox, Safari, and Edge.' },
  { icon: '🔗', title: 'Seamless API Design', desc: 'Building clean, well-structured RESTful APIs that integrate perfectly with frontend systems.' },
  { icon: '📱', title: 'Mobile-First Approach', desc: 'Every interface is designed and coded mobile-first, then enhanced for larger screens.' },
  { icon: '🧹', title: 'Clean Code Habits', desc: 'Consistent naming conventions, modular component structure, and comprehensive code organization.' },
  { icon: '🚀', title: 'Production Deployments', desc: 'Proven experience deploying full-stack applications live via Vercel with CI/CD practices.' },
]

const buildSteps = [
  {
    number: '01',
    title: 'Responsive Layout Architecture',
    desc: 'Every project begins with a mobile-first grid system. I establish breakpoints early, use CSS Grid and Flexbox strategically, and ensure layouts scale fluidly from 320px to 4K displays.',
  },
  {
    number: '02',
    title: 'Modular Component Structure',
    desc: 'React components are designed to be small, focused, and reusable. I keep logic separated from presentation, use custom hooks for shared state, and organize by feature rather than file type.',
  },
  {
    number: '03',
    title: 'API Integration & Data Flow',
    desc: 'RESTful APIs are designed with clear endpoint conventions. Error states, loading states, and edge cases are handled systematically, ensuring a resilient frontend–backend communication layer.',
  },
  {
    number: '04',
    title: 'Deployment & Optimization',
    desc: 'Applications are deployed via Vercel with environment variable management, build optimization, and performance auditing. Code is committed via structured Git workflows on GitHub.',
  },
]

export default function About() {
  return (
    <div className="about page-enter">

      {/* Page Header */}
      <section className="page-header section-padding">
        <div className="mesh-bg" />
        <div className="container page-header__inner">
          <p className="section-eyebrow">Who I Am</p>
          <h1 className="page-header__title">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="page-header__sub">
            A passionate Full-Stack Developer with a relentless focus on crafting exceptional digital products.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <p className="section-eyebrow">My Story</p>
              <h2 className="about-story__title">
                Problem-Solver at Heart,
                <br />
                <span className="gradient-text">Developer by Craft</span>
              </h2>
              <div className="about-story__text">
                <p>
                  My journey into full-stack development was driven by a deep fascination with how the web works — not just the surface, but the entire system underneath. I'm <strong>Khusbu Sah</strong>, a Full-Stack Web Developer based at iSourcingSolutions in Ahmedabad, where I've spent the past year building commercial-grade web applications that real businesses rely on.
                </p>
                <p>
                  What sets me apart is my end-to-end ownership of projects. From designing responsive UI components in React to architecting REST APIs in Node.js and Express, managing MongoDB databases, and deploying to production via Vercel — I handle the full lifecycle. This means fewer communication gaps, faster iterations, and a more cohesive final product.
                </p>
                <p>
                  I believe in <strong>clean code as a first principle</strong>. Readable, maintainable, and well-structured code isn't a luxury — it's a requirement for any team that wants to move fast without breaking things. I apply this philosophy to every component, every endpoint, and every commit.
                </p>
              </div>

              <div className="about-story__quick-facts">
                <div className="quick-fact">
                  <span className="quick-fact__label">Based in</span>
                  <span className="quick-fact__value">Ahmedabad, India</span>
                </div>
                <div className="quick-fact">
                  <span className="quick-fact__label">Company</span>
                  <span className="quick-fact__value">iSourcingSolutions</span>
                </div>
                <div className="quick-fact">
                  <span className="quick-fact__label">Experience</span>
                  <span className="quick-fact__value">1+ Year Professional</span>
                </div>
                <div className="quick-fact">
                  <span className="quick-fact__label">Open To</span>
                  <span className="quick-fact__value">Full-Time Roles</span>
                </div>
              </div>
            </div>

            <div className="about-story__visual">
              <div className="about-card glass-card">
                <div className="about-card__header">
                  <div className="about-card__avatar">KS</div>
                  <div>
                    <h3 className="about-card__name">Khusbu Sah</h3>
                    <p className="about-card__role">Full-Stack Developer</p>
                  </div>
                </div>
                <div className="about-card__stats">
                  <div className="about-card__stat">
                    <span className="about-card__stat-val gradient-text">1+</span>
                    <span className="about-card__stat-label">Years Exp</span>
                  </div>
                  <div className="about-card__stat">
                    <span className="about-card__stat-val gradient-text">4+</span>
                    <span className="about-card__stat-label">Projects</span>
                  </div>
                  <div className="about-card__stat">
                    <span className="about-card__stat-val gradient-text">100%</span>
                    <span className="about-card__stat-label">Responsive</span>
                  </div>
                </div>
                <div className="about-card__tags">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Git', 'Vercel'].map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="about-card__status">
                  <span className="about-card__status-dot" />
                  Available for Full-Time Roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Build */}
      <section className="how-i-build section-padding">
        <div className="how-i-build__bg" />
        <div className="container">
          <p className="section-eyebrow" style={{ marginBottom: 8 }}>My Process</p>
          <h2 className="how-i-build__title">How I Build</h2>
          <p className="how-i-build__sub">
            A systematic, clean, and scalable approach to every project — from first commit to live deploy.
          </p>
          <div className="build-steps">
            {buildSteps.map((step, i) => (
              <div key={step.number} className="build-step glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="build-step__number">{step.number}</div>
                <div className="build-step__content">
                  <h3 className="build-step__title">{step.title}</h3>
                  <p className="build-step__desc">{step.desc}</p>
                </div>
                {i < buildSteps.length - 1 && (
                  <div className="build-step__connector">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="strengths section-padding">
        <div className="container">
          <p className="section-eyebrow" style={{ marginBottom: 8 }}>Core Strengths</p>
          <h2 className="strengths__title">What Makes Me Different</h2>
          <div className="strengths__grid">
            {strengths.map((s) => (
              <div key={s.title} className="strength-card glass-card">
                <div className="strength-card__icon">{s.icon}</div>
                <h3 className="strength-card__title">{s.title}</h3>
                <p className="strength-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

