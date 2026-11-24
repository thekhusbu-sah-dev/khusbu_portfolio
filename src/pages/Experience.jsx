import './Experience.css'

const frontendSkills = [
  'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Responsive Design', 'Flexbox', 'CSS Grid', 'UI Animations', 'Component Architecture'
]

const backendSkills = [
  'Node.js', 'Express.js', 'MongoDB', 'REST API Design',
  'Database Modeling', 'Error Handling', 'Mongoose ODM', 'API Integration'
]

const toolingSkills = [
  'Git', 'GitHub', 'Vercel', 'VS Code', 'npm', 'Chrome DevTools',
  'Postman', 'Vite', 'Version Control', 'CI/CD Deployments'
]

function SkillGroup({ title, skills, accent }) {
  return (
    <div className="skill-group glass-card">
      <div className="skill-group__header" style={{ '--acc': accent }}>
        <div className="skill-group__indicator" />
        <h3 className="skill-group__title">{title}</h3>
      </div>
      <div className="skill-group__badges">
        {skills.map(s => (
          <span key={s} className="skill-badge" style={{ '--acc': accent }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="experience page-enter">
      <div style={{ paddingTop: 80 }}>

        {/* Page Header */}
        <section className="page-header section-padding">
          <div className="mesh-bg" />
          <div className="container page-header__inner">
            <p className="section-eyebrow">Professional Journey</p>
            <h1 className="page-header__title">
              Experience &amp; <span className="gradient-text">Skills</span>
            </h1>
            <p className="page-header__sub">
              Real-world experience building production-grade platforms end to end.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="exp-timeline section-padding">
          <div className="container">
            <p className="section-eyebrow">Work History</p>
            <h2 className="exp-section-title">Professional Experience</h2>

            <div className="timeline">
              <div className="timeline__line" />
              <div className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card glass-card">
                  <div className="timeline__card-header">
                    <div className="timeline__company-badge">
                      <div className="timeline__company-logo">iS</div>
                      <div>
                        <h3 className="timeline__company">iSourcingSolutions</h3>
                        <p className="timeline__location">Ahmedabad, Gujarat, India</p>
                      </div>
                    </div>
                    <div className="timeline__meta">
                      <span className="timeline__role">Full-Stack Developer</span>
                      <span className="timeline__period">1 Year • 2024 – Present</span>
                    </div>
                  </div>

                  <div className="timeline__body">
                    <p className="timeline__summary">
                      Worked as a key contributor in a professional software team, independently and collaboratively
                      building commercial-grade multi-page web applications that serve real clients.
                    </p>

                    <div className="timeline__achievements">
                      <h4 className="timeline__achievements-title">Key Responsibilities</h4>
                      <ul className="timeline__list">
                        <li>
                          <span className="timeline__list-dot" />
                          <span>Single-handedly and collaboratively developed <strong>multi-page commercial web applications</strong> (7–10 pages each) from requirements gathering to live deployment.</span>
                        </li>
                        <li>
                          <span className="timeline__list-dot" />
                          <span>Designed and integrated <strong>REST APIs</strong> with reactive React frontend components, enabling dynamic data flows and seamless user experiences.</span>
                        </li>
                        <li>
                          <span className="timeline__list-dot" />
                          <span><strong>Diagnosed and resolved bugs</strong> across frontend and backend layers, optimizing load performance and improving overall application stability.</span>
                        </li>
                        <li>
                          <span className="timeline__list-dot" />
                          <span>Managed <strong>MongoDB databases</strong> with Mongoose — schema design, data modeling, and query optimization for production-ready systems.</span>
                        </li>
                        <li>
                          <span className="timeline__list-dot" />
                          <span>Handled full <strong>version control via Git/GitHub</strong> with structured commit history and collaborative branching, deployed live applications to <strong>Vercel</strong>.</span>
                        </li>
                        <li>
                          <span className="timeline__list-dot" />
                          <span>Implemented <strong>mobile-first, fully responsive</strong> interfaces ensuring pixel-perfect display across all device sizes and browsers.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="timeline__tech-used">
                      {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'Vercel', 'JavaScript ES6+'].map(t => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education/Training node */}
              <div className="timeline__item">
                <div className="timeline__dot timeline__dot--sm" />
                <div className="timeline__card timeline__card--sm glass-card">
                  <div className="timeline__card-header" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 className="timeline__company" style={{ fontSize: '1rem' }}>Full-Stack Development Training</h3>
                      <p className="timeline__location">Self-Directed Learning & Bootcamp</p>
                    </div>
                    <span className="timeline__period">Pre-2024</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginTop: 12 }}>
                    Deep-dived into the MERN stack, REST API design patterns, and modern frontend engineering practices. Built multiple personal projects to solidify knowledge before entering the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="skills-matrix section-padding">
          <div className="skills-matrix__bg" />
          <div className="container">
            <p className="section-eyebrow">Technical Expertise</p>
            <h2 className="exp-section-title">Skills Matrix</h2>
            <p className="skills-matrix__sub">
              A categorized overview of the technologies and tools I work with professionally.
            </p>
            <div className="skills-grid">
              <SkillGroup
                title="Frontend Development"
                skills={frontendSkills}
                accent="var(--accent-cyan)"
              />
              <SkillGroup
                title="Backend & Database"
                skills={backendSkills}
                accent="var(--accent-blue)"
              />
              <SkillGroup
                title="Developer Tooling"
                skills={toolingSkills}
                accent="var(--accent-purple)"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

