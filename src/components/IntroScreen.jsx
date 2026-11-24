import { useEffect, useState } from 'react'
import './IntroScreen.css'

const TECH_STACK = [
  { name: 'HTML5', color: '#f97316', short: '</>' },
  { name: 'CSS3', color: '#38bdf8', short: '{ }' },
  { name: 'JavaScript', color: '#facc15', short: 'JS' },
  { name: 'React.js', color: '#61dafb', short: '⚛' },
  { name: 'Node.js', color: '#4ade80', short: 'Node' },
  { name: 'MongoDB', color: '#10b981', short: 'DB' },
]

export default function IntroScreen({ onEnter }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2400)
    const doneTimer = setTimeout(() => onEnter(), 3050)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onEnter])

  return (
    <div className={`ux-intro${exiting ? ' ux-intro--exit' : ''}`} aria-hidden="true">
      {/* Subtle Ambient UI Grid */}
      <div className="ux-intro__grid" />

      <div className="ux-intro__wrap">
        {/* Top Minimal Eyebrow */}
        <div className="ux-intro__eyebrow">
          <span className="ux-intro__spark">✦</span>
          <span>KHUSBU SAH · PORTFOLIO</span>
          <span className="ux-intro__spark">✦</span>
        </div>

        {/* Floating Hero Words with Animated UI/UX Aurora + Code Inside */}
        <div className="ux-intro__title-stage">
          <h1 className="ux-intro__title">Full-Stack Developer</h1>
          {/* Soft Glowing Reflection Under Words */}
          <div className="ux-intro__title-glow" aria-hidden="true">
            Full-Stack Developer
          </div>
        </div>

        {/* Clean UI/UX Tagline */}
        <p className="ux-intro__bio">
          Crafting fast, interactive &amp; scalable web experiences with modern frontend &amp; backend architecture.
        </p>

        {/* Sleek Interactive Tech Badges */}
        <div className="ux-intro__tech-bar">
          {TECH_STACK.map((item, idx) => (
            <div
              key={item.name}
              className="ux-intro__pill"
              style={{
                '--accent': item.color,
                animationDelay: `${0.18 + idx * 0.07}s`,
              }}
            >
              <span className="ux-intro__pill-icon">{item.short}</span>
              <span className="ux-intro__pill-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}