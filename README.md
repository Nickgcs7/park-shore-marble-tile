# Park Shore Marble & Tile - Portfolio Website

A modern, static portfolio website built with Astro and Decap CMS, hosted on Cloudflare Pages.

## 🎯 Features

- **Static Site** - Fast, secure, and SEO-friendly
- **Content Management** - Easy-to-use CMS at `/admin`
- **Responsive Design** - Works on all devices
- **Free Hosting** - Cloudflare Pages (unlimited bandwidth)
- **Automatic Deployments** - Push to GitHub → Live in 2 minutes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:4321` to see the site locally.

## 📁 Project Structure

```
/
├── public/
│   ├── admin/          # Decap CMS admin interface
│   └── images/         # Static images
├── src/
│   ├── content/
│   │   ├── projects/       # Project showcase entries
│   │   ├── testimonials/   # Customer testimonials
│   │   └── pages/          # Page content (Home, Services, Contact)
│   ├── layouts/            # Page layouts
│   └── pages/              # Site pages
├── functions/              # Cloudflare Pages Functions (contact form)
├── astro.config.mjs        # Astro configuration
└── package.json
```

## 📝 Content Management

Access the CMS at `/admin` on your live site.

**What you can edit:**
- ✅ Projects - Add/edit completed projects with images
- ✅ Testimonials - Add/edit customer testimonials
- ✅ Page Content - Edit home, services, and contact pages

**Authentication:**
- Login with GitHub account
- Must be a repository collaborator

## 🌐 Deployment

### Cloudflare Pages Setup

1. Connect your GitHub repository to Cloudflare Pages
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Astro
3. Deploy!

Your site will be live at: `https://your-project.pages.dev`

## 📧 Contact Form Setup

The contact form requires an email service to be configured.

**Recommended: Resend** (Free tier - 100 emails/day)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to Cloudflare Pages Environment Variables:
   - `RESEND_API_KEY`: your-api-key
4. Update email addresses in `functions/api/contact.js`

See `SETUP.md` for detailed instructions.

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Complete deployment guide
- **[SITE-REVIEW.md](./SITE-REVIEW.md)** - Site structure and features

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site framework
- **[Decap CMS](https://decapcms.org)** - Git-based CMS
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Hosting & Functions
- **GitHub** - Version control & authentication

## 💰 Cost

**Total: $0/month**
- Hosting: Free (Cloudflare Pages)
- CMS: Free (Decap CMS)
- Repository: Free (GitHub)
- Email: Free tier (Resend - 100/day)

## 📄 License

MIT