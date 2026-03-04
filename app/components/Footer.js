'use client'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-display font-bold text-white text-lg">GS<span className="neon-text">.</span></span>
          <p className="text-gray-600 text-xs mt-1 font-mono">Gulshan Singh · AI Engineer</p>
        </div>
        <p className="text-gray-700 text-xs font-mono">
          © {new Date().getFullYear()} Gulshan Singh. Built with Next.js & ❤️
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neon transition-colors text-xs font-mono">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neon transition-colors text-xs font-mono">LinkedIn</a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neon transition-colors text-xs font-mono">Medium</a>
          <a
            href="/GulshanSingh_Resume2026.pdf"
            download="GulshanSingh_Resume2026.pdf"
            className="px-3 py-1.5 border border-neon/30 text-neon text-xs font-mono rounded hover:bg-neon hover:text-black transition-all"
          >
            ↓ Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
