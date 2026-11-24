import { useState, useEffect, useRef } from 'react'
import { getBotResponse } from './getBotResponse'
import './AiChat.css'

/* ── Quick-action chips ── */
const CHIPS = [
  "What is Khusbu's tech stack?",
  "Tell me about her commercial projects.",
  "What is her work experience?",
]

/* ── Welcome message shown on mount ── */
const WELCOME_MSG = {
  id: 0,
  from: 'bot',
  text: "Hi! I'm Khusbu's portfolio assistant. Ask me about her tech stack, projects, or experience! ✨",
}

/* ── Shared ID counter (simple, fine for client-only) ── */
let _id = 1

/* ─────────────────────────────────────────────────────
   Inline markdown renderer  → handles **bold** & \n
───────────────────────────────────────────────────── */
function MsgText({ text }) {
  // Split on **…** to get bold segments
  const segments = text.split(/(\*\*[^*]+\*\*)/g)
  const nodes = []

  segments.forEach((seg, si) => {
    if (seg.startsWith('**') && seg.endsWith('**')) {
      nodes.push(<strong key={si}>{seg.slice(2, -2)}</strong>)
    } else {
      seg.split('\n').forEach((line, li) => {
        if (li > 0) nodes.push(<br key={`${si}-br-${li}`} />)
        if (line) nodes.push(<span key={`${si}-${li}`}>{line}</span>)
      })
    }
  })

  return <>{nodes}</>
}

/* ─────────────────────────────────────────────────────
   AI CHAT COMPONENT
───────────────────────────────────────────────────── */
export default function AiChat() {
  const [messages, setMessages] = useState([WELCOME_MSG])
  const [input,    setInput]    = useState('')
  const [typing,   setTyping]   = useState(false)
  const bottomRef  = useRef(null)
  const inputRef   = useRef(null)

  /* Auto-scroll whenever messages or typing indicator changes */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  /* Core send logic — shared by input Submit and chip clicks */
  const sendMessage = (text) => {
    const q = text.trim()
    if (!q || typing) return

    const userMsg = { id: _id++, from: 'user', text: q }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    /* 500 ms "typing" delay → feel natural, not instant */
    setTimeout(() => {
      const answer  = getBotResponse(q)
      const botMsg  = { id: _id++, from: 'bot', text: answer }
      setMessages(prev => [...prev, botMsg])
      setTyping(false)
      /* refocus input after reply */
      inputRef.current?.focus()
    }, 520)
  }

  const handleSend    = ()  => sendMessage(input)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="aichat-section section-padding-sm" id="ai-assistant">
      <div className="container">

        {/* ── Section eyebrow ── */}
        <div className="aichat-eyebrow">
          <p className="section-eyebrow">AI Assistant</p>
          <h2 className="aichat-heading">Ask Me Anything</h2>
          <p className="aichat-subheading">
            Get instant answers about Khusbu's skills, projects, and availability.
          </p>
        </div>

        {/* ── Chat card ── */}
        <div className="aichat-card glass-card">

          {/* Header */}
          <div className="aichat-header">
            <div className="aichat-ai-avatar">
              {/* AI spark icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"/>
              </svg>
            </div>
            <div className="aichat-header-info">
              <span className="aichat-title">Ask Khusbu's AI Assistant</span>
              <span className="aichat-status">
                <span className="aichat-status-dot" />
                Online
              </span>
            </div>
            <div className="aichat-header-badge">Powered by KB</div>
          </div>

          {/* Message window */}
          <div className="aichat-messages" role="log" aria-live="polite">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`aichat-row aichat-row--${msg.from}`}
              >
                {msg.from === 'bot' && (
                  <div className="aichat-bot-icon" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"/>
                    </svg>
                  </div>
                )}
                <div className="aichat-bubble">
                  <MsgText text={msg.text} />
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="aichat-row aichat-row--bot">
                <div className="aichat-bot-icon" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"/>
                  </svg>
                </div>
                <div className="aichat-bubble aichat-bubble--typing" aria-label="Typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            {/* Scroll anchor */}
            <div ref={bottomRef} />
          </div>

          {/* Quick-suggestion chips */}
          <div className="aichat-chips" role="group" aria-label="Suggested questions">
            {CHIPS.map(chip => (
              <button
                key={chip}
                className="aichat-chip"
                onClick={() => sendMessage(chip)}
                disabled={typing}
                type="button"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <div className="aichat-input-row">
            <input
              ref={inputRef}
              className="aichat-input"
              type="text"
              placeholder="Ask a question about Khusbu..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={typing}
              aria-label="Your question"
              maxLength={300}
            />
            <button
              className="aichat-send"
              onClick={handleSend}
              disabled={!input.trim() || typing}
              type="button"
              aria-label="Send message"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
