'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailto = `mailto:${profile.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-black/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">08 / Contact</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg">
            Have a project in mind, a collaboration idea, or just want to chat about AI? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                value: profile.email,
                href: `mailto:${profile.email}`,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'gulshansingh125',
                href: profile.linkedin,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
                label: 'GitHub',
                value: 'GulshanSingh125',
                href: profile.github,
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-xl hover:border-neon/40 hover:bg-neon/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon shrink-0">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{contact.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-neon transition-colors">{contact.value}</p>
                </div>
              </a>
            ))}

            {/* Download resume CTA */}
            <div className="p-5 bg-neon/5 border border-neon/20 rounded-xl">
              <p className="text-gray-400 text-sm mb-3">Looking to hire? Download my resume directly.</p>
              <a
                href="/GulshanSingh_Resume2026.pdf"
                download="GulshanSingh_Resume2026.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon text-black font-display font-bold text-sm rounded hover:bg-neon/90 transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center bg-dark-card border border-neon/30 rounded-xl p-8 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center text-neon text-3xl mx-auto mb-4">✓</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Your email client should have opened. Thanks for reaching out!</p>
                </div>
              </div>
            ) : (
              <div className="bg-dark-card border border-dark-border rounded-xl p-6 space-y-4">
                <div>
                  <label className="block text-gray-500 text-xs font-mono uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-mono uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-mono uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-700 resize-none transition-colors"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-neon text-black font-display font-bold text-sm rounded hover:bg-neon/90 transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                >
                  Send Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
