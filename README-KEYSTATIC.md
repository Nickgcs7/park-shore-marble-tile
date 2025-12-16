# Keystatic CMS Setup

## ✅ Installation Complete!

Keystatic CMS has been installed and configured for Park Shore Marble & Tile.

## 🚀 How to Use

### For Development (Local Editing)

1. Run the dev server:
   ```bash
   npm install  # First time only
   npm run dev
   ```

2. Visit: http://localhost:4321/keystatic

3. Edit content locally, changes save to your file system

### For Production (After Deployment)

1. Visit: https://park-shore-marble-tile.pages.dev/keystatic

2. Click "Sign in with GitHub"

3. Authorize the app

4. Edit content - changes commit directly to GitHub!

## 📝 What You Can Edit

### Projects
- Add new project showcases
- Upload project images
- Set featured projects for homepage
- Add project descriptions

### Testimonials  
- Add client testimonials
- Include project types
- Organize by date

## 💡 Key Features

- **Git-based**: All changes commit to your repository
- **Image uploads**: Upload images directly through the interface
- **No cost**: Completely free, no paid tiers
- **Simple auth**: Just sign in with GitHub
- **Live preview**: See changes before publishing

## 🔧 Technical Details

- **Storage**: GitHub repository (git-based)
- **Images**: Stored in `public/images/uploads/`
- **Content**: Markdown files in `src/content/`
- **Output mode**: Hybrid (SSR + Static)

## 📱 After Cloudflare Deployment

Once deployed, the client can:
1. Visit /keystatic on the live site
2. Sign in with their GitHub account (you'll need to add them as a collaborator)
3. Edit content through the visual interface
4. Changes commit automatically
5. Site rebuilds in 1-2 minutes

## 🎯 For Client Handoff

**Add client as GitHub collaborator:**
1. Go to: https://github.com/Nickgcs7/park-shore-marble-tile/settings/access
2. Click "Add people"
3. Enter their GitHub username
4. Set role to "Write"
5. They can now edit content at /keystatic!