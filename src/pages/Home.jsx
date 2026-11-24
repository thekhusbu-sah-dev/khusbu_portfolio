import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isText = typeof target === 'string'
    if (isText) { el.textContent = prefix + target + suffix; return }

    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    let raf
    const tick = () => {
      start = Math.min(start + step, target)
      el.textContent = prefix + Math.floor(start) + suffix
      if (start < target) raf = requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { tick(); observer.disconnect() }
    })
    observer.observe(el)
    return () => { cancelAnimationFrame(raf); observer.disconnect() }
  }, [target, suffix, prefix])
  return <span ref={ref} className="metric-counter">{prefix}0{suffix}</span>
}

/* ── Project Card ── */
function ProjectCard({ title, desc, tags, emoji, gradient }) {
  return (
    <div className="project-card glass-card">
      <div className="project-card__emoji" style={{ background: gradient }}>{emoji}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{desc}</p>
      <div className="project-card__tags">
        {tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
    </div>
  )
}

/* ── Service Card ── */
function ServiceCard({ icon, title, desc, color }) {
  return (
    <div className="service-card glass-card">
      <div className="service-card__icon" style={{ '--icon-color': color }}>{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <div className="service-card__arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  )
}

const techRowA = ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs']
const techRowB = ['Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Vercel', 'VS Code', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Vercel', 'VS Code']

export default function Home() {
  return (
    <div className="home">

      {/* ══ ROW 1: HERO ══ */}
      <section className="hero section-padding">
        <div className="mesh-bg" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        {/* Floating badges */}
        <div className="floating-badge hero__float hero__float--1" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <span className="badge-dot" /> React.js
        </div>
        <div className="floating-badge hero__float hero__float--2" style={{ animation: 'float2 8s ease-in-out infinite' }}>
          <span className="badge-dot" style={{ background: '#68A063' }} /> Node.js
        </div>
        <div className="floating-badge hero__float hero__float--3" style={{ animation: 'float3 7s ease-in-out infinite' }}>
          <span className="badge-dot" style={{ background: '#47A248' }} /> MongoDB
        </div>
        <div className="floating-badge hero__float hero__float--4" style={{ animation: 'float 9s ease-in-out infinite 1s' }}>
          <span className="badge-dot" style={{ background: '#3B82F6' }} /> REST APIs
        </div>

        <div className="container hero__content">
          {/* Status pill */}
          <div className="hero__status">
            <span className="hero__status-dot" />
            Available for Full-Time Roles
          </div>

          {/* Headline */}
          <h1 className="hero__title">
            Building <span className="gradient-text">Scalable,</span>
            <br />
            High-Impact <span className="gradient-text">Web Applications</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__sub">
            Hi, I'm <strong>Khusbu Sah</strong> — Full-Stack Developer crafting high-performance,
            responsive, and production-ready digital experiences.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <Link to="/projects" className="btn-primary">
              Explore Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Let's Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </Link>
          </div>

          {/* Quick tags */}
          <div className="hero__tags">
            {['Full-Stack', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Production-Ready'].map(t => (
              <span key={t} className="hero__tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-inner">
            <div className="hero__scroll-dot" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ══ ROW 2: METRICS ══ */}
      <section className="metrics section-padding-sm">
        <div className="metrics__bg" />
        <div className="container">
          <div className="metrics__grid">
            <div className="metrics__item">
              <div className="metrics__value">
                <AnimatedCounter target={1} suffix="+" />
                <span className="metrics__unit">Year</span>
              </div>
              <p className="metrics__label">Professional Industry Experience</p>
            </div>
            <div className="metrics__divider" />
            <div className="metrics__item">
              <div className="metrics__value">
                <AnimatedCounter target={4} suffix="+" />
              </div>
              <p className="metrics__label">Multi-Page Commercial Platforms</p>
              <p className="metrics__note">7–10 pages each</p>
            </div>
            <div className="metrics__divider" />
            <div className="metrics__item">
              <div className="metrics__value">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <p className="metrics__label">Responsive & Production-Ready Code</p>
            </div>
            <div className="metrics__divider" />
            <div className="metrics__item">
              <div className="metrics__value">
                <AnimatedCounter target="End-to-End" />
              </div>
              <p className="metrics__label">API & Database Integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ROW 3: TECH TICKER ══ */}
      <section className="ticker-section section-padding-sm">
        <div className="container">
          <p className="section-eyebrow" style={{ marginBottom: 32 }}>Tech Stack</p>
        </div>
        <div className="ticker-wrap">
          <div className="ticker-row">
            <div className="ticker-inner ticker-inner--fwd">
              {techRowA.map((tech, i) => (
                <div key={i} className="ticker-item">
                  <span className="ticker-dot" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="ticker-row" style={{ marginTop: 16 }}>
            <div className="ticker-inner ticker-inner--rev">
              {techRowB.map((tech, i) => (
                <div key={i} className="ticker-item ticker-item--blue">
                  <span className="ticker-dot ticker-dot--blue" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ROW 4: FEATURED PROJECTS ══ */}
      <section className="featured section-padding">
        <div className="mesh-bg" />
        <div className="container">
          <div className="featured__header">
            <div>
              <p className="section-eyebrow">Featured Work</p>
              <h2 className="featured__title">Featured Commercial Work</h2>
              <p className="featured__sub">
                Real-world production platforms built from scratch — end to end.
              </p>
            </div>
            <Link to="/projects" className="featured__all-link">
              View All Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="featured__grid">
            <ProjectCard
              emoji="🏗️"
              gradient="linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1))"
              title="Chandan Tiles Showcase Website"
              desc="High-performance multi-page commercial catalog with extensive product sorting, responsive galleries, and seamless user experience across all devices."
              tags={['React.js', 'Modern CSS', 'REST APIs', 'Responsive']}
            />
            <ProjectCard
              emoji="💎"
              gradient="linear-gradient(135deg, rgba(245,158,11,0.2), rgba(239,68,68,0.1))"
              title="Gold & Jewelry E-Commerce Platform"
              desc="Luxury commercial platform featuring curated product collections, dynamic pricing modules, and customer inquiry flows with premium UX polish."
              tags={['React.js', 'Node.js', 'MongoDB', 'E-Commerce']}
            />
          </div>
        </div>
      </section>

      {/* ══ ROW 5: SERVICES ══ */}
      <section className="services section-padding">
        <div className="container">
          <p className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>What I Bring</p>
          <h2 className="services__title">What I Bring to the Team</h2>
          <p className="services__sub">
            Full-stack expertise from pixel-perfect UIs to robust APIs and production deployments.
          </p>
          <div className="services__grid">
            <ServiceCard
              color="var(--accent-cyan)"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="m9 9 5 5-5 5"/>
                </svg>
              }
              title="Frontend Engineering"
              desc="Pixel-perfect UI, mobile-first responsiveness, and smooth micro-animations that elevate user experience and brand perception."
            />
            <ServiceCard
              color="var(--accent-blue)"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>
              }
              title="API & Backend Integration"
              desc="Clean RESTful architecture, MongoDB database management, Express.js APIs, and robust error handling for reliable production systems."
            />
            <ServiceCard
              color="var(--accent-purple)"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m13 2-2 2.5H8l2 2.5-1.5 3.5 2.5-1.5L13 11l1-2.5 2.5 1.5L15 6.5 17 4h-3L13 2z"/>
                  <path d="M5 22 3 12l7.5 2-1.5-4L12 8l1 2 7.5-2L18 22"/>
                </svg>
              }
              title="Performance & Optimization"
              desc="Bug fixing, fast loading speeds, clean code conventions, and seamless Vercel deployments that keep applications running at peak efficiency."
            />
          </div>
        </div>
      </section>

      {/* ══ ROW 6: CTA BANNER ══ */}
      <section className="cta-banner section-padding">
        <div className="container">
          <div className="cta-banner__card glass-card">
            <div className="cta-banner__mesh" />
            <div className="cta-banner__content">
              <span className="section-eyebrow" style={{ marginBottom: 12 }}>Let's Build Together</span>
              <h2 className="cta-banner__title">
                Have a project in mind or looking for a
                <span className="gradient-text"> full-stack developer?</span>
              </h2>
              <p className="cta-banner__sub">
                I am ready to bring value to your engineering team with clean code and fast turnarounds.
              </p>
              <div className="cta-banner__actions">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="/resume.pdf" download className="btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="cta-banner__visual">
              <div className="cta-banner__code glass-card">
                <div className="cta-code__header">
                  <span className="cta-code__dot" style={{ background: '#EF4444' }} />
                  <span className="cta-code__dot" style={{ background: '#F59E0B' }} />
                  <span className="cta-code__dot" style={{ background: '#10B981' }} />
                  <span className="cta-code__filename">khusbu.js</span>
                </div>
                <pre className="cta-code__body"><code>{`const developer = {
  name: "Khusbu Sah",
  role: "Full-Stack Dev",
  available: true,
  skills: [
    "React", "Node.js",
    "MongoDB", "REST APIs"
  ],
  experience: "1+ Year",
  openTo: "Full-Time Roles"
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

