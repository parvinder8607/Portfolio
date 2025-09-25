# Portfolio – Your Name

A modern, responsive developer portfolio built with Next.js 15, React 19, and Tailwind CSS v4. It showcases skills, experience, and projects with smooth scrolling, dark-mode-friendly styling, and elegant UI.

- Live Demo: https://your-portfolio-url.com (update when deployed)
- Repository: https://github.com/parvinder8607/Portfolio

## Features

- **Hero** with CTA and subtle animated background (GSAP-powered intro)
- **About** with bio, profile block, and quick stats
- **Skills** with categorized proficiency bars and tags
- **Experience** timeline and **Education** cards
- **Projects** grid with category filters, tech chips, and links
- **Contact** with form, contact cards, socials, and availability
- **Floating Navbar** with smooth scrolling and active-section highlight
- **Dark mode** friendly styles and tasteful animations

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **JavaScript (ESNext)**
 - Optional animations with **GSAP + ScrollTrigger**

## Project Structure

```
src/
  app/
    _section/
      Hero.jsx
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      ContactMe.jsx
    globals.css
    layout.js
    page.js
  utils/
    Navbar.jsx
public/
```

- `src/app/page.js` composes all sections together.
- `src/utils/Navbar.jsx` is a floating navbar with smooth scroll and active-section tracking.
- `src/app/globals.css` includes Tailwind and custom animations (blob effect, scrollbar, smooth scroll).

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
# visit http://localhost:3000
```

### Build (production)

```bash
npm run build
npm start
```

### Animations (GSAP)

This project uses GSAP for polished mount and scroll-triggered animations.

Install (already installed in this repo):

```bash
npm install gsap
```

Where animations live:

- `src/app/_section/Hero.jsx` – intro timeline for title, subtitle, description, and CTAs; subtle floating blob movement.
- `src/app/_section/About.jsx` – section header reveal, side-by-side image/content slide-in, stat cards pop, and progress bars grow.
- `src/app/_section/Skills.jsx` – section header reveal, skill cards fade/slide, progress bars grow, and technology chips stagger in.
- `src/app/_section/Experience.jsx` – section header reveal, timeline line growth (scrubbed), dots pop, and cards slide/fade.

Implementation details:

- Each animated component is a client component (`"use client"`).
- Animations are scoped using `gsap.context()` and cleaned up on unmount.
- Scroll-based effects use `ScrollTrigger` (registered inside the effect).
- Elements have class hooks to target animations:
  - Hero: `.hero-title`, `.hero-subtitle`, `.hero-desc`, `.hero-cta`, `.blob`
  - About: `.about-header`, `.about-title`, `.about-sub`, `.about-grid`, `.about-image`, `.about-content`, `.about-stat`, `.about-progress-bar`
  - Skills: `.skills-header`, `.skills-title`, `.skills-sub`, `.skills-grid`, `.skills-card`, `.skills-bar`, `.skills-chips`, `.skills-chip`
  - Experience: `.exp-header`, `.exp-title`, `.exp-sub`, `.exp-timeline`, `.exp-line`, `.exp-item`, `.exp-dot`, `.exp-card`

Extend or customize:

- Add new hooks/classes to your markup and mirror them in the GSAP timelines.
- Adjust `start`/`end` on `ScrollTrigger` to tune when animations fire.
- Favor `transform` (x/y/scale/opacity) for best performance.
- Keep animations subtle for accessibility; avoid excessive motion.

Disable animations:

- You can remove GSAP imports/effects from a section to disable animations there.

### Lint

```bash
npm run lint
```

## Customization

- **Name, title, metadata**
  - `src/app/_section/Hero.jsx` → headline/initials and CTAs
  - `src/app/layout.js` → `metadata` fields (title, description, keywords, author)

- **About**
  - `src/app/_section/About.jsx` → bio text, stats, resume button

- **Skills**
  - `src/app/_section/Skills.jsx` → edit `skillCategories` and extra tech tags

- **Experience & Education**
  - `src/app/_section/Experience.jsx` → update the `experiences` array

- **Projects**
  - `src/app/_section/Projects.jsx` → update the `projects` array (title, description, tech, links)

- **Contact & Socials**
  - `src/app/_section/ContactMe.jsx` → update `contactInfo` and socials
  - Optionally wire the form to a service (Resend, Formspree) or a Next.js API route

- **Navbar**
  - `src/utils/Navbar.jsx` → adjust `navItems` or styles

## Deployment

- **Vercel (recommended)**: Import the repo and deploy with defaults
- **Other hosts**: Netlify or similar work with appropriate adapters

## Notes

- Components that use hooks are marked as client components:
  - `src/utils/Navbar.jsx`
  - `src/app/_section/Projects.jsx`
  - `src/app/_section/ContactMe.jsx`

- Tailwind v4 inline theme: Your editor may warn about `@theme` in `src/app/globals.css`. This is expected with Tailwind v4 and can be ignored.
 - GSAP is only used in client components and is tree-shaken by modern bundlers.

## Roadmap

- Connect contact form submissions
- Add a blog/case studies
- Add analytics (e.g., Vercel Analytics)

## License

MIT License

## Contact

- Name: Your Name
- Email: your.email@example.com
- LinkedIn: https://www.linkedin.com/in/yourname
- GitHub: https://github.com/parvinder8607
