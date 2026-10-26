# Zainab Abdul Qayoom — Portfolio

A responsive personal portfolio for a Computer Science student, developer, and student community builder. Built with React + Vite and custom CSS.

## Publish it online

### Option A — Vercel (recommended)

1. Download and extract this project ZIP.
2. Create a new repository on GitHub and upload the extracted files.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically. Use these settings if prompted:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
6. Select **Deploy**. Vercel will give you a public URL you can paste into your LEADx application.

Official guide: https://vercel.com/docs/deployments

### Run it on your computer first (optional)

Install Node.js, open a terminal in this folder, then run:

```bash
npm install
npm run dev
```

To test a production build:

```bash
npm run build
npm run preview
```

## Before sharing

- Contact details currently set in the site:
  - Email: `gondalzainab34@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/zainababdulqayoom`
  - GitHub: `https://github.com/zainab-abdul-qayoom`
- Confirm the email address is spelled correctly and that the GitHub URL is your account before publishing.
- Review role dates, award names, and project descriptions carefully before publishing. Add live demos or repository links only when those projects are actually available to the public.
- If you want to add a professional email and your exact LinkedIn URL later, update the contact section in `src/App.jsx`.

## Project structure

- `src/App.jsx` — portfolio content and sections
- `src/styles.css` — responsive design and styling
- `src/main.jsx` — React entry point
- `index.html` — page title and metadata
- `vercel.json` — Vercel deployment configuration
