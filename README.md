# Modern Professional Engineering Portfolio

A high-performance, developer-grade personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Inspired by modern developer portfolios with an obsidian dark theme, developer grid background, ambient neon cyan/indigo glow, glassmorphic cards, and macOS terminal aesthetic.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```

---

## 🎨 How to Customize Your Portfolio

All portfolio content is centralized in a single configuration file:
👉 **[`src/data/portfolioData.js`](./src/data/portfolioData.js)**

You can easily update:

### 1. Personal & Hero Section
- **Name & Title**: Update `name`, `role`, and `subtitles` (the animated typewriter will automatically cycle through your titles).
- **Bio & Location**: Customize your short pitch and location.
- **Social Links**: Insert your GitHub, LinkedIn, Email, and Twitter/X URLs.
- **Profile Photo**: Change `avatarUrl` or drop your image into `public/` and reference it (e.g. `/my-photo.jpg`).
- **CV / Resume**: Place your resume PDF in `public/` (e.g., `public/My_Resume.pdf`) and set `resumeUrl: "/My_Resume.pdf"`.

### 2. About Me Section
- **Narrative**: Update the story paragraphs in `bioParagraphs`.
- **4 Key Stats**: Update the 2x2 highlight numbers (e.g., Projects completed, Certifications, Technologies, Home Labs).
- **Education**: Set your university, degree, graduation year, and institution link.
- **Career Targets**: Customize your career goals checklist.
- **Core Technologies**: Add or remove high-level skill badges.

### 3. Technical Skills
- Organized into clear categories: **Frontend**, **Backend**, **Databases**, **Cloud & DevOps**, and **Tools**.
- Easily add skills with optional proficiency levels (`Advanced`, `Expert`, `Intermediate`).

### 4. Featured Projects
- Add your projects with `title`, `category`, `description`, `tags`, `image`, `githubUrl`, and `liveUrl`.
- Supports category tabs (`All`, `Full Stack`, `Cloud & DevOps`, `System / Mobile`, etc.).

### 5. Certifications
- List professional certifications with `title`, `issuer`, `date`, `credentialId`, and `credentialUrl`.

### 6. Contact Information
- Direct links for Email, LinkedIn, GitHub, and Location.
- Includes a functional contact form with instant client-side feedback and direct mailto dispatch.

---

## 🌐 Free 1-Click Deployment (Vercel)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Click **Deploy** — your portfolio will be live with free global CDN and HTTPS in seconds!
