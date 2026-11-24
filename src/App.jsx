



import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import PageTransition from './components/PageTransition'
import IntroScreen from './components/IntroScreen'
import AiChat from './components/AiChat'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './index.css'

/* ── Scroll to top after page curtain completes ── (ye function dekhna he)*/
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const t = setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}

/* ── Main portfolio app (always rendered, hidden behind intro) ── */
function AppContent() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      {/* <PageTransition /> */}
      <Navbar />
      <main key={location.pathname} className="page-enter" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <AiChat />
      <Footer />
    </>
  )
}

/* ── Root App — manages intro vs. portfolio visibility ── */
export default function App() {
  // Show intro on every fresh page load
  const [introGone, setIntroGone] = useState(false)

  return (
    <BrowserRouter>
      {/* Intro overlay — fixed on top, removed after enter click */}
      {!introGone && (
        <IntroScreen onEnter={() => setIntroGone(true)} />
      )}

      {/* Portfolio — rendered underneath (ready immediately) */}
      <AppContent />
    </BrowserRouter>
  )
}