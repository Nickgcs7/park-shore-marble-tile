# Setup Guide for Park Shore Marble & Tile

Complete guide to setting up and deploying this site to Cloudflare Pages with Decap CMS.

## 🚀 Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/Nickgcs7/park-shore-marble-tile.git
cd park-shore-marble-tile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:4321` to see the site.

## 🌐 Deploy to Cloudflare Pages

### Step 1: Create Cloudflare Pages Project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub account and authorize Cloudflare
4. Select the `park-shore-marble-tile` repository

### Step 2: Configure Build Settings

Use these exact settings:

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave blank)

### Step 3: Deploy

Click **Save and Deploy**. Your site will be live in ~2 minutes at:
`https://park-shore-marble-tile.pages.dev`

## 🔐 Set Up CMS Authentication

### Option 1: GitHub OAuth (Recommended)

**For the business owner to use the CMS:**

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Environment variables**
3. You'll need to create a GitHub OAuth app:
   - Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
   - **Application name**: Park Shore Marble CMS
   - **Homepage URL**: `https://your-site.pages.dev`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
   - Copy the **Client ID** and **Client Secret**

4. Add these environment variables in Cloudflare Pages:
   - `OAUTH_GITHUB_CLIENT_ID`: [Your GitHub Client ID]
   - `OAUTH_GITHUB_CLIENT_SECRET`: [Your GitHub Client Secret]

5. Redeploy the site

### Option 2: GitHub Repository Access

For simpler setup (owner needs GitHub account):

1. Invite the business owner to the GitHub repository as a collaborator
2. They can access the CMS at `yoursite.com/admin`
3. Login with their GitHub account
4. They'll have full CMS access

## 📝 Using the CMS

Once deployed and authenticated:

1. Visit `https://your-site.pages.dev/admin`
2. Click "Login with GitHub"
3. You'll see three sections:
   - **Projects** - Add/edit completed project showcases
   - **Testimonials** - Add/edit customer testimonials
   - **Pages** - Edit content on Home, Services, and Contact pages

### Adding a New Project

1. Go to **Projects** → **New Project**
2. Fill in:
   - Title
   - Description
   - Upload an image
   - Set completion date
   - Mark as featured (optional)
3. Click **Publish**
4. Changes go live immediately after deployment (~30 seconds)

### Adding a Testimonial

1. Go to **Testimonials** → **New Testimonial**
2. Fill in:
   - Client name
   - Testimonial quote
   - Project type (optional)
   - Date
3. Click **Publish**

## 📧 Configure Contact Form Email

The contact form is set up but needs an email service configured.

### Option 1: Resend (Recommended - Free tier available)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. In Cloudflare Pages → Settings → Environment variables:
   - Add `RESEND_API_KEY`: [your Resend API key]
4. Update `functions/api/contact.js`:
   - Uncomment the Resend code block
   - Update the `from` and `to` email addresses
5. Redeploy

### Option 2: Other Email Services

You can also use:
- **SendGrid** - Free tier, 100 emails/day
- **Mailgun** - Free tier, 1,000 emails/month
- **Postmark** - Free trial, then $10/month

Update the `functions/api/contact.js` file with your chosen service's API.

## 🎨 Customization Tips

### Changing Colors

Edit `src/layouts/BaseLayout.astro` and update the hex color codes:
- Primary color: `#2c3e50` (current dark blue)
- Change to any hex color you want

### Adding More Pages

1. Create new `.astro` file in `src/pages/`
2. Import and use `BaseLayout`
3. Add link to navigation in `BaseLayout.astro`

### Modifying the Header/Footer

Edit `src/layouts/BaseLayout.astro` to customize:
- Navigation links
- Company name
- Footer content

## 🔄 Transferring to Business Owner

When ready to transfer:

1. **Transfer GitHub Repository**:
   - Go to repo Settings → Transfer ownership
   - Enter their GitHub username
   - They accept the transfer

2. **Reconnect Cloudflare Pages**:
   - They'll need to reconnect the repo in their Cloudflare account
   - Use the same build settings

3. **Transfer Domain** (if using custom domain):
   - Update DNS settings to point to their Cloudflare Pages URL

## 🆘 Troubleshooting

### CMS Login Issues
- Make sure GitHub OAuth is properly configured
- Check that the repository is accessible
- Verify environment variables are set

### Build Failures
- Check build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Verify `astro.config.mjs` is correct

### Contact Form Not Working
- Verify `functions/api/contact.js` exists
- Check that email service API key is set in environment variables
- Look at Functions logs in Cloudflare dashboard

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

## 💰 Cost Breakdown

**Total Monthly Cost: $0**

- Cloudflare Pages: Free (unlimited requests)
- GitHub: Free (for public repos)
- Decap CMS: Free (static site CMS)
- Resend Email: Free tier (100 emails/day)

Perfect for a small business portfolio site!