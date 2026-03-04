'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-28 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">02 / Skills</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
            Technical Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-neon text-lg font-mono">{group.icon}</span>
                <h3 className="text-white font-display font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-neon/5 border border-neon/10 text-gray-300 text-xs font-mono group-hover:border-neon/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
