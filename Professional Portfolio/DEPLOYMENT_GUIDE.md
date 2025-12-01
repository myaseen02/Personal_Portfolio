# Free Hosting Guide for Your Portfolio

This guide covers multiple free hosting options for your React portfolio. Choose the one that works best for you!

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and most popular option for React projects. It's free, fast, and requires minimal setup.

### Prerequisites:
- A GitHub account (free)
- Your portfolio code pushed to GitHub

### Steps:

#### Step 1: Push Your Code to GitHub

1. **Create a GitHub account** (if you don't have one):
   - Go to [github.com](https://github.com) and sign up

2. **Create a new repository**:
   - Click the "+" icon in the top right → "New repository"
   - Name it: `professional-portfolio` (or any name you like)
   - Make it **Public** (required for free hosting)
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push your code to GitHub**:
   Open your terminal in the project folder and run:
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit your files
   git commit -m "Initial commit - Portfolio website"
   
   # Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/professional-portfolio.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub" (easiest option)

2. **Import your project**:
   - After signing in, click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find and click "Import" next to your portfolio repository

3. **Configure deployment**:
   - **Framework Preset**: Vercel should auto-detect "Vite"
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: Should be `npm run build` (auto-filled)
   - **Output Directory**: Should be `dist` (auto-filled)
   - **Install Command**: Should be `npm install` (auto-filled)
   - Click "Deploy"

4. **Wait for deployment**:
   - Vercel will build and deploy your site (takes 1-2 minutes)
   - You'll see a success message with your live URL
   - Your site will be live at: `https://your-project-name.vercel.app`

5. **Custom domain (optional)**:
   - In your project settings, you can add a custom domain
   - Vercel provides free SSL certificates

### Benefits:
- ✅ Automatic deployments on every git push
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ Preview deployments for pull requests
- ✅ Free custom domain support

---

## Option 2: Netlify (Also Very Easy)

Netlify is another excellent free hosting option with similar features to Vercel.

### Steps:

#### Step 1: Push to GitHub (Same as Vercel Step 1)

#### Step 2: Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "Sign up with GitHub"

2. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your portfolio repository

3. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Your site is live**:
   - Netlify will assign a random URL like: `https://random-name-123.netlify.app`
   - You can change it in Site settings → Change site name

### Benefits:
- ✅ Automatic deployments
- ✅ Free SSL
- ✅ Form handling (useful for your contact form!)
- ✅ Free custom domain

---

## Option 3: GitHub Pages (Free but More Setup)

GitHub Pages is free but requires more configuration for React/Vite projects.

### Steps:

#### Step 1: Install gh-pages package
```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/professional-portfolio"
}
```

Replace `YOUR_USERNAME` with your GitHub username.

#### Step 3: Update vite.config.js

Update your `vite.config.js` to include the base path:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/professional-portfolio/', // Replace with your repository name
})
```

#### Step 4: Deploy
```bash
npm run deploy
```

#### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "gh-pages" branch
4. Your site will be at: `https://YOUR_USERNAME.github.io/professional-portfolio`

### Note:
- GitHub Pages URLs include the repository name in the path
- Updates require running `npm run deploy` each time

---

## Option 4: Cloudflare Pages (Fast & Free)

Cloudflare Pages offers excellent performance and is completely free.

### Steps:

1. **Sign up**: Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Connect GitHub**: Authorize Cloudflare to access your repositories
3. **Select repository**: Choose your portfolio repository
4. **Build settings**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. **Deploy**: Click "Save and Deploy"

Your site will be live at: `https://your-project.pages.dev`

---

## Recommended: Vercel or Netlify

**I recommend Vercel or Netlify** because:
- ✅ Easiest setup (just connect GitHub)
- ✅ Automatic deployments on every push
- ✅ Free custom domains
- ✅ Excellent performance
- ✅ Great documentation

## After Deployment Checklist:

1. ✅ Test your live site
2. ✅ Check all pages load correctly
3. ✅ Test the contact form (EmailJS should work)
4. ✅ Verify all images load
5. ✅ Test on mobile devices
6. ✅ Update your resume PDF link if needed
7. ✅ Share your portfolio URL!

## Troubleshooting:

### Images not loading?
- Make sure all images are in the `public` folder
- Check that image paths start with `/` (e.g., `/projects/...`)

### Contact form not working?
- Verify EmailJS credentials are correct
- Check browser console for errors
- Make sure EmailJS service is active

### Build errors?
- Run `npm run build` locally first to check for errors
- Check that all dependencies are in `package.json`
- Verify `node_modules` is in `.gitignore`

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://pages.github.com

Good luck with your deployment! 🚀

