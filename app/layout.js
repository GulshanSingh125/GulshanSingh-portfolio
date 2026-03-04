import './globals.css'

export const metadata = {
  title: 'Gulshan Singh | AI Engineer & ML Developer',
  description: 'Portfolio of Gulshan Singh — AI Engineer, Machine Learning Developer, and Computer Vision Enthusiast from Uttar Pradesh, India.',
  keywords: 'AI Engineer, Machine Learning, Computer Vision, Deep Learning, RAG, Python, YOLOv11',
  openGraph: {
    title: 'Gulshan Singh | AI Engineer',
    description: 'Building Intelligent Systems with AI, Machine Learning & Computer Vision',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark text-gray-100 font-body antialiased">
        {children}
      </body>
    </html>
  )
}
