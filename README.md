# WeWantWaste - Skip Hire Website Redesign

A modern, responsive website for skip hire services built with React, TypeScript, and Tailwind CSS. This project demonstrates a complete redesign of a waste management company's website with focus on user experience, performance, and conversion optimization.

## 🚀 Live Demo

**Deployed Site:** [https://wewantwasteee.netlify.app/](https://wewantwasteee.netlify.app/)

## 📋 Project Overview

This project is a complete redesign of a skip hire company website, focusing on:
- **User-centric design** with clear pricing and service information
- **Interactive skip selector** with real-time pricing calculations
- **Responsive design** that works seamlessly across all devices
- **Performance optimization** with modern web technologies
- **Conversion-focused** layout to drive bookings

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Build Tool:** Vite for fast development and optimized builds
- **Icons:** Lucide React for consistent iconography
- **Deployment:** Netlify with automatic deployments
- **Code Quality:** ESLint and TypeScript for type safety

## 🎨 Design Approach

### Design Philosophy
The redesign follows modern web design principles with emphasis on:
- **Clean, minimalist aesthetic** inspired by industry leaders
- **Apple-level design attention to detail** with subtle animations and micro-interactions
- **User-first approach** with clear information hierarchy
- **Trust-building elements** through professional presentation

### Color System
```css
Primary: Blue (#0284c7 to #075985) - Trust, reliability, professionalism
Secondary: Amber (#facc15) - Energy, attention, call-to-action
Accent: Green (#16a34a) - Success, eco-friendly, positive actions
Neutrals: Gray scale for text and backgrounds
```

### Typography
- **Font:** Inter - Modern, readable, professional
- **Hierarchy:** Clear distinction between headings, body text, and UI elements
- **Line Heights:** 150% for body text, 120% for headings for optimal readability

## 🏗️ Architecture & Code Organization

### Component Structure
```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation and branding
│   ├── Hero.tsx         # Landing section with value proposition
│   ├── Services.tsx     # Service offerings showcase
│   ├── SkipSelector.tsx # Interactive skip selection tool
│   ├── Process.tsx      # How it works explanation
│   ├── Contact.tsx      # Contact information and CTA
│   └── Footer.tsx       # Site footer with links
├── data/                # Data management
│   └── skipData.ts      # Skip pricing and specifications
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared type definitions
└── App.tsx              # Main application component
```

### Key Features Implementation

#### 1. Interactive Skip Selector
- **Dynamic pricing calculation** with VAT handling
- **Smart filtering** by road legal and heavy waste capabilities
- **Visual feedback** with hover states and selection indicators
- **Responsive grid layout** adapting to screen sizes

#### 2. Responsive Design System
- **Mobile-first approach** with progressive enhancement
- **Flexible grid systems** using CSS Grid and Flexbox
- **Consistent spacing** with 8px base unit system
- **Breakpoint strategy:** Mobile (default), Tablet (768px+), Desktop (1024px+)

#### 3. Performance Optimizations
- **Vite build system** for fast development and optimized production builds
- **Component-based architecture** for code reusability
- **Efficient image handling** with external CDN links
- **CSS optimization** with Tailwind's purge system

## 🎯 User Experience (UX) Strategy

### Conversion Optimization
1. **Clear value proposition** in hero section
2. **Trust indicators** throughout the site
3. **Simplified booking process** with prominent CTAs
4. **Transparent pricing** with no hidden costs
5. **Social proof** through service highlights

### Accessibility Features
- **Semantic HTML** structure for screen readers
- **Keyboard navigation** support
- **Color contrast** meeting WCAG guidelines
- **Responsive text sizing** for readability
- **Focus indicators** for interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Modern web browser
- Git for version control

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd wewantwaste-redesign

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Workflow
1. **Component Development:** Create reusable components in `/src/components`
2. **Styling:** Use Tailwind classes with custom CSS for complex animations
3. **Type Safety:** Leverage TypeScript for better development experience
4. **Testing:** Manual testing across devices and browsers
5. **Deployment:** Automatic deployment to Netlify on push

## 📱 Responsive Design Strategy

### Breakpoint System
- **Mobile:** 320px - 767px (default)
- **Tablet:** 768px - 1023px (`md:` prefix)
- **Desktop:** 1024px+ (`lg:` prefix)

### Layout Adaptations
- **Navigation:** Hamburger menu on mobile, full navigation on desktop
- **Grid Systems:** 1 column mobile → 2-3 columns tablet → 3-4 columns desktop
- **Typography:** Responsive font sizes with `clamp()` for fluid scaling
- **Spacing:** Proportional padding and margins across breakpoints

## 🎨 Custom CSS Classes

### Utility Classes
```css
.gradient-bg          # Primary gradient background
.card-hover          # Hover effects for cards
.btn-primary         # Primary button styling
.btn-secondary       # Secondary button styling
.section-padding     # Consistent section spacing
.skip-card           # Skip selector card styling
.progress-step       # Process step indicators
```

### Animation Classes
```css
.animate-fade-in     # Fade in animation
.animate-slide-up    # Slide up animation
.transition-all      # Smooth transitions
```

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

### Optimization Techniques
- **Code splitting** with dynamic imports
- **Image optimization** with appropriate formats and sizes
- **CSS purging** to remove unused styles
- **Minification** of JavaScript and CSS
- **Gzip compression** on server

## 🔧 Configuration Files

### Key Configuration
- **`tailwind.config.js`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript configuration
- **`vite.config.ts`** - Vite build configuration
- **`package.json`** - Dependencies and scripts

## 🚀 Deployment

### Netlify Deployment
The site is automatically deployed to Netlify with:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18+
- **Environment:** Production optimized

### Deployment Features
- **Automatic deployments** from Git pushes
- **Preview deployments** for pull requests
- **Custom domain** support
- **SSL certificates** automatically provisioned
- **CDN distribution** for global performance

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

For questions about this project or collaboration opportunities:
- **Project Repository:** [GitHub Link]
- **Live Demo:** [https://keen-twilight-74e1b4.netlify.app](https://keen-twilight-74e1b4.netlify.app)
- **Technical Documentation:** See inline code comments and this README

---

**Built with ❤️ using modern web technologies for optimal user experience and business results.**
