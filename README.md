# The Friendly Dev – React Router Portfolio

A server-rendered React Router v7 portfolio and blog experience that showcases projects, long-form posts, and a Formspree-powered contact form. The project uses modern React 19 APIs, Vite, Tailwind CSS v4, Framer Motion, and type-safe loaders/actions to orchestrate data coming from a Strapi-style CMS.

**Live Preview** : &nbsp; [friendly-developer-portfolio.vercel.app](https://friendly-developer-portfolio.vercel.app/)

---

### Note

The app would take a moment (a minute or two) to load up because the backend server is hosted on render for free and might have been spun down when you try to check the preview.

---

## Table of Contents

1. [Highlights](#highlights)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Available Scripts](#available-scripts)
7. [Data Loading](#data-loading)
8. [Styling & UI](#styling--ui)
9. [Deployment](#deployment)
10. [Roadmap Ideas](#roadmap-ideas)

## Highlights

- **React Router SSR** – `react-router.config.ts` opts into server rendering, so every route is streamed, hydrated, and SEO-friendly out of the box.
- **Nested layouts** – The home landing page (`app/routes/layouts/home.tsx`) composes the hero + featured content, while the rest of the site uses the `main` layout for consistent spacing.
- **Content-aware loaders** – Route loaders fetch Strapi data, normalize the payload with transformers (`app/utils/transforms.ts`), and pass typed objects to components.
- **Rich blog UX** – Full list view with search + pagination, dedicated detail view with Markdown rendering powered by `react-markdown`, and image handling that falls back to `public/images/no-image.png`.
- **Projects explorer** – Category filters, pagination, and animated transitions (`framer-motion`) make the portfolio section stand out.
- **Contact form** – A ready-to-ship Formspree integration keeps user submissions simple without needing custom backend code.

## Tech Stack

- **Runtime:** React 19, React Router v7 (`@react-router/dev`, `@react-router/node`, `@react-router/serve`)
- **Build tooling:** Vite 7 with `vite-tsconfig-paths` and `vite-plugin-devtools-json`
- **Styling:** Tailwind CSS v4 + Typography plugin, custom `app/app.css`
- **Animation & UI helpers:** Framer Motion, React Icons
- **Markdown rendering:** `react-markdown`
- **Language:** TypeScript with strict compiler options
- **Data tooling:** JSON Server script for local CMS stubbing (`npm run json-server`)

## Project Structure

```
app/
├── components/         # Hero, Navbar, cards, lists, filters
├── posts/              # Markdown examples (optional seed content)
├── routes/             # Route modules + layouts + error boundary
├── types/              # Post & project typings (Strapi + UI models)
├── utils/transforms.ts # Maps Strapi payloads into UI-friendly models
├── root.tsx            # Document shell, layout, error boundary
└── routes.ts           # Route manifest consumed by @react-router/dev
data/
└── db.json             # Sample project data for local experimentation
public/
└── images/             # Project thumbnails, profile photo, placeholders
```

## Getting Started

1. **Prerequisites**
   - Node.js 20+ (LTS) and npm 10+
   - Optional: Strapi instance or any API that mimics the Strapi response shape

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment (see [Environment Variables](#environment-variables))**

4. **Start the dev server**

   ```bash
   npm run dev
   ```

   - App URL: `http://localhost:5173`
   - React Router automatically runs both the server and client build in watch mode for instant SSR + HMR feedback.

5. **(Optional) Boot a mock API**

   The `data/db.json` file can be served via JSON Server while prototyping:

   ```bash
   npm run json-server
   ```

   > ℹ️ JSON Server is a lightweight helper—the production loaders expect Strapi-style filtering (`filters[...]`, `populate=*`). When using JSON Server you may need to adapt the loaders or provide compatible query params via middleware.

## Environment Variables

Create a `.env` file in the project root (values shown here are examples):

```
VITE_API_URL=https://your-strapi-instance.com/api
```

- `VITE_API_URL` is consumed by every loader that fetches posts or projects. It should point to the Strapi REST endpoint (not GraphQL). Make sure CORS is configured to allow `http://localhost:5173` while developing.
- When deploying, provide the same variable to the hosting platform (e.g., Fly.io secrets, Render env vars, etc.).

## Available Scripts

| Script                | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `npm run dev`         | Starts the React Router dev server with SSR + HMR                        |
| `npm run build`       | Generates `build/client` (static assets) and `build/server` (SSR bundle) |
| `npm run start`       | Serves the production build via `@react-router/serve`                    |
| `npm run typecheck`   | Generates router types then runs `tsc --noEmit` for a strict type pass   |
| `npm run json-server` | Serves `data/db.json` on `http://localhost:5001` for quick API mocking   |

## Data Loading

- **Home (`app/routes/home/index.tsx`)** fetches featured projects and the latest posts concurrently, then displays them via `FeaturedProjects`, `AboutPreview`, and `LatestPosts`.
- **Projects (`app/routes/projects/index.tsx`)** loads the full list, builds a dynamic category filter list, and paginates items with reusable `Pagination` and Framer Motion transitions. Clicking a card navigates to `/projects/:id`, which fetches the document by `documentId`.
- **Blog (`app/routes/blog/index.tsx`)** loads posts once and performs client-side searching + pagination. The details route renders Markdown content safely and shows a hero image, publish date, and backlink.
- **Contact (`app/routes/contact/index.tsx`)** currently posts directly to Formspree. The commented action shows how to migrate back to a server-handled form if needed.
- **Error states** bubble up through the shared error boundary in `app/root.tsx`, which distinguishes between 404s and generic failures.

## Styling & UI

- Tailwind v4 is enabled via `@import "tailwindcss";` in `app/app.css` along with the Typography plugin. Custom fonts are injected with `<Links />` in `app/root.tsx`.
- Components favor semantic HTML, accessible color contrast, and dark/light-friendly defaults (`color-scheme: dark` is set when the OS prefers dark mode).
- Animations rely on Framer Motion for layout transitions in the projects grid.

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Serve locally (production mode):

   ```bash
   npm run start
   ```

3. Deploy the contents of:

   ```
   build/
   ├── client/   # Static assets served by any CDN or static host
   └── server/   # SSR bundle consumed by Node, Deno, Bun, or adapters
   ```

4. Recommended targets: Fly.io, Render, Railway, AWS Amplify, Cloudflare Pages + Functions, or any Docker-compatible platform. Ensure `VITE_API_URL` is provided at runtime.

## Roadmap Ideas

- Hook up the JSON Server script to a Strapi-compatible middleware or stand up a real Strapi instance with matching content types.
- Re-enable the contact form action to keep submissions within the React Router stack.
- Add unit and integration tests (e.g., Vitest or Playwright) for loaders, components, and navigation flows.
- Introduce CMS editing previews by wiring up Draft tokens and conditional loader logic.

---

Built with ❤️ using React Router and tailored for showcasing engineering work with a friendly voice.
