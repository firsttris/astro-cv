<div align="center">

# Astro CV

### A modern, customizable Curriculum Vitae built with Astro

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)](https://mdxjs.com/)

[Features](#-features) · [Getting Started](#-getting-started) · [Commands](#-commands) · [Project Structure](#-project-structure)

</div>

---

## Why this project?

> Recruiters often request a CV in Word format to convert it to their layout, sometimes even altering the content. **No more!**

- **Tamper-proof** — An HTML CV that cannot be easily modified by third parties
- **Skills showcase** — Demonstrate your JavaScript skills directly through the CV itself
- **Consistent styling** — Ensure uniform format across all devices and prints
- **Easy updates** — Change your data once, see it reflected everywhere
- **Multi-language support** — Present your CV in multiple languages

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Modern Stack** | Built with Astro 7, MDX and scoped component styles, no client-side framework |
| **Icon Library** | Extensive icon support via Iconify (DevIcons, Material Symbols, Simple Icons, and more) |
| **Print-Ready** | Optimized for both web viewing and PDF/print output |
| **Responsive** | Looks great on desktop, tablet, and mobile |
| **Fast** | Static site generation for blazing-fast load times |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/astro-cv.git

# Navigate to the project
cd astro-cv

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

---

## 📁 Project Structure

```
astro-cv/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes (each .astro file = one page)
│   └── styles/      # Global styles
├── astro.config.mjs # Astro configuration
└── package.json
```

---

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build) — Learn about Astro features and API
- [Astro Discord](https://astro.build/chat) — Get help from the community

---

<div align="center">

⭐ Like Astro CV? A [star on GitHub](https://github.com/firsttris/astro-cv) helps others find it.<br>
🐛 [Report a bug](https://github.com/firsttris/astro-cv/issues/new) · 💡 [Request a feature](https://github.com/firsttris/astro-cv/issues/new)

<sub>License: <a href="LICENSE">MIT</a> · © Tristan Teufel and contributors</sub>

</div>
