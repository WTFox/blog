# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with **Next.js 14** and **TypeScript**, featuring MDX-based blog posts with dynamic rendering. The site uses Chakra UI for styling and is deployed to Vercel.

**Key Tech Stack:**
- Framework: Next.js 14 with React 18
- Language: TypeScript
- Styling: Chakra UI + Emotion
- Content: MDX with YAML front matter
- Package Manager: npm/yarn (Node 22.x required)
- Deployment: Vercel
- Content Tools: gray-matter (front matter parsing), next-mdx-remote (MDX rendering)

## Development Commands

```bash
# Development server (with Vercel local dev)
just dev

# Create new blog post (scaffolds a draft post)
just new "Post Title"

# Production build
just build

# Linting
just lint

# Type checking
just typecheck

# Combined lint + type check
just check
```

The `justfile` is the command reference. Use `just` with no args to see all available commands.

## Architecture & Code Organization

### Content & Posts

- **Post Storage**: `/content/{slug}/{slug}.mdx` - Each post lives in its own subdirectory with optional assets
- **Post Discovery**: `src/lib/post.tsx` globsall `.mdx` files in the content directory
- **Front Matter**: YAML metadata at the top of each `.mdx` file:
  ```yaml
  ---
  date: "YYYY-MM-DD"
  title: "Post Title"
  draft: true/false
  summary: "Brief description"
  readTimeInMinutes: 5
  ---
  ```
- **Post Filtering**: Draft posts and future-dated posts are hidden in production (visible in dev)

### Page Structure

**Static Pages:**
- `src/pages/index.tsx` - Homepage with post list
- `src/pages/about.tsx` - About page
- `src/pages/posts/[slug].tsx` - Individual post detail page (SSG via `getStaticPaths`)

**Dynamic Content Rendering:**
- Uses Next.js `getStaticProps`/`getStaticPaths` for build-time generation
- Posts are serialized via `next-mdx-remote/serialize` for safe client-side rendering

### Component Structure

**Layouts** (`src/components/Layouts/`):
- Pages use `getLayout` pattern - each page can define its own layout component
- `SidebarLayout` - Homepage and post listings (with sidebar navigation)
- `FullWidthLayout` - Individual post detail pages

**Core Components** (`src/components/`):
- `NavBar.tsx` - Navigation header
- `Sidebar/` - Sidebar hero, links, and branding
- `PostList/` - Post listing with sorting
- `MDXComponents.tsx` - Custom MDX element overrides (code blocks, etc.)
- `DarkModeSwitch.tsx` - Theme toggle

**Custom MDX Components:**
- `Mermaid.tsx` - Diagram rendering
- `YouTubeEmbed.tsx` - YouTube embeds
- `RoloText.tsx` - Custom text styling
- `Rainbowify.tsx` - Rainbow text effect
- `PhotoGrid.tsx` - Image galleries
- `StravaMiles.tsx` / `Mileage.tsx` - Strava integration

### Configuration

**Site Config** (`src/lib/SiteConfig.tsx`):
- Central configuration for site metadata, author info, links, theme colors
- `postsDirectory` points to `/content`
- Defines gradient and accent colors for UI

**Theme** (`src/theme.tsx`):
- Chakra UI theme extension
- Custom fonts (DM Sans for body, JetBrains Mono for code)
- Breakpoints and color overrides

### Utilities

**Post Utilities** (`src/lib/post.tsx`):
- `getPosts()` - Returns all published posts (filtered by draft/date)
- `lookupPostFromSlug(slug)` - Finds specific post by slug

**RSS Feed** (`src/lib/generateRssFeed.tsx`):
- Auto-generates `/rss/feed.xml` during build
- Called from homepage `getStaticProps`

**Scripts** (`scripts/newPost.js`):
- Helper to scaffold new post directories and template files
- Creates directory structure with initial MDX file

## Building & Deployment

- **Static Site Generation**: All pages are pre-built at build time
- **Incremental Static Regeneration**: Not currently configured, but could be added to `getStaticProps`
- **Vercel Deployment**: Push to main branch triggers automatic deployment
- **Build Output**: Next.js exports static HTML/JS to `.next/` directory

## Key Dependencies

- `next` - Framework
- `@chakra-ui/react` - Component library
- `gray-matter` - YAML front matter parsing
- `next-mdx-remote` - MDX rendering
- `@mdx-js/react` - MDX provider
- `date-fns` - Date utilities
- `slug` - URL slug generation
- `react-icons` - Icon library
- `@vercel/kv` - KV store (for Strava integration)

## Important Patterns

1. **Page Layouts**: Pages define their own layout via `getLayout` function on the component - see `src/pages/index.tsx` and `src/pages/posts/[slug].tsx` for examples

2. **MDX Integration**:
   - Front matter extracted with `gray-matter`
   - Content serialized with `next-mdx-remote/serialize`
   - Custom components injected via `MDXComponents.tsx` + provider in `_app.tsx`

3. **Theming**: Uses Chakra UI's color mode system (light/dark) - toggle in `DarkModeSwitch.tsx`

4. **Type Safety**: TypeScript strict mode enabled - interface definitions in `src/lib/SiteConfig.tsx` and `src/lib/post.tsx`

## Common Tasks

**Adding a new blog post:**
- Run `just new "Your Post Title"` which creates `/content/{slug}/` and a template `.mdx` file
- Edit the post's front matter and content
- Change `draft: false` when ready to publish
- Posts will appear on next build/dev server restart

**Modifying the theme:**
- Update `src/theme.tsx` for global styles
- Update `src/lib/SiteConfig.tsx` for site-specific colors and metadata

**Adding custom MDX components:**
- Create component in `src/components/`
- Export from `src/components/MDXComponents.tsx`
- Use in MDX files as JSX tags

**Updating navigation links:**
- Edit `src/lib/SiteConfig.tsx` - modify the `links` array
