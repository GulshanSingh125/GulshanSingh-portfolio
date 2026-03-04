# Gulshan Singh — AI Engineer Portfolio

A modern, dark-themed portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Dark theme with neon green accents
- Smooth Framer Motion animations
- Responsive mobile-first design
- Resume download (PDF)
- Live blog cards linking to Medium
- Contact form (mailto)
- Sections: Hero, About, Skills, Experience, Projects, Blog, Certifications, Coding Profiles, Contact

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your profile photo and resume

Place your files in the `/public` folder:
- `public/profile.jpg` — Your profile photo
- `public/GulshanSingh_Resume2026.pdf` — Your resume PDF

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/app
  /components       — All section components (Navbar, Hero, About, etc.)
  /data             — Portfolio data (skills, projects, experience, etc.)
  globals.css       — Global styles
  layout.js         — Root layout
  page.js           — Main page
/public
  profile.jpg       — Profile photo
  GulshanSingh_Resume2026.pdf — Resume
tailwind.config.js
next.config.js
```

---

## 🛠 Customization

Edit `/app/data/index.js` to update:
- Personal info, links
- Skills, experience, projects
- Blog posts, certifications

---

## 🌐 Deploy on Vercel

1. Push your project to GitHub

2. Go to [vercel.com](https://vercel.com) and click **"New Project"**

3. Import your GitHub repository

4. Vercel auto-detects Next.js — click **Deploy**

5. Your site will be live at `https://your-project.vercel.app`

> **Tip:** Make sure your `public/` folder includes the resume PDF before deploying so the download button works.

---

## 📬 Contact

Gulshan Singh — [gulshan.sg.12@gmail.com](mailto:gulshan.sg.12@gmail.com)
