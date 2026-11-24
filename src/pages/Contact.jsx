import { useState } from 'react'
import './Contact.css'

const contactCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'thekhusbu-sah-dev',
    href: 'https://github.com/thekhusbu-sah-dev',
    color: 'var(--accent-cyan)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'khusbu@example.com',
    href: 'mailto:khusbu@example.com',
    color: 'var(--accent-blue)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.61 17.6z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    color: 'var(--accent-purple)',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact page-enter" style={{ paddingTop: 80 }}>

      {/* Page Header */}
      <section className="page-header section-padding">
        <div className="mesh-bg" />
        <div className="container page-header__inner">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="page-header__title">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="page-header__sub">
            Have a project, a job opportunity, or just want to talk tech? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="contact-body section-padding">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Form */}
            <div className="contact-form-wrap">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send a Message</h2>
                <p className="contact-form-sub">Fill in the details below and I'll get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="contact-success glass-card">
                  <div className="contact-success__icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className={`form-field ${focused === 'name' ? 'form-field--focused' : ''} ${formData.name ? 'form-field--filled' : ''}`}>
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <div className="form-input-wrap">
                        <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Khusbu Sah"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                    </div>

                    <div className={`form-field ${focused === 'email' ? 'form-field--focused' : ''} ${formData.email ? 'form-field--filled' : ''}`}>
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <div className="form-input-wrap">
                        <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`form-field ${focused === 'subject' ? 'form-field--focused' : ''} ${formData.subject ? 'form-field--filled' : ''}`}>
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <div className="form-input-wrap">
                      <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-input"
                        placeholder="Full-Time Role / Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>
                  </div>

                  <div className={`form-field ${focused === 'message' ? 'form-field--focused' : ''} ${formData.message ? 'form-field--filled' : ''}`}>
                    <label className="form-label" htmlFor="message">Message</label>
                    <div className="form-input-wrap">
                      <textarea
                        id="message"
                        name="message"
                        className="form-input form-textarea"
                        placeholder="Tell me about your project, team, or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn-primary contact-submit ${loading ? 'contact-submit--loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="btn-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="contact-info">
              <div className="contact-info__section">
                <h3 className="contact-info__title">Contact Details</h3>
                <div className="contact-cards">
                  {contactCards.map((card) => (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-card glass-card"
                      style={{ '--card-accent': card.color }}
                    >
                      <div className="contact-card__icon">{card.icon}</div>
                      <div className="contact-card__text">
                        <span className="contact-card__label">{card.label}</span>
                        <span className="contact-card__value">{card.value}</span>
                      </div>
                      <svg className="contact-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-resume glass-card">
                <div className="contact-resume__icon">📄</div>
                <div className="contact-resume__text">
                  <h4>Download Resume</h4>
                  <p>Get my full CV as a PDF document.</p>
                </div>
                <a href="/resume.pdf" download className="btn-primary" style={{ fontSize: '0.85rem', padding: '11px 20px', flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  PDF
                </a>
              </div>

              <div className="contact-availability glass-card">
                <div className="contact-avail-dot" />
                <div>
                  <h4 className="contact-avail-title">Currently Available</h4>
                  <p className="contact-avail-desc">Open to Full-Time roles and exciting projects. Response time: within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

