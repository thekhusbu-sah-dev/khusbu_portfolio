import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

/* ── 4-point star SVG — inline so zero dependencies ── */
function StarIcon() {
  return (
    <svg
      className="nav-star"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Classic ✦ four-pointed star via two overlapping rotated diamonds */}
      <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
    </svg>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">KS</span>
          <span className="navbar__logo-text">Khusbu Sah</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {/* Active pill wraps label + star together */}
                {isActive ? (
                  <span className="navbar__active-pill">
                    <StarIcon />
                    {label}
                  </span>
                ) : (
                  label
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn-primary navbar__cta">
            Hire Me
          </Link>
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {isActive ? (
                  <span className="navbar__mobile-active-pill">
                    <StarIcon />
                    {label}
                  </span>
                ) : (
                  label
                )}
              </Link>
            )
          })}
          <Link to="/contact" className="btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}

