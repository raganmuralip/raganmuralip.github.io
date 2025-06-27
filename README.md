# Ragan Murali Pasupuleti - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, professional experience, and achievements.

## Features

- **Modern Design**: Dark cybersecurity theme with neon accents and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Gallery**: Conference photo gallery with upload functionality
- **Professional Sections**: Hero, About, Experience, Projects, Skills, Certifications, Gallery, Contact
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and animations

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ragan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/ragan-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/ragan-portfolio/'
})
```

4. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## Customization

### Adding Photos to Gallery

The gallery supports dynamic photo management. To add photos:

1. Use the "Add Photos" button in the gallery section
2. Or manually add photos to the `photos` array in `src/components/Gallery.jsx`

### Updating Content

- **Personal Info**: Edit `src/components/Hero.jsx` and `src/components/About.jsx`
- **Experience**: Update the `experiences` array in `src/components/Experience.jsx`
- **Projects**: Modify the `projects` array in `src/components/Projects.jsx`
- **Skills**: Update skill categories in `src/components/Skills.jsx`
- **Certifications**: Edit the `certifications` array in `src/components/Certifications.jsx`
- **Contact Info**: Update contact details in `src/components/Contact.jsx`

### Styling

- **Colors**: Modify CSS variables in `src/App.css`
- **Animations**: Adjust Framer Motion settings in component files
- **Layout**: Update Tailwind classes in component files

## Project Structure

```
ragan-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── hooks/
│   ├── lib/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Ragan Murali Pasupuleti
- Email: raganmurali.pasupuleti@slu.edu
- Phone: (314) 226-3773
- LinkedIn: [linkedin.com/in/raganmurali/](https://linkedin.com/in/raganmurali/)
- Location: Saint Louis, MO

