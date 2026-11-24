/**
 * getBotResponse.js
 * ─────────────────────────────────────────────────────────────
 * Keyword-matched portfolio knowledge base.
 * Returns a plain string with **bold** markdown and \n newlines.
 *
 * To connect to a real API later, replace this function with:
 *   export async function getBotResponse(q) {
 *     const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ q }) })
 *     return (await res.json()).answer
 *   }
 * ─────────────────────────────────────────────────────────────
 */

const KB = [
  /* ── About / Who ── */
  {
    keys: ['who is', 'about khusbu', 'about her', 'tell me about', 'introduce', 'khusbu sah', 'portfolio'],
    answer:
      `**Khusbu Sah** is a passionate Full-Stack Web Developer based in Ahmedabad, India. 🚀\n\nShe specializes in building high-performance, fully responsive, production-ready web applications — from pixel-perfect UIs to robust REST APIs and MongoDB database integrations.\n\nShe believes in **clean code first**, fast turnarounds, and end-to-end project ownership.`,
  },

  /* ── Tech Stack / Skills ── */
  {
    keys: ['tech stack', 'tech', 'stack', 'skill', 'language', 'framework', 'tools', 'know', 'technologies', 'html', 'css', 'react', 'node', 'mongodb', 'javascript', 'express', 'php', 'mysql', 'tailwind', 'redux', 'api'],
    answer:
      `Khusbu is proficient across the **full MERN stack** and more:\n\n🎨 **Frontend:** HTML5, CSS3, JavaScript (ES6+), React.js, Redux Toolkit, Tailwind CSS\n⚙️ **Backend:** Node.js, Express.js, PHP\n🗄️ **Database:** MongoDB, MySQL\n🔗 **APIs:** REST API design & integration\n🚀 **Tools & DevOps:** Git, GitHub, Vercel, VS Code`,
  },

  /* ── Projects ── */
  {
    keys: ['project', 'build', 'built', 'made', 'tiles', 'jewel', 'jwell', 'nirman', 'real estate', 'food', 'rent', 'chandan', 'commercial', 'website', 'platform', 'app', 'deliver', 'work done'],
    answer:
      `Khusbu has delivered **5 full-scale commercial platforms** (7–10 pages each):\n\n🏗️ **Chandan Tiles** — Ceramic catalog with responsive galleries & sorting\n💎 **Shree Jwell Studio** — Gold & jewelry e-commerce with dynamic pricing\n🎓 **Nirman Skill Academy** — Vocational training portal with enrollment flows\n🏠 **Rent & Real Estate** — Property listing marketplace with smart filters\n🍔 **Full-Stack Food Ordering App** — Complete ordering system with Node.js backend\n\nAll projects are fully responsive and deployed on Vercel.`,
  },

  /* ── Experience ── */
  {
    keys: ['experience', 'work experience', 'job', 'career', 'professional', 'isourcing', 'company', 'ahmedabad', 'employ', 'year', 'intern', 'freelance', 'industry'],
    answer:
      `Khusbu has **1+ year** of professional hands-on experience:\n\n🏢 **Company:** iSourcingSolutions, Ahmedabad\n👩‍💻 **Role:** Full-Stack & Frontend Web Developer\n\n**Key responsibilities:**\n• Built 7–10 page commercial web apps end-to-end\n• Designed & integrated REST APIs with React frontends\n• Managed MongoDB databases with Mongoose\n• Deployed projects live on **Vercel** via Git/GitHub\n• Diagnosed & resolved bugs across frontend & backend\n\nShe also delivers **freelance commercial projects** independently.`,
  },

  /* ── Contact / Hire / Availability ── */
  {
    keys: ['contact', 'hire', 'available', 'reach', 'email', 'github', 'connect', 'opportunity', 'role', 'recruit', 'opening', 'apply', 'resume', 'cv', 'thekhusbusah'],
    answer:
      `Khusbu is **available for Full-Stack or Frontend Developer roles!** 🟢\n\n📧 **Contact form** — Use the Contact page on this site\n🐙 **GitHub** — github.com/thekhusbu-sah-dev\n🌐 **Domain** — thekhusbusah.com\n\nShe typically responds within **24 hours** and is open to both full-time positions and freelance projects.`,
  },
]

/**
 * Returns a formatted answer string for a given user question.
 * @param {string} userInput
 * @returns {string}
 */
export function getBotResponse(userInput) {
  const q = userInput.toLowerCase().trim()

  for (const entry of KB) {
    if (entry.keys.some(k => q.includes(k))) {
      return entry.answer
    }
  }

  return `I can help you learn about Khusbu's **tech stack**, **projects**, **experience**, or **contact details**. 💡\n\nTry clicking one of the suggested questions below, or ask something like "What React projects has she built?"!`
}
