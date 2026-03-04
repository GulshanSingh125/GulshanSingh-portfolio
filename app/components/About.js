'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Section label + text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">01 / About</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 section-title">
              Who I Am
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m Gulshan Singh, an Information Technology student at ABES Institute of Technology, 
                passionate about building AI-powered systems that solve real-world problems. Currently serving 
                as <span className="text-white">AI Lead at GeoPathos</span>, a DPIIT-recognized HealthTech startup.
              </p>
              <p>
                My expertise spans machine learning, computer vision, and generative AI — from training 
                YOLOv11 models for real-time safety detection to researching multimodal RAG pipelines. 
                I believe great AI engineering means bridging research and deployment.
              </p>
              <p>
                When I&apos;m not training models, I&apos;m solving algorithmic problems on CodeChef (500+ problems, 
                Gold Badge) or contributing as a <span className="text-white">GDGC Core Technical Team Member</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Internships', value: '3+', desc: 'Industry experience' },
              { label: 'Projects', value: '3+', desc: 'AI/ML applications' },
              { label: 'Problems Solved', value: '500+', desc: 'CodeChef' },
              { label: 'CGPA', value: '7.1', desc: 'ABES Institute of Technology' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 card-hover"
              >
                <p className="font-display text-3xl font-bold neon-text">{stat.value}</p>
                <p className="text-white text-sm font-medium mt-1">{stat.label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
