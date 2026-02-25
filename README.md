# Hilo — News Website

A modern, responsive news website built with **Next.js** and **Sanity CMS**.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Styling:** CSS Modules + Global CSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** JavaScript / TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A [Sanity](https://www.sanity.io/) project

### Installation

```bash
# Clone the repo
git clone https://github.com/maximemainassistant-ux/hilo.git
cd hilo

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Then edit .env.local with your Sanity project credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity Studio

The embedded Sanity Studio is available at `/studio` when running in development mode.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/              # Next.js App Router pages & layouts
│   ├── (site)/       # Public-facing site routes
│   └── studio/       # Embedded Sanity Studio
├── components/       # Reusable UI components
│   └── blocks/       # Content block components
├── lib/              # Utility functions & API helpers
├── sanity/           # Sanity schema definitions
├── branding/         # Brand assets & design references
└── public/           # Static assets
```

## License

MIT
