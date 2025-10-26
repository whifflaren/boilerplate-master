# Next.js App Template

A modern Next.js application template with TypeScript support, API routes, and optimized performance.

## Features

- ⚡️ **Next.js 14** - Latest Next.js with App Router support
- ⚛️ **React 18** - Latest React with concurrent features
- 🎨 **CSS Modules** - Scoped styling
- 🔧 **ESLint** - Code linting and formatting
- 🚀 **API Routes** - Built-in API endpoints
- 📱 **Responsive** - Mobile-first design
- 🌙 **Dark Mode** - Automatic dark mode support

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
pages/
├── _app.js           # App component wrapper
├── index.js          # Home page
└── api/              # API routes
    └── hello.js      # Example API endpoint

styles/
├── globals.css       # Global styles
└── Home.module.css   # Home page styles

public/               # Static assets
├── favicon.ico
└── vercel.svg
```

## API Routes

The template includes a sample API route:

- `GET /api/hello` - Returns a JSON response with API information

## Customization

- Edit `pages/index.js` to modify the home page
- Add new pages in the `pages/` directory
- Create API routes in `pages/api/`
- Update styles in the `styles/` directory
- Configure Next.js in `next.config.js`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vercel Deployment](https://vercel.com/docs)
