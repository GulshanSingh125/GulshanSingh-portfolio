'use client'
import { motion } from 'framer-motion'
import { profile } from '../data'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon opacity-[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-[0.05] blur-3xl" />
        {/* Diagonal line accents */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon/10 to-transparent" style={{left: '60%'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            {/* Status badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse inline-block" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <p className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-2">Hello, I&apos;m</p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                <span className="text-white">Gulshan</span>
                <br />
                <span className="neon-text">Singh</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={item}>
              <p className="text-gray-400 font-mono text-sm lg:text-base">
                AI Engineer<span className="text-neon"> · </span>
                ML Developer<span className="text-neon"> · </span>
                Computer Vision
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h2 variants={item} className="text-gray-200 text-lg lg:text-xl leading-relaxed font-body max-w-lg">
              {profile.heroHeadline}
            </motion.h2>

            {/* Description */}
            <motion.p variants={item} className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-lg">
              {profile.heroDesc}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-neon text-black font-display font-bold text-sm rounded hover:bg-neon/90 transition-all duration-200 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
              >
                View Projects
              </a>
              <a
                href="/GulshanSingh_Resume2026.pdf"
                download="GulshanSingh_Resume2026.pdf"
                className="px-6 py-3 border border-neon/50 text-neon font-display font-bold text-sm rounded hover:border-neon hover:bg-neon/5 transition-all duration-200 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/10 text-gray-300 font-display font-bold text-sm rounded hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-neon/10 blur-2xl scale-110" />
              {/* Ring */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-neon/40 p-1 shadow-[0_0_40px_rgba(57,255,20,0.15)]" style={{animation: 'float 6s ease-in-out infinite'}}>
                <div className="w-full h-full rounded-full overflow-hidden border border-neon/20">
                  <Image
                    src="/profile.jpg"
                    alt="Gulshan Singh"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
              {/* Decorative orbiting dot */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-neon shadow-[0_0_10px_#39ff14]" />
              <div className="absolute bottom-8 left-0 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-dark-card border border-dark-border rounded-xl p-3 shadow-xl hidden lg:block"
              >
                <p className="text-neon font-display font-bold text-lg leading-none">500+</p>
                <p className="text-gray-500 text-xs mt-1">Problems Solved</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-8 bottom-12 bg-dark-card border border-dark-border rounded-xl p-3 shadow-xl hidden lg:block"
              >
                <p className="text-neon font-display font-bold text-lg leading-none">3+</p>
                <p className="text-gray-500 text-xs mt-1">Internships</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-gray-600 text-xs font-mono tracking-widest">SCROLL</p>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
