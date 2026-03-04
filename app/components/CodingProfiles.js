'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CodingProfiles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="coding" ref={ref} className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">07 / Coding</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
            Coding Profiles
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-xl p-8 card-hover"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* CodeChef logo text */}
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">CodeChef</h3>
                <p className="text-gray-500 text-sm font-mono mt-0.5">abit231520081</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold neon-text">500+</p>
                <p className="text-gray-600 text-xs mt-1">Problems Solved</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-amber-400">🥇</p>
                <p className="text-gray-600 text-xs mt-1">Gold Badge</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-dark-border">
            <div className="flex flex-wrap gap-2">
              {['Problem Solver', 'Gold Badge', '500+ Rated Problems', 'Consistent Coder'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
