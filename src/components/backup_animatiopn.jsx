// import { useEffect, useRef, useState } from 'react'
// import heroImg from '../assets/hero.png'
// import './IntroScreen.css'

// /* ─────────────────────────────────────────────────────
//    CANVAS HELPERS
// ───────────────────────────────────────────────────── */

// /** Draw a sharp 4-point star at (x,y) with outer radius r */
// function drawStarPath(ctx, r) {
//   const inner = r * 0.18   // tight inner points = crisper star
//   ctx.beginPath()
//   for (let i = 0; i < 8; i++) {
//     const angle = (i * Math.PI / 4) - Math.PI / 4
//     const rad = i % 2 === 0 ? r : inner
//     const px = Math.cos(angle) * rad
//     const py = Math.sin(angle) * rad
//     i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
//   }
//   ctx.closePath()
// }

// /** Render a glowing ✦ star: soft outer halo + crisp bright core */
// function draw4Star(ctx, x, y, r, alpha) {
//   if (r < 0.35 || alpha < 0.025) return
//   ctx.save()
//   ctx.translate(x, y)

//   // Soft halo (larger, transparent)
//   ctx.globalAlpha = alpha * 0.28
//   drawStarPath(ctx, r * 2.8)
//   ctx.fillStyle = 'rgba(167, 139, 250, 1)'
//   ctx.fill()

//   // Bright core
//   ctx.globalAlpha = alpha
//   drawStarPath(ctx, r)
//   ctx.fillStyle = 'rgba(230, 220, 255, 1)'
//   ctx.fill()

//   ctx.restore()
// }

// /* ─────────────────────────────────────────────────────
//    INTRO SCREEN COMPONENT
// ───────────────────────────────────────────────────── */
// export default function IntroScreen({ onEnter }) {
//   const canvasRef = useRef(null)
//   const rafRef = useRef(null)
//   const startRef = useRef(null)
//   const particlesRef = useRef(null)   // sky particles — init once

//   const [showMandala, setShowMandala] = useState(false)
//   const [showButton, setShowButton] = useState(false)
//   const [exiting, setExiting] = useState(false)

//   /* ── Canvas animation loop ── */
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')

//     function resize() {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       particlesRef.current = null           // reinit particles on resize
//     }
//     resize()
//     window.addEventListener('resize', resize, { passive: true })

//     function render(ts) {
//       if (!startRef.current) startRef.current = ts
//       const t = (ts - startRef.current) / 1000   // seconds
//       const W = canvas.width, H = canvas.height

//       ctx.clearRect(0, 0, W, H)

//       /* ── 1. BACKGROUND GRADIENT ── */
//       const bg = ctx.createRadialGradient(W / 2, H * 0.4, 0, W / 2, H * 0.5, Math.max(W, H) * 0.75)
//       bg.addColorStop(0, '#1a0b2e')
//       bg.addColorStop(0.5, '#0d0520')
//       bg.addColorStop(1, '#050816')
//       ctx.fillStyle = bg
//       ctx.fillRect(0, 0, W, H)

//       /* ── 2. SKY PARTICLES (top 44% of screen) ── */
//       if (!particlesRef.current) {
//         particlesRef.current = Array.from({ length: 90 }, () => ({
//           x: Math.random() * W,
//           y: Math.random() * H * 0.44,
//           size: 0.25 + Math.random() * 1.1,
//           phase: Math.random() * Math.PI * 2,
//           speed: 0.4 + Math.random() * 1.6,
//         }))
//       }
//       for (const p of particlesRef.current) {
//         const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * p.speed + p.phase))
//         draw4Star(ctx, p.x, p.y, p.size, tw * 0.55)
//       }

//       /* ── 3. HORIZON GLOW LINE ── */
//       const hy = H * 0.46
//       const hg = ctx.createLinearGradient(0, hy - 50, 0, hy + 50)
//       hg.addColorStop(0, 'rgba(124, 58, 237, 0)')
//       hg.addColorStop(0.5, 'rgba(124, 58, 237, 0.07)')
//       hg.addColorStop(1, 'rgba(124, 58, 237, 0)')
//       ctx.fillStyle = hg
//       ctx.fillRect(0, hy - 50, W, 100)

//       /* ── 4. PERSPECTIVE FLOOR GRID ── */
//       const vx = W / 2       // vanishing point x
//       const numConv = 23           // converging lines (odd = centre line exists)
//       const numDepth = 22          // horizontal depth lines

//       ctx.lineWidth = 0.65

//       // Converging lines: vanishing point → bottom edge
//       for (let i = 0; i < numConv; i++) {
//         const frac = i / (numConv - 1)
//         const bx = W * (-0.08 + frac * 1.16)   // spread wider than viewport
//         // Fade out toward the extreme edges
//         const edgeFade = 1 - Math.abs(frac - 0.5) * 1.6
//         const alpha = Math.max(0, 0.07 + edgeFade * 0.11)
//         ctx.beginPath()
//         ctx.moveTo(vx, hy)
//         ctx.lineTo(bx, H)
//         ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`
//         ctx.stroke()
//       }

//       // Horizontal depth lines + ✦ stars at every intersection
//       for (let j = 0; j < numDepth; j++) {
//         const tD = Math.pow((j + 1) / numDepth, 1.7)   // exponential → tighter near horizon
//         const y = hy + (H - hy) * tD
//         const tLin = (y - hy) / (H - hy)                 // linear interpolation factor

//         // Horizontal line extents (clipped to converging boundary)
//         const outerL = W * -0.08, outerR = W * 1.08
//         const xl = vx + tLin * (outerL - vx)
//         const xr = vx + tLin * (outerR - vx)

//         const hAlpha = 0.05 + tD * 0.28
//         ctx.beginPath()
//         ctx.moveTo(xl, y)
//         ctx.lineTo(xr, y)
//         ctx.strokeStyle = `rgba(124, 58, 237, ${hAlpha})`
//         ctx.stroke()

//         // ✦ Stars at intersections
//         for (let i = 0; i < numConv; i++) {
//           const frac = i / (numConv - 1)
//           const bx = W * (-0.08 + frac * 1.16)
//           const sx = vx + tLin * (bx - vx)             // exact intersection x

//           const starR = Math.max(0.3, 2.6 * tD)
//           const tw = 0.3 + 0.7 * Math.abs(Math.sin(t * 1.1 + i * 0.65 + j * 1.0))
//           const a = tw * Math.min(1, tD * 1.9) * 0.88
//           draw4Star(ctx, sx, y, starR, a)
//         }
//       }

//       rafRef.current = requestAnimationFrame(render)
//     }

//     rafRef.current = requestAnimationFrame(render)
//     return () => {
//       cancelAnimationFrame(rafRef.current)
//       window.removeEventListener('resize', resize)
//     }
//   }, [])

//   /* ── Timed reveal sequence ── */
//   useEffect(() => {
//     const t1 = setTimeout(() => setShowMandala(true), 2500)
//     const t2 = setTimeout(() => setShowButton(true), 3400)
//     return () => { clearTimeout(t1); clearTimeout(t2) }
//   }, [])

//   /* ── Handle click to enter ── */
//   const handleEnter = () => {
//     if (exiting) return
//     setExiting(true)
//     setTimeout(onEnter, 900)
//   }

//   /* ─────────── JSX ─────────── */
//   return (
//     <div className={`intro${exiting ? ' intro--exit' : ''}`}>
//       {/* 60fps canvas background */}
//       <canvas ref={canvasRef} className="intro__canvas" />

//       {/* Centered overlay content */}
//       <div className="intro__center">

//         {/* ── Blooming Mandala ── */}
//         <div className={`mandala${showMandala ? ' mandala--bloom' : ''}`}>

//           {/* Concentric glow rings */}
//           <div className="m-ring m-ring--3" />
//           <div className="m-ring m-ring--2" />
//           <div className="m-ring m-ring--1" />

//           {/* 8 primary petals at 45° increments */}
//           {[0, 45, 90, 135, 180, 225, 270, 315].map((rot, i) => (
//             <div
//               key={`p${rot}`}
//               className="m-petal"
//               style={{ '--rot': `${rot}deg`, '--delay': `${i * 0.055}s` }}
//             />
//           ))}

//           {/* 4 smaller accent petals at 22.5° offsets */}
//           {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rot, i) => (
//             <div
//               key={`ps${rot}`}
//               className="m-petal m-petal--sm"
//               style={{ '--rot': `${rot}deg`, '--delay': `${0.18 + i * 0.04}s` }}
//             />
//           ))}

//           {/* 4 sharp crystalline spikes */}
//           {[0, 90, 180, 270].map((rot, i) => (
//             <div
//               key={`sp${rot}`}
//               className="m-spike"
//               style={{ '--rot': `${rot}deg`, '--delay': `${0.38 + i * 0.045}s` }}
//             />
//           ))}

//           {/* ✦ Star above each primary petal (decorative) */}
//           {[0, 90, 180, 270].map((rot, i) => (
//             <div
//               key={`star${rot}`}
//               className="m-orbit-star"
//               style={{ '--rot': `${rot}deg`, '--delay': `${0.5 + i * 0.04}s` }}
//             >
//               ✦
//             </div>
//           ))}

//           {/* Profile image core */}
//           <div className="m-core">
//             <img
//               src={heroImg}
//               alt="Khusbu Sah"
//               className="m-avatar"
//             /* Replace src with your photo path, e.g. src="/your-photo.jpg" */
//             />
//             {/* Fallback initials shown if image missing */}
//             <div className="m-avatar-fallback">KS</div>
//           </div>
//         </div>

//         {/* ── Name tag below mandala ── */}
//         <div className={`intro__name${showMandala ? ' intro__name--show' : ''}`}>
//           <span className="intro__name-text">Khusbu Sah</span>
//           <span className="intro__name-role">Full-Stack Developer</span>
//         </div>

//         {/* ── Enter button ── */}
//         <div className={`intro__enter${showButton ? ' intro__enter--show' : ''}`}>
//           <button className="enter-btn" onClick={handleEnter}>
//             <span className="enter-star-left">✦</span>
//             Click to Start Here
//             <span className="enter-star-right">✦</span>
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }

