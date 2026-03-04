'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { blogPosts, profile } from '../data'

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" ref={ref} className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">05 / Blog</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white section-title">
              Blog & Insights
            </h2>
          </div>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-neon text-sm font-mono transition-colors"
          >
            All posts on Medium →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="group bg-dark-card border border-dark-border rounded-xl p-6 card-hover flex flex-col"
            >
              {/* Medium icon */}
              <div className="w-8 h-8 mb-4 text-gray-600 group-hover:text-neon transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>

              <span className="text-gray-600 text-xs font-mono mb-2">{post.date}</span>
              <h3 className="font-display font-bold text-white text-base mb-3 group-hover:text-neon transition-colors leading-snug flex-1">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {post.description}
              </p>

              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 text-neon text-sm font-mono hover:gap-3 transition-all"
              >
                Read on Medium
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
