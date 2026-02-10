# Alberto Dev - Portfolio Website

A modern, dynamic CV web portfolio built with Next.js, React, Tailwind CSS, and shadcn/ui components.

## Features

- 🌍 **Internationalization (i18n)** - English and Spanish support
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI** - Built with shadcn/ui components
- 🔗 **Project-Skill Relations** - Technologies used in projects automatically aggregate in skills section
- 📊 **Dynamic Data** - All content managed through JSON files
- ⚡ **Performance** - Static generation with Next.js
- 🎯 **SEO Ready** - Proper metadata and structured data

## Structure

```
├── app/                          # Next.js app directory
│   ├── [locale]/                # Localized routes (en, es)
│   │   ├── page.tsx             # Home page
│   │   ├── projects/            # Projects page & details
│   │   ├── skills/              # Skills page with filtering
│   │   ├── contact/             # Contact page
│   │   └── layout.tsx           # Layout with navigation
│   └── page.tsx                 # Root redirect
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation component
│   ├── Footer.tsx               # Footer component
│   ├── ProjectCard.tsx          # Project card display
│   └── SkillTag.tsx             # Skill badge component
├── data/                         # JSON data files
│   ├── bio.json                 # Personal information
│   └── projects.json            # Projects with technologies
├── i18n/                         # Internationalization
│   ├── config.ts                # i18n configuration
│   ├── get-dictionary.ts        # Dictionary loader
│   └── dictionaries/            # Translation files
│       ├── en.json              # English translations
│       └── es.json              # Spanish translations
├── lib/                          # Utilities
│   └── skills.ts                # Skills aggregation logic
├── styles/                       # Global CSS
│   └── globals.css              # Tailwind + CSS variables
└── public/                       # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alberto24dev/alberto24dev.github.io.git
cd alberto24dev.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Updating Personal Information

Edit `data/bio.json` to update:
- Name, title, and bio
- Contact information
- Social media links
- Career highlights

### Adding Projects

Add new projects to `data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Short description",
  "shortDescription": "One-line summary",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "image": "/projects/image.jpg",
  "links": {
    "github": "https://github.com/...",
    "demo": "https://demo.example.com"
  },
  "details": "Detailed project description",
  "role": "Your role",
  "year": "2024"
}
```

**Skills are automatically generated** from the technologies used in projects!

### Adding Translations

Edit or create translations in `i18n/dictionaries/`:
- `en.json` - English translations
- `es.json` - Spanish translations

## Technologies

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui components
- **Type Safety**: TypeScript
- **Data**: JSON
- **Hosting**: GitHub Pages (via GitHub Actions)

## Customization

### Colors & Theme

Edit `tailwind.config.js` and `styles/globals.css` to customize:
- Color scheme
- Typography
- Spacing
- Border radius

### Routes

Localized routes are automatically generated:
- `/en` - English version
- `/es` - Spanish version
- Each page available in both languages

## Building for Production

```bash
npm run build
```

The site will be built to the `.next` directory and ready for deployment.

## Deployment

This project is configured for deployment to GitHub Pages. The domain is set in `CNAME` file.

## License

ISC

## Contact

For inquiries, please reach out via the contact page or directly to contact@alberto24dev.me
