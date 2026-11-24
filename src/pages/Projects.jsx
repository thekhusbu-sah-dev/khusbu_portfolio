import './Projects.css'

const projects = [
  {
    id: 1,
    emoji: '🏗️',
    title: 'Chandan Tiles Website',
    subtitle: 'Architectural Ceramics Showcase Platform',
    desc: 'A high-performance, multi-page commercial catalog website for a premium tiles company. Features an extensive product catalog with advanced sorting and filtering, responsive image galleries, and a clean UI optimized for both desktop and mobile users. Built end-to-end as a 7–10 page production platform.',
    tags: ['React.js', 'Modern CSS', 'REST APIs', 'Responsive Design', 'JavaScript ES6+'],
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.08))',
    accentColor: 'var(--accent-cyan)',
    category: 'Commercial Catalog',
    features: ['Product Catalog', 'Advanced Sorting', 'Responsive Gallery', 'Multi-Page Layout', 'Mobile-First Design'],
  },
  {
    id: 2,
    emoji: '💎',
    title: 'Gold & Jewelry Website',
    subtitle: 'Luxury E-Commerce Platform',
    desc: 'A luxury e-commerce experience designed for a premium jewelry brand. Features curated product collections, dynamic pricing modules, customer inquiry flows, and a refined premium UX that matches the brand\'s high-end positioning. Full MERN stack implementation with production-level polish.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'E-Commerce', 'REST APIs'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.08))',
    accentColor: '#F59E0B',
    category: 'E-Commerce Platform',
    features: ['Product Collections', 'Dynamic Pricing', 'Inquiry Flow', 'MongoDB Backend', 'Premium UX'],
  },
  {
    id: 3,
    emoji: '🎓',
    title: 'Nirman Skill Academy Portal',
    subtitle: 'Education & Vocational Training Portal',
    desc: 'A comprehensive multi-page education portal for a vocational training academy. Features course enrollment forms, course listings, trainer profiles, contact collection forms, and an admin-friendly structure. Built as a full-stack application with a complete backend API layer.',
    tags: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Education Tech'],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.08))',
    accentColor: 'var(--accent-purple)',
    category: 'Education Portal',
    features: ['Course Enrollment', 'Course Listings', 'Trainer Profiles', 'Contact Forms', 'Full-Stack API'],
  },
  {
    id: 4,
    emoji: '🏠',
    title: 'Rent & Real Estate Marketplace',
    subtitle: 'Property Listing & Rental Marketplace',
    desc: 'A full-featured property listing and rental marketplace enabling property owners to list their spaces and renters to search with intelligent filtering. Features property cards, inquiry forms, filter systems by price/location/type, and a clean, conversion-optimized UX.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Marketplace', 'Real Estate'],
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))',
    accentColor: '#10B981',
    category: 'Marketplace',
    features: ['Property Listings', 'Smart Filtering', 'Inquiry Forms', 'Location-Based Search', 'MERN Stack'],
  },
]

function ProjectCard({ project }) {
  return (
    <div className="full-project-card glass-card" id={`project-${project.id}`}>
      <div className="full-project-card__visual" style={{ background: project.gradient }}>
        <div className="full-project-card__emoji">{project.emoji}</div>
        <span className="full-project-card__category">{project.category}</span>
      </div>

      <div className="full-project-card__body">
        <div className="full-project-card__header">
          <div>
            <h2 className="full-project-card__title">{project.title}</h2>
            <p className="full-project-card__subtitle">{project.subtitle}</p>
          </div>
          <div className="full-project-card__number" style={{ color: project.accentColor }}>
            0{project.id}
          </div>
        </div>

        <p className="full-project-card__desc">{project.desc}</p>

        <div className="full-project-card__features">
          <h4 className="full-project-card__features-title">Key Features</h4>
          <ul className="full-project-card__features-list">
            {project.features.map(f => (
              <li key={f}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: project.accentColor }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="full-project-card__footer">
          <div className="full-project-card__tags">
            {project.tags.map(t => (
              <span key={t} className="tech-badge" style={{ borderColor: `${project.accentColor}30`, color: project.accentColor === 'var(--accent-cyan)' ? 'var(--accent-cyan)' : project.accentColor }}>
                {t}
              </span>
            ))}
          </div>
          <div className="full-project-card__actions">
            <a href="#" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
            <a href="#" className="btn-primary" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="projects page-enter" style={{ paddingTop: 80 }}>

      {/* Page Header */}
      <section className="page-header section-padding">
        <div className="mesh-bg" />
        <div className="container page-header__inner">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="page-header__title">
            Commercial <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-header__sub">
            4 fully built commercial platforms — multi-page, production-deployed, and client-ready.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="projects-stats section-padding-sm">
        <div className="container">
          <div className="projects-stats__grid">
            <div className="projects-stat">
              <span className="projects-stat__val gradient-text">4</span>
              <span className="projects-stat__label">Projects Completed</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat__val gradient-text">7–10</span>
              <span className="projects-stat__label">Pages Per Project</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat__val gradient-text">MERN</span>
              <span className="projects-stat__label">Full-Stack Architecture</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat__val gradient-text">100%</span>
              <span className="projects-stat__label">Production-Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="projects-list section-padding">
        <div className="container">
          <div className="projects-list__grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

