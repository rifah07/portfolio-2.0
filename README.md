# Rifah Sajida Deya - Portfolio

Personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

🌐 **Live:** [your-domain.vercel.app](https://your-domain.vercel.app)

---

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS v4                     |
| Animations | Framer Motion                       |
| Theme      | next-themes (dark/light, persisted) |
| Forms      | react-hook-form + Zod               |
| Email      | Resend                              |
| Deployment | Vercel                              |

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/rifah07/rifah-sajida-deya-portfolio-2.0.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local
# Open .env.local and add your RESEND_API_KEY

# 4. Run the dev server
npm run dev
# Open http://localhost:3000

# 5. Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Get a free API key at [resend.com](https://resend.com).

> **Note:** Without the API key, the contact form still works in development - it logs to the console instead of sending an email.

---

## Project Structure

```
rifah-portfolio/
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API route (Resend)
│   ├── projects/
│   │   └── page.tsx              # All projects page (/projects)
│   ├── globals.css               # Tailwind v4 theme + global styles
│   ├── layout.tsx                # Root layout + metadata + SEO
│   └── page.tsx                  # Homepage
│
├── components/
│   ├── sections/                 # One file per homepage section
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── resume.tsx
│   │   └── contact.tsx
│   ├── ui/                       # Reusable primitives
│   │   ├── project-card.tsx      # Project card with hover effects
│   │   ├── section.tsx           # Section wrapper + SectionHeader
│   │   ├── icons.tsx             # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── skeleton.tsx
│   ├── navbar.tsx                # Fixed navbar with scroll + mobile menu
│   ├── footer.tsx
│   └── theme-provider.tsx        # next-themes wrapper
│
├── data/
│   └── projects.ts               # ← ONLY file you touch to add projects
│
├── types/
│   └── project.ts                # Project TypeScript interface
│
├── lib/
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── projects/                 # ← Drop project screenshots here
│   │   ├── mini-ecommerce.png
│   │   ├── workspace.png
│   │   ├── shopsphere.png
│   │   ├── financial-tracker.png
│   │   ├── hall.png
│   │   └── expense-tracker.png
│   └── cv.pdf                    # ← Replace with your real CV
│
├── .env.local                    # Secret keys (never commit)
├── .env.example                  # Template for env vars
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## Adding a New Project

**Only one file to edit: `data/projects.ts`**

Add a new object to the `projects` array:

```ts
{
  id: "unique-id",                    // kebab-case, no spaces
  title: "Your Project Title",
  description: "One or two sentences describing what it does and why it matters.",
  image: "/projects/your-image.png",  // place image in public/projects/
  techStack: ["Node.js", "PostgreSQL", "TypeScript"],
  features: [
    "First key feature",
    "Second key feature",
    "Third key feature",
  ],
  github: {
    frontend: "https://github.com/rifah07/repo",  // delete line if no frontend
    backend: "https://github.com/rifah07/repo",   // delete line if no backend
  },
  live: {
    frontend: "https://yourapp.vercel.app",  // delete line if not live
    backend: "https://yourapi.onrender.com", // delete line if not live
  },
  category: "Full Stack",  // "Full Stack" | "Backend"
  featured: true,          // true = eligible for homepage, false = /projects only
},
```

Then add the screenshot to `public/projects/your-image.png`.  
Recommended image size: **1200×630px** (16:9).

---

## Managing More Than 6 Projects

The homepage always shows a maximum of 6 projects. The `/projects` page shows everything.

This line in `data/projects.ts` controls homepage visibility:

```ts
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
```

**Strategy:**

| Scenario                               | What to do                                                         |
| -------------------------------------- | ------------------------------------------------------------------ |
| New project, want it on homepage       | Set `featured: true` and set an older project to `featured: false` |
| New project, just want it on /projects | Set `featured: false`                                              |
| Want to reorder homepage projects      | Reorder the objects in the array — first 6 featured ones show      |

---

## Customization Cheatsheet

| What to change           | Where                                                       |
| ------------------------ | ----------------------------------------------------------- |
| Your name, title, intro  | `components/sections/hero.tsx`                              |
| About me text            | `components/sections/about.tsx`                             |
| Skills list              | `components/sections/skills.tsx`                            |
| Projects                 | `data/projects.ts`                                          |
| Social links             | `components/footer.tsx` + `components/sections/contact.tsx` |
| Email recipient          | `app/api/contact/route.ts` → `to: ["your@email.com"]`       |
| CV file                  | `public/cv.pdf`                                             |
| Colors / dark mode theme | `app/globals.css` → `.dark {}` and `@theme {}` blocks       |
| SEO metadata             | `app/layout.tsx` → `export const metadata`                  |

---

## Features

- **Dark / Light mode** — persisted in localStorage via next-themes
- **Fully responsive** — mobile-first, works from 320px
- **Smooth animations** — Framer Motion scroll-triggered transitions
- **Contact form** — validated with Zod, emails via Resend API
- **SEO ready** — Open Graph + Twitter metadata in layout
- **Image fallback** — project cards show a letter placeholder if image is missing
- **All projects page** — `/projects` shows every project, homepage shows top 6

---
