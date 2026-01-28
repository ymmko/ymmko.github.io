# Copilot Instructions for ymmko.github.io

## Project Overview
This is a personal portfolio website (https://ymmko.github.io) built with vanilla HTML/CSS. It's a **static site with multilingual support** (English and Turkish) and no build process or external frameworks.

## Architecture & Key Patterns

### Multi-Language Structure
- **Root `/index.html`** - Landing page with language selection links
- **`/en/`** - English version with nested pages under `about/` (e.g., `contact-me.html`)
- **`/tr/`** - Turkish version with corresponding pages (e.g., `hakkimda/index.html`)
- **Shared assets** - All language versions reference assets from root `/assets/` using relative paths (`../assets/`)

**Pattern**: Language directories use relative paths to shared resources. When adding pages, ensure correct path depth (e.g., `en/about/contact-me.html` uses `../assets/` and `../styles/main.css`).

### Styling System
- **Global styles**: `/styles/main.css` and `/styles/index.css` are referenced by all pages
- **Design elements**:
  - Animated gradient backgrounds using `@keyframes gradient` with 15s animation cycle
  - Montserrat font (Google Fonts) with Font Awesome icons
  - Primary colors: #ffde59 (yellow), #ff914d (orange), #004AAD (blue), #CB6CE6 (purple)
  - Responsive grid container (`.container`) with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
  - Responsive breakpoint: `@media (max-width: 768px)` for mobile

**Pattern**: CSS uses CSS Grid with `auto-fit` for responsive layouts. Animations are consistent across pages.

### Pages & Components

#### Home Pages (`index.html` variants)
- Display header with name/title (`.header`, `.header-title`, `.header-subtitle`)
- Link grid using `.container` with clickable image links
- Profile, Resume (PDF), LinkedIn, GitHub links with `transform: scale(0.4)` styling

#### Contact Form (`en/about/contact-me.html`)
- Uses **Web3Forms** API (https://api.web3forms.com/submit) for serverless form submission
- Access key embedded in form: `30215c11-b7d5-4dcd-a3e8-270ab55d43f4`
- Required fields: name, email, message

**Pattern**: External service integration without backend server.

## Development Workflows

### No Build Process
- **Deployment**: Direct static file serving via GitHub Pages
- **Testing**: Open HTML files in browser locally or via live server
- **Command** to run locally: Use any HTTP server (e.g., Python `python -m http.server 8000`, or VS Code Live Server extension)

### File Changes
- Modifying `styles/main.css` affects all pages in `en/` and `tr/` directories
- Adding new pages: Create `.html` files in appropriate language directory, ensure correct relative paths (depth matters)
- Image references use `../assets/` pattern—maintain this convention

## Critical Files & Dependencies

| File | Purpose |
|------|---------|
| `styles/main.css` | Shared global styles (gradients, layout, colors) |
| `styles/index.css` | Landing page specific styles |
| `en/index.html`, `tr/index.html` | Language-specific home pages |
| `en/about/contact-me.html` | Contact form with Web3Forms integration |
| `assets/` | Images (profile.png, resume.png, linkedin.png, github.png, cake.png) |

## Conventions & Best Practices

1. **Relative Paths**: All asset references use `../` based on page depth. Test path validity when moving/creating files.
2. **HTML Structure**: Consistent meta tags (charset, viewport, X-UA-Compatible) on all pages for accessibility.
3. **Styling Classes**: Use existing classes (`.header`, `.container`, `.text-area`); avoid inline styles when possible, but inline styles are present in codebase (acceptable for this project).
4. **Responsive Design**: Always test changes on mobile via viewport meta tag and `@media (max-width: 768px)`.
5. **No JavaScript Execution**: `scripts/main.js` is empty and commented out in HTML files—keep it minimal if adding interactivity.

## Integration Points

- **Web3Forms API** - Contact form backend (email submissions)
- **Google Fonts** - Montserrat font family
- **Font Awesome CDN** - Icon library (loaded but minimally used)
- **GitHub Pages** - Hosting platform (CNAME file indicates custom domain)
