# Deepu Kunjumon - Portfolio

Single-page portfolio built with React, Vite and Tailwind CSS. The contact form sends email through [Web3Forms](https://web3forms.com), so the site is fully static.

## Requirements

Node.js 20.12 or newer (`nvm use` picks up `.nvmrc`).

## Run it

```bash
npm install
npm run dev
```

The site runs at http://localhost:5173.

## Environment variables

Copy `.env.example` to `.env`. `.env` is git-ignored.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | yes | Web3Forms key for the inbox that receives messages |
| `VITE_CONTACT_SUBJECT` | no | Subject line of the notification email |
| `VITE_CONTACT_FROM_NAME` | no | Sender name of the notification email |

Vite inlines these at build time, so set them in your host's build settings too and rebuild after changing them. The access key is visible in the built JavaScript - that is how Web3Forms works - so restrict it to your domain in the Web3Forms dashboard.

## Edit the content

All copy - bio, skills, projects, experience, education, email and GitHub links - lives in `src/data/content.js`. The resume offered for download is `public/resume.pdf`.

## Deploy

```bash
npm run build
```

Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, shared hosting).
