'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">03 / Experience</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 border-neon bg-dark flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_6px_#39ff14]" />
                </div>

                <div className="bg-dark-card border border-dark-border rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-neon font-medium text-sm mt-0.5">{exp.company}</p>
                      {exp.subtitle && (
                        <p className="text-gray-500 text-xs mt-0.5 italic">{exp.subtitle}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-mono">
                        {exp.period}
                      </span>
                      <p className="text-gray-600 text-xs mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-neon mt-1.5 text-xs shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
