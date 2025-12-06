# Telangana IT Wing - Website Repository

## Project Overview

The Telangana IT Wing Association website is a modern, responsive web application built to foster growth, innovation, and collaboration across Telangana's technology sector. The site showcases the association's mission, vision, and core values while providing information about membership and engagement opportunities.

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite with Rolldown
- **Styling**: Tailwind CSS 4.1.17
- **UI Icons**: Lucide React 0.556.0
- **Linting**: ESLint 9.39.1
- **PostCSS**: 8.5.6 with Autoprefixer

## Project Structure

```
wing/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── Footer.tsx       # Site footer with links
│   │   ├── GlobeCanvas.tsx  # 3D animated globe canvas
│   │   └── DrivingForceCard.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── DrivingForces.tsx # Core driving forces showcase
│   │   ├── VisionMission.tsx # Vision & mission statements
│   │   └── CTA.tsx          # Call-to-action section
│   ├── pages/
│   │   └── Home.tsx         # Main home page
│   ├── data/
│   │   └── drivingForces.ts # Driving forces data
│   ├── assets/              # Static assets
│   ├── App.tsx              # Root component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.tsx             # React entry point
├── public/                  # Static files served as-is
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── package.json             # Project dependencies
└── index.html               # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository** (or extract the project folder)
   ```bash
   cd wing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production (TypeScript check + Vite build)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview production build locally

## Features

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Mobile navigation menu with hamburger toggle
- Adaptive layouts for all screen sizes

### Components

#### Header
- Sticky navigation bar with logo
- Desktop and mobile menu variants
- Links to About, Team, Events, and Join sections
- Backdrop blur effect with semi-transparent background

#### Hero Section
- Eye-catching headline and call-to-action
- 3D animated globe canvas (custom WebGL implementation)
- Grid layout with text and visual content

#### Driving Forces Section
- Showcase of 5 core groups: Students, Employees, Entrepreneurs, Mentors & Experts, Global IT Professionals
- Card-based layout with icons, titles, and descriptions
- Responsive grid (3 columns on medium screens, 5 on large screens)

#### Vision & Mission
- Dual-column layout with contrasting backgrounds
- Vision: Gradient background (indigo to blue)
- Mission: Clean white background with shadow

#### Call-to-Action Section
- Gradient background matching brand colors
- Prominent registration button
- Centered text layout

#### Footer
- 4-column layout with organized links
- Sections: Association, Resources, Contact, Connect
- Copyright notice and attribution

### Design System

#### Color Palette
- **Primary**: Indigo-600 (#4F46E5)
- **Secondary**: Blue-500 (#3B82F6)
- **Background**: Slate-900 (#0F172A) for footer
- **Text**: Slate-800, Slate-600
- **Accents**: White with transparency for glass effects

#### Typography
- **Font**: System UI, Avenir, Helvetica, Arial, sans-serif
- **Font Weight**: Light (300) for elegant appearance
- **Sizes**: Responsive heading scales

#### Spacing & Layout
- **Container**: max-width-7xl (80rem)
- **Padding**: Consistent 6 (1.5rem) on sides, 20 (5rem) vertical spacing
- **Gap**: 12 (3rem) between grid items, 8 (2rem) between sections
- **Border Radius**: Rounded-lg (0.5rem) and rounded-xl (0.75rem) for cards

## CSS Architecture

### Global Styles (`src/index.css`)
- Tailwind directives (base, components, utilities)
- Root color scheme and typography configuration
- Dark and light theme support
- Base element styling (buttons, links, headings)

### Component Styles
- All component styling uses Tailwind utility classes
- Minimal custom CSS - primarily in `App.css`
- Consistent use of Tailwind tokens for colors and spacing

### Tailwind Configuration
- Content paths configured for JSX/TSX files
- Theme extension available for custom values
- PostCSS with Autoprefixer for browser compatibility

## Alignment & Layout Guidelines

### Container Alignment
- All major sections use `max-w-7xl mx-auto` for centered layout
- Consistent padding on all sides: `px-6`
- Full viewport width for gradient sections

### Grid Layouts
- **Hero**: 2-column grid on medium screens (`md:grid-cols-2`)
- **Driving Forces**: 3-column on medium, 5-column on large (`md:grid-cols-3 lg:grid-cols-5`)
- **Vision/Mission**: 2-column equal split (`md:grid-cols-2`)
- **Footer**: 4-column layout (`md:grid-cols-4`)

### Vertical Alignment
- `items-center` for vertical centering in flex containers
- `gap-12` or `gap-8` for consistent spacing
- Flexbox with `space-x-*` utilities for horizontal spacing

## Development Workflow

### Code Style
- ESLint configuration enforces consistent code quality
- TypeScript for type safety
- React Hooks for component logic
- No JSDoc comments (files use TypeScript types)

### Adding Features
1. Create component in `/src/components` or `/src/sections`
2. Use Tailwind classes for styling
3. Import and add to appropriate page
4. Test responsive behavior
5. Run `npm run lint` to verify code quality

### Building for Production
1. `npm run build` - Creates optimized production build
2. `npm run preview` - Test production build locally
3. Deploy `dist/` folder to hosting platform

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tailwind CSS provides autoprefixed output for broad compatibility

## Performance Considerations

- **Canvas Animation**: GlobeCanvas uses `requestAnimationFrame` for smooth 3D rendering
- **Lazy Loading**: Consider implementing for images if added
- **Code Splitting**: Vite handles automatic route-based splitting
- **CSS**: Tailwind PurgeCSS removes unused styles in production

## Future Enhancements

- [ ] Add more interactive sections
- [ ] Implement dynamic content management
- [ ] Add event calendar
- [ ] Blog/news section
- [ ] Team member profiles
- [ ] Event registration system
- [ ] Newsletter signup
- [ ] Analytics integration

## Troubleshooting

### Development Server Issues
- **Port already in use**: Modify port in `vite.config.ts` or kill process on port 5173
- **Module not found**: Run `npm install` to ensure all dependencies are installed
- **Hot reload not working**: Check that files are being saved and browser is refreshed

### Build Issues
- **TypeScript errors**: Run `npm run build` to see full error messages
- **CSS not loading**: Ensure `tailwind.config.js` includes correct content paths

## Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)
1. Run `npm run build`
2. Deploy `dist/` folder
3. Configure for SPA routing if needed

### Environment Setup
- No environment variables required for basic setup
- Consider adding for API endpoints or analytics

## License

This project is part of the Telangana IT Wing Association.

## Contributing

To contribute to this project:
1. Create a feature branch from main
2. Make your changes
3. Run `npm run lint` to ensure code quality
4. Submit a pull request with clear description

## Support

For questions or issues:
- Email: info@tgitwing.com
- Location: Hyderabad, Telangana
- Connect: Instagram, Facebook, LinkedIn, WhatsApp
