# Park Shore Marble & Tile Portfolio Site

Static portfolio site built with Astro and Decap CMS, hosted on Cloudflare Pages.

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nickgcs7/park-shore-marble-tile.git
   cd park-shore-marble-tile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 CMS Access

Once deployed to Cloudflare Pages:
- Visit `yoursite.com/admin` to access the CMS
- Login with GitHub authentication
- Add/edit projects, testimonials, and page content

## 🗂️ Project Structure

```
/
├── public/
│   ├── admin/          # Decap CMS configuration
│   └── images/         # Static images
├── src/
│   ├── content/
│   │   ├── projects/   # Project markdown files
│   │   └── testimonials/  # Testimonial markdown files
│   ├── layouts/        # Page layouts
│   └── pages/          # Site pages
│       ├── index.astro      # Home
│       ├── services.astro   # Services
│       ├── projects.astro   # Projects gallery
│       └── contact.astro    # Contact form
├── functions/          # Cloudflare Pages Functions
└── package.json
```

## 🌐 Deployment to Cloudflare Pages

1. Login to Cloudflare Dashboard
2. Go to Pages → Create a project
3. Connect to GitHub and select this repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Astro
5. Deploy!

## 📧 Contact Form

The contact form uses Cloudflare Pages Functions. Configure the email recipient in `functions/api/contact.js`.

## 📄 License

MIT