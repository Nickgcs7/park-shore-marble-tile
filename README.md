# Park Shore Marble & Tile

A static website for Park Shore Marble & Tile, a family-owned marble and tile installation company serving Southwest Florida.

**Live Site:** https://park-shore-marble-tile.pages.dev

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generator)
- **Hosting:** Cloudflare Pages
- **Contact Form:** FormSubmit.co → parkshoremarble@gmail.com

## Project Structure

```
├── public/
│   └── images/uploads/     # Project photos
├── src/
│   ├── content/
│   │   ├── projects/       # Project entries (.md files)
│   │   └── testimonials/   # Testimonial entries (.md files)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro     # Homepage
│       ├── services.astro  # Services page
│       ├── projects.astro  # Projects gallery
│       ├── contact.astro   # Contact form
│       └── thank-you.astro # Form confirmation
├── astro.config.mjs
└── package.json
```

## How to Edit Content

### Edit Page Content
1. Go to GitHub → `src/pages/`
2. Click on the `.astro` file you want to edit
3. Click the pencil icon to edit
4. Commit changes → site auto-deploys

### Add a New Project
1. Upload image to `public/images/uploads/`
2. Create new `.md` file in `src/content/projects/`
3. Use this format:

```markdown
---
title: "Project Title"
description: "Brief description of the project."
image: "/images/uploads/your-image.jpg"
date: 2024-12-01
featured: true
---
```

- `featured: true` → Shows on homepage
- `featured: false` → Shows only on Projects page

### Add a Testimonial
Create new `.md` file in `src/content/testimonials/`:

```markdown
---
name: "Client Name"
quote: "Their testimonial quote here."
projectType: "Kitchen Renovation"
date: 2024-12-01
---
```

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`

## Deployment

Auto-deploys to Cloudflare Pages on every push to `main` branch.
