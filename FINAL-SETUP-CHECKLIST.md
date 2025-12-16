# Setup Checklist - Final Configuration

## 📋 What's Working vs What Needs Setup

### ✅ Already Working
- [x] Site structure and all pages
- [x] Content collections configured
- [x] Navigation and styling
- [x] CMS interface accessible at `/admin`
- [x] Contact form UI and client-side validation
- [x] Cloudflare Pages function for contact form

### ⚠️ Needs Configuration (2 items)
1. **CMS Authentication** (Required for content editing)
2. **Contact Form Email** (Required for receiving messages)

---

## 🎯 SETUP #1: CMS Authentication

The CMS at `/admin` needs GitHub authentication to work. You have **2 options**:

### Option A: Simple Collaborator Method (Recommended)
**Best for:** Single business owner, quick setup

1. **Add the business owner as a GitHub collaborator:**
   - Go to: https://github.com/Nickgcs7/park-shore-marble-tile/settings/access
   - Click "Add people"
   - Enter their GitHub username or email
   - Set role to "Write" (they need write access)
   - Click "Add"

2. **They can now use the CMS:**
   - Visit: `yoursite.com/admin`
   - Click "Login with GitHub"
   - Authorize on first use
   - Edit content immediately!

**Pros:**
- ✅ 2-minute setup
- ✅ No OAuth configuration needed
- ✅ Works immediately

**Cons:**
- ⚠️ They need a GitHub account
- ⚠️ They see the repo (but won't understand code anyway)

---

### Option B: GitHub OAuth App (More Professional)
**Best for:** Multiple editors, cleaner UX

1. **Create GitHub OAuth App:**
   - Go to: https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - **Application name:** Park Shore Marble & Tile CMS
     - **Homepage URL:** `https://your-cloudflare-pages-url.pages.dev`
     - **Authorization callback URL:** `https://your-cloudflare-pages-url.pages.dev/admin`
   - Click "Register application"
   - Copy the **Client ID**
   - Click "Generate a new client secret" and copy it

2. **Add to Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages → Your Project
   - Settings → Environment Variables
   - Add two variables:
     ```
     OAUTH_GITHUB_CLIENT_ID = [your client id]
     OAUTH_GITHUB_CLIENT_SECRET = [your client secret]
     ```

3. **Update CMS config** (I can do this for you if you choose this option)

**Pros:**
- ✅ More professional
- ✅ Easier for non-technical users
- ✅ Can add/remove access without repo permissions

**Cons:**
- ⚠️ More setup steps
- ⚠️ Requires OAuth app management

---

## 📧 SETUP #2: Contact Form Email

The contact form currently logs submissions but doesn't send emails. Here's how to fix it:

### Step 1: Sign Up for Resend (Free)
1. Go to: https://resend.com/signup
2. Verify your email
3. Get your API key from the dashboard

**Cost:** Free for 100 emails/day, 3,000/month

---

### Step 2: Add API Key to Cloudflare
1. Go to Cloudflare Dashboard
2. Pages → park-shore-marble-tile
3. Settings → Environment Variables
4. Click "Add variable"
   - **Variable name:** `RESEND_API_KEY`
   - **Value:** [paste your Resend API key]
   - **Environment:** Production
5. Click "Save"

---

### Step 3: Configure Email Addresses

I need to know:
- **FROM email:** `contact@[yourdomain.com]` (or use Resend's default: `onboarding@resend.dev`)
- **TO email:** Where should form submissions go? (business owner's email)

Once you provide these, I'll update the contact form function with the proper Resend integration.

---

## 🚀 Quick Start: Minimum Viable Setup

**If you want to get it working TODAY:**

1. **For CMS (2 minutes):**
   - Add business owner as collaborator (Option A above)
   - Done! They can edit content at `/admin`

2. **For Contact Form (10 minutes):**
   - Sign up for Resend
   - Add API key to Cloudflare
   - Tell me the email addresses
   - I'll update the code
   - Done! Form sends emails

---

## 📝 Testing Checklist

### Test CMS:
- [ ] Visit `yoursite.com/admin`
- [ ] Click "Login with GitHub"
- [ ] Can you see the Collections? (Projects, Testimonials, Pages)
- [ ] Try adding a test project
- [ ] Check if it appears on the site (after ~1-2 min rebuild)

### Test Contact Form:
- [ ] Go to `yoursite.com/contact`
- [ ] Fill out the form
- [ ] Submit
- [ ] Check if you receive an email

---

## 🆘 Troubleshooting

### CMS Issues:

**"Login with GitHub" button doesn't appear**
- Clear browser cache
- Check if `/admin` is loading the CMS interface
- Verify `public/admin/index.html` exists in deployed site

**"Config could not be loaded"**
- Check Cloudflare Pages build logs
- Verify `public/admin/config.yml` was deployed
- Check browser console for specific error

**"Error: Not Found"**
- User needs to be added as collaborator OR
- OAuth needs to be configured

### Contact Form Issues:

**Form submits but no email received**
- Check Cloudflare Pages Functions logs
- Verify RESEND_API_KEY is in environment variables
- Check Resend dashboard for send logs
- Verify email addresses in code

**"500 Internal Server Error"**
- Check Cloudflare Functions logs
- Verify function deployed correctly
- Check if environment variables are set

---

## 🎯 What Do You Want to Do?

**Option 1: Quick & Simple**
→ I'll help you set up **Option A** (collaborator) + basic email

**Option 2: Professional Setup**
→ I'll help you set up **Option B** (OAuth) + full email config

**Option 3: Just Tell Me What to Do**
→ Give me:
1. Business owner's GitHub username OR tell me to use collaborator method
2. FROM email address for contact form
3. TO email address (where to receive submissions)

And I'll handle everything!

---

## 📧 Resend Setup - Detailed Instructions

### After you sign up for Resend:

1. **Verify a domain** (Optional but recommended):
   - Resend → Domains → Add Domain
   - Add your domain (e.g., `parkshoremarket.com`)
   - Add the DNS records they give you
   - Wait for verification
   - Now you can send from `contact@yourdomain.com`

2. **OR use their default** (works immediately):
   - Send from: `onboarding@resend.dev`
   - This works but looks less professional

3. **Get API Key:**
   - Resend Dashboard → API Keys
   - Create API Key
   - Copy it (you won't see it again!)

---

## 💡 Pro Tips

**For CMS:**
- Create a test project first to make sure everything works
- The site rebuilds in 1-2 minutes after CMS changes
- All content is stored in GitHub (automatic backups!)

**For Contact Form:**
- Test it yourself first before telling clients
- Check spam folder if emails don't arrive
- Resend has a dashboard showing all sent emails

**For Business Owner:**
- Create a simple video showing them how to use `/admin`
- Show them it takes 1-2 minutes for changes to appear
- Remind them to click "Publish" not just "Save Draft"

---

## 🎉 Ready to Configure?

Just let me know:
1. Which CMS option? (A = Simple, B = OAuth)
2. Your Resend API key (once you have it)
3. Email addresses (FROM and TO)

And I'll get everything working! 🚀