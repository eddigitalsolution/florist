# Web Development Project Standards

This rule governs front-end standards, UI aesthetics, component structure, accessibility, and SEO across all web development tasks.

## 1. UI & Visual Aesthetics
- **Anti-AI-Slop Policy**: Use clean, modern 1.5px/2.0px vector line iconography (Lucide React, Heroicons, SVG). Do NOT use glossy 3D clipart or rainbow sparkles.
- **Typography & Spacing**: Modern font stack (Inter, Outfit, Plus Jakarta Sans), explicit font weight hierarchy, clean line height.
- **Navbar Layout**: Clean uppercase links (`whitespace-nowrap`), generous gaps (`gap-6` to `gap-8`), mobile drawer menu (`md:hidden`).

## 2. Accessibility & Web Standards
- Input fields must include `id`, `name`, and standard `autoComplete` attributes.
- Keyboard focusable controls (`focus:ring-2`, `focus:outline-none`).

## 3. SEO Requirements
- Descriptive `<title>` tag and `<meta name="description">` on every page.
- Semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`).
