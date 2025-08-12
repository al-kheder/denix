# Denix Landing Page

A modern, multilingual business landing page built with Next.js 15, featuring AI-powered ERP system marketing content with comprehensive internationalization support.

## 🌟 Features

### 🌐 **Advanced Internationalization (i18n)**

- **Automatic OS Language Detection**: Detects user's operating system language on first visit
- **Persistent Language Preference**: Remembers user's language choice across sessions
- **RTL/LTR Support**: Full right-to-left support for Arabic with automatic text direction
- **Supported Languages**: English (en) and Arabic (ar)
- **Dynamic Translation Loading**: Translations loaded asynchronously with caching
- **Nested Translation Keys**: Support for complex translation structures

### 🎨 **Modern UI/UX**

- **Dark/Light Mode**: Full theme support with system preference detection
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Smooth Animations**: Staggered hero section animations with CSS keyframes
- **Modern Typography**: Cairo font family optimized for English and Arabic
- **Professional Navigation**: Multi-level mega menu with hover effects

### 🚀 **Performance & Technical**

- **Next.js 15**: Latest Next.js with Turbopack for faster development
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **Component Architecture**: Reusable, modular component structure
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
denixlandingpage/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and custom animations
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Homepage with hero section
├── components/                   # Reusable React components
│   ├── header.tsx               # Navigation header with mega menu
│   ├── hero.tsx                 # Animated hero section
│   ├── language-provider.tsx    # Language context and management
│   ├── language-debug.tsx       # Development language utilities
│   └── theme-provider.tsx       # Dark/light theme management
├── translations/                 # Internationalization system
│   ├── en.json                  # English translations
│   ├── ar.json                  # Arabic translations
│   ├── types.ts                 # TypeScript interfaces
│   ├── loader.ts                # Translation loading logic
│   ├── utils.ts                 # Translation utilities
│   └── index.ts                 # Export barrel
├── public/                      # Static assets
│   ├── images/                  # Images and photos
│   │   ├── hero/               # Hero section images
│   │   ├── products/           # Product screenshots
│   │   ├── logos/              # Company and partner logos
│   │   └── icons/              # Custom icons and graphics
│   ├── videos/                  # Video files
│   │   ├── hero-demo.mp4       # Hero section demo video
│   │   ├── product-demos/      # Product demonstration videos
│   │   └── testimonials/       # Customer testimonial videos
│   ├── documents/               # PDF and document files
│   │   ├── brochures/          # Marketing brochures
│   │   └── guides/             # User guides and manuals
│   └── favicons/                # Favicon files
├── package.json                 # Dependencies and scripts
└── README.md                    # This documentation
```

## 🛠️ Technology Stack

### **Frontend Framework**

- **Next.js 15.4.6**: React framework with App Router
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development

### **Styling & UI**

- **Tailwind CSS 4**: Utility-first CSS framework
- **Cairo Font**: Google Fonts with Arabic support
- **Lucide React**: Modern icon library
- **Custom CSS Animations**: Keyframe animations for hero section

### **State Management & Context**

- **React Context**: Language and theme state management
- **localStorage**: Persistent user preferences
- **next-themes**: Theme switching with system detection

### **Development Tools**

- **ESLint 9**: Code linting and formatting
- **Turbopack**: Fast development server
- **PostCSS**: CSS processing and optimization

## 🎯 Core Components

### **Header Component (`components/header.tsx`)**

- Responsive navigation with mobile menu
- Multi-level mega menu for products
- Language toggle (EN/AR) with flags
- Dark/light theme toggle
- Call-to-action buttons
- Professional logo integration

### **Hero Section (`components/hero.tsx`)**

- Animated content with staggered reveal
- Gradient text effects
- Feature list with checkmark icons
- Two-column layout (content + video placeholder)
- Responsive design for all devices
- Multilingual content support

### **Language System (`translations/`)**

- **Automatic Detection**: OS language detection on first visit
- **Persistent Storage**: Remember user language choice
- **Fallback System**: English fallback for unsupported languages
- **Type Safety**: Full TypeScript interfaces for translations
- **Caching**: Efficient translation loading and caching
- **RTL Support**: Automatic text direction handling

### **Theme System (`components/theme-provider.tsx`)**

- System theme detection
- Manual theme switching
- Persistent theme preference
- CSS custom properties integration

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: 1024px - 1280px (lg)
- **Large Desktop**: > 1280px (xl)

### **Mobile Features**

- Hamburger menu navigation
- Touch-friendly interactions
- Optimized typography scaling
- Responsive grid layouts

## 🌐 Internationalization Features

### **Language Detection Logic**

1. **Check localStorage**: Use stored preference if available
2. **Detect OS Language**: Check `navigator.language` and `navigator.languages`
3. **Fallback**: Default to English if language not supported
4. **Store Choice**: Save user's language selection

### **Translation Structure**

```json
{
  "nav": { "product": "Product", ... },
  "hero": { "title": "All-In-One AI", ... },
  "buttons": { "start_free": "Start Free Now", ... },
  "product": { "point_of_sale": "Point Of Sale", ... }
}
```

### **RTL Support**

- Automatic `dir="rtl"` for Arabic
- Tailwind RTL utilities (`rtl:space-x-reverse`)
- Proper text alignment and spacing

## 🎨 Animation System

### **Hero Section Animations**

- **Staggered Entrance**: Elements appear sequentially
- **Animation Types**: Fade-in-up, fade-in-right, scale-in
- **Timing**: 0.2s intervals for smooth flow
- **CSS Keyframes**: Custom animations in `globals.css`

### **Animation Sequence**

1. Green label (0.2s)
2. Main heading (0.4s)
3. Subtitle (0.6s)
4. Feature list items (0.8s - 1.4s)
5. CTA buttons (1.6s)
6. Video section (0.8s, parallel)

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18.x or higher
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd denixlandingpage

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**

```bash
npm run dev     # Start development server with Turbopack
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## � Static Assets & Resources

### **Resource Directory Structure**

All static assets should be placed in the `public/` directory. Next.js automatically serves these files from the root URL.

```
public/
├── images/                      # All image files
│   ├── hero/                   # Hero section images
│   │   ├── hero-background.jpg
│   │   ├── hero-illustration.png
│   │   └── hero-mockup.webp
│   ├── products/               # Product screenshots
│   │   ├── point-of-sale.png
│   │   ├── inventory-dashboard.jpg
│   │   ├── call-center.png
│   │   ├── reports-analytics.jpg
│   │   └── digital-menu.png
│   ├── logos/                  # Company and partner logos
│   │   ├── denix-logo.svg
│   │   ├── denix-logo-white.svg
│   │   ├── partners/
│   │   └── clients/
│   ├── team/                   # Team member photos
│   ├── testimonials/           # Customer photos
│   └── icons/                  # Custom icons
├── videos/                     # Video files
│   ├── hero-demo.mp4           # Main hero demo video
│   ├── hero-demo.webm          # WebM format for better compression
│   ├── product-demos/          # Individual product demos
│   │   ├── pos-demo.mp4
│   │   ├── inventory-demo.mp4
│   │   └── dashboard-demo.mp4
│   └── background/             # Background videos
├── documents/                  # PDF and document files
│   ├── brochures/
│   │   ├── company-brochure-en.pdf
│   │   └── company-brochure-ar.pdf
│   ├── guides/
│   │   ├── quick-start-guide.pdf
│   │   └── user-manual.pdf
│   └── whitepapers/
└── favicons/                   # Favicon and app icons
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    └── android-chrome-192x192.png
```

### **How to Add Resources**

#### **1. Adding Images**

```bash
# Create directories
mkdir -p public/images/{hero,products,logos,team,testimonials,icons}

# Add your images
cp your-hero-image.jpg public/images/hero/
cp product-screenshot.png public/images/products/
cp company-logo.svg public/images/logos/
```

#### **2. Adding Videos**

```bash
# Create video directories
mkdir -p public/videos/{product-demos,background}

# Add video files (multiple formats recommended)
cp hero-demo.mp4 public/videos/
cp hero-demo.webm public/videos/
cp pos-demo.mp4 public/videos/product-demos/
```

#### **3. Adding Documents**

```bash
# Create document directories
mkdir -p public/documents/{brochures,guides,whitepapers}

# Add PDF files
cp company-brochure.pdf public/documents/brochures/
cp user-guide.pdf public/documents/guides/
```

### **Using Resources in Components**

#### **Images in React Components**

```tsx
import Image from 'next/image'

// Basic image usage
<Image
  src="/images/hero/hero-background.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority // Use for above-the-fold images
/>

// Responsive image
<Image
  src="/images/products/point-of-sale.png"
  alt="Point of Sale System"
  fill
  className="object-cover"
/>

// Logo usage
<Image
  src="/images/logos/denix-logo.svg"
  alt="Denix Logo"
  width={140}
  height={37}
  className="h-8 w-auto"
/>
```

#### **Videos in Components**

```tsx
// Hero video with multiple formats
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/images/hero/video-poster.jpg"
  className="w-full h-full object-cover"
>
  <source src="/videos/hero-demo.webm" type="video/webm" />
  <source src="/videos/hero-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

// Product demo video
<video
  controls
  poster="/images/products/pos-demo-poster.jpg"
  className="w-full rounded-lg"
>
  <source src="/videos/product-demos/pos-demo.mp4" type="video/mp4" />
</video>
```

#### **Background Images with CSS**

```tsx
// Using Tailwind classes
<div
  className="bg-cover bg-center h-screen"
  style={{backgroundImage: "url('/images/hero/hero-background.jpg')"}}
>
  Content here
</div>

// Or with CSS classes in globals.css
.hero-bg {
  background-image: url('/images/hero/hero-background.jpg');
  background-size: cover;
  background-position: center;
}
```

#### **Document Downloads**

```tsx
// PDF download links
<a
  href="/documents/brochures/company-brochure-en.pdf"
  download
  className="btn btn-primary"
>
  Download Brochure
</a>;

// Conditional language-based documents
const brochureUrl =
  language === "ar"
    ? "/documents/brochures/company-brochure-ar.pdf"
    : "/documents/brochures/company-brochure-en.pdf";
```

### **Image Optimization Best Practices**

#### **Recommended Formats**

- **WebP**: Modern format with excellent compression
- **AVIF**: Next-generation format (browser support growing)
- **JPEG**: Good for photos with many colors
- **PNG**: Good for images with transparency
- **SVG**: Perfect for logos and icons

#### **Image Sizing Guidelines**

```tsx
// Hero images
width: 1920px, height: 1080px (16:9 ratio)

// Product screenshots
width: 1200px, height: 800px (3:2 ratio)

// Thumbnails
width: 400px, height: 300px (4:3 ratio)

// Profile photos
width: 300px, height: 300px (1:1 ratio)

// Icons
SVG format or 24x24px, 32x32px, 48x48px PNG
```

#### **Video Optimization**

```bash
# Compress videos for web
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4

# Create WebM version
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -c:a libopus output.webm

# Create poster image
ffmpeg -i input.mp4 -ss 00:00:01 -frames:v 1 poster.jpg
```

### **Performance Considerations**

#### **Image Loading Strategies**

```tsx
// Above-the-fold images (hero section)
<Image priority src="..." alt="..." />

// Below-the-fold images
<Image loading="lazy" src="..." alt="..." />

// Placeholder while loading
<Image
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
  src="..."
  alt="..."
/>
```

#### **Responsive Images**

```tsx
<Image
  src="/images/hero/hero-image.jpg"
  alt="Hero"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
/>
```

### **Example: Updating Hero Section with Real Video**

```tsx
// Replace placeholder in hero.tsx
<div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/images/hero/demo-poster.jpg"
    className="w-full h-full object-cover"
  >
    <source src="/videos/hero-demo.webm" type="video/webm" />
    <source src="/videos/hero-demo.mp4" type="video/mp4" />
  </video>

  {/* Video overlay controls */}
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
      <PlayIcon className="w-8 h-8 text-white" />
    </button>
  </div>
</div>
```

### **SEO and Accessibility**

#### **Image Alt Text**

```tsx
// Descriptive alt text
<Image src="/images/products/dashboard.jpg" alt="Analytics dashboard showing sales trends and key performance indicators" />

// Decorative images
<Image src="/images/decorative-bg.jpg" alt="" />
```

#### **Structured Data for Images**

```tsx
// JSON-LD for product images
const productImageSchema = {
  "@type": "ImageObject",
  url: "https://yoursite.com/images/products/point-of-sale.jpg",
  caption: "Point of Sale System Interface",
};
```

## 🎯 Resource Checklist

### **Essential Images Needed**

- [ ] Hero background/illustration
- [ ] Product screenshots (5 main products)
- [ ] Company logo (light/dark versions)
- [ ] Team member photos
- [ ] Client/partner logos
- [ ] Feature icons
- [ ] Testimonial photos

### **Essential Videos Needed**

- [ ] Hero demo video (30-60 seconds)
- [ ] Product demonstration videos
- [ ] Customer testimonial videos
- [ ] Background ambient videos (optional)

### **Essential Documents**

- [ ] Company brochure (EN/AR)
- [ ] Product catalogs
- [ ] User guides
- [ ] Technical specifications
- [ ] Case studies

### **Language Configuration**

Add new languages in `translations/loader.ts`:

```typescript
export function getAvailableLanguages(): Language[] {
  return ["en", "ar", "de"]; // Add new language codes
}
```

### **Theme Configuration**

Customize themes in `app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* Add custom theme variables */
}
```

### **Font Configuration**

Update fonts in `app/layout.tsx`:

```typescript
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
```

## 📊 Business Content

### **Product Features Highlighted**

- **Point of Sale System**: Complete sales tracking and inventory management
- **Inventory Management**: Multi-branch inventory control
- **Call Centre & Delivery**: Customer management and delivery tracking
- **Dashboard & Reports**: Business intelligence and analytics
- **Digital Menu**: QR code-based restaurant menu system

### **Value Propositions**

- **Save Time**: E-commerce process automation
- **Reduce Costs**: AI integration and unified communication
- **Grow & Scale**: Business expansion capabilities
- **Quick Training**: Modern, intuitive interface

## 🔍 SEO & Accessibility

### **SEO Features**

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Meta tags and descriptions
- Language declarations (`lang` attribute)
- Clean URL structure

### **Accessibility Features**

- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management

## 🎯 Performance Optimizations

### **Loading Strategies**

- Dynamic translation loading
- Font optimization with `display: swap`
- Image optimization (when added)
- Component-level code splitting

### **Caching**

- Translation caching in memory
- localStorage for user preferences
- Browser caching for static assets

## 🔧 Development Tools

### **Language Debugging**

Use `language-debug.tsx` for development:

```typescript
const { getDetectedLanguage, resetLanguagePreference } = useLanguageDebug();

// Get detection info
console.log(getDetectedLanguage());

// Reset for testing
resetLanguagePreference();
```

### **Theme Testing**

Test theme switching:

```typescript
const { theme, setTheme } = useTheme();
setTheme("dark"); // or 'light', 'system'
```

## 🚀 Deployment

### **Build Process**

```bash
npm run build
npm run start
```

### **Environment Variables**

Currently no environment variables required.

### **Production Considerations**

- Enable compression
- Configure CDN for static assets
- Set up proper caching headers
- Monitor Core Web Vitals

## 🤝 Contributing

### **Code Style**

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Semantic commit messages

### **Component Guidelines**

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Include JSDoc comments for complex functions
- Follow responsive design patterns

## 📄 License

Private project - All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

_Last updated: August 2025_
