'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { certifications } from '../data'

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} className="py-28 bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">06 / Certifications</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
            Credentials
          </h2>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 card-hover flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon text-xl shrink-0">
                🎓
              </div>
              <div className="flex-1">
                <h3 className="text-white font-display font-semibold">{cert.title}</h3>
                <p className="text-gray-500 text-sm mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-mono shrink-0">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
