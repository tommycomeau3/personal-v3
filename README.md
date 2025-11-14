# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Landing Page** - Beautiful hero section with call-to-action buttons
- 👤 **About Me Page** - Showcase your skills, experience, and background
- 💼 **Projects Page** - Display your projects with descriptions and links
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- 🎨 **Modern UI** - Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Update the name and tagline in the hero section
   - Modify contact links (email, LinkedIn, GitHub)

2. **About Page** (`src/pages/About.jsx`):
   - Update your bio and experience
   - Modify skills and technologies
   - Add or remove experience entries

3. **Projects Page** (`src/pages/Projects.jsx`):
   - Update the projects array with your actual projects
   - Modify project descriptions, technologies, and links

### Styling

The project uses Tailwind CSS. You can customize colors in `tailwind.config.js` and add custom styles in `src/index.css`.

## Technologies Used

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

MIT

