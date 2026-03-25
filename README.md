# Jay Laser & Engineers — Angular 17 Website

A full Angular 17 standalone-component replica of [jaylaserandengineers.com](https://www.jaylaserandengineers.com/), built with modern Angular patterns including:

- ✅ **Angular 17+** standalone components, control flow (`@if`, `@for`)
- ✅ **Lazy-loaded routes** with `loadComponent`
- ✅ **View Transitions API** via `withViewTransitions()`
- ✅ **Signals** (`signal()`, `computed()`) for reactive state
- ✅ **Reactive Forms** (FormsModule) on the Contact page
- ✅ **SCSS** with CSS custom properties for theming
- ✅ **Responsive** — mobile-first, hamburger menu, fluid grids
- ✅ **Lightbox** gallery on Portfolio page (no external deps)
- ✅ **Auto-advancing slideshow** on Home page

---

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeComponent | Hero video, stats bar, about, services, customers slideshow, CTA |
| `/portfolio` | PortfolioComponent | Filterable image grid with lightbox |
| `/services` | ServicesComponent | Service cards with alternating layout, process steps |
| `/contact` | ContactComponent | Contact form with validation + info panel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI 17+

```bash
npm install -g @angular/cli
```

### Install & Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/jay-laser-engineers.git
cd jay-laser-engineers

# Install dependencies
npm install

# Start dev server
ng serve

# Open browser at http://localhost:4200
```

### Build for Production

```bash
ng build
# Output in dist/jay-laser-engineers/
```

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Sticky navbar with mobile menu
│   │   └── footer/          # Footer with newsletter, contact, links
│   ├── pages/
│   │   ├── home/            # Landing page
│   │   ├── portfolio/       # Gallery with filter & lightbox
│   │   ├── services/        # Services detail page
│   │   └── contact/         # Contact form page
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── index.html
├── main.ts
└── styles.scss              # Global design tokens, utility classes
```

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#e8401c` | Buttons, accents, highlights |
| `--bg-dark` | `#0a0a0a` | Page background |
| `--text-primary` | `#f0ece4` | Main text |
| `--text-muted` | `#888880` | Secondary text |

**Fonts:** Bebas Neue (headings) · Barlow Condensed (labels/nav) · Barlow (body)

---

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: Angular 17 site for Jay Laser & Engineers"

# Create repo on GitHub then:
git remote add origin https://github.com/YOUR_USERNAME/jay-laser-engineers.git
git branch -M main
git push -u origin main
```

---

## Original Website
[www.jaylaserandengineers.com](https://www.jaylaserandengineers.com/)  
Sr.No.123, Kate Estate, Pune - Nashik Hwy, Bhosari, Pimpri-Chinchwad, Maharashtra 411039  
✉ info@jaylaserengineers.com
