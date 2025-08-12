# Static Assets Directory

This directory contains all static assets that will be served directly by Next.js from the root URL.

## Directory Structure

```
public/
├── images/                      # All image files
│   ├── hero/                   # Hero section images
│   ├── products/               # Product screenshots
│   ├── logos/                  # Company and partner logos
│   ├── team/                   # Team member photos
│   ├── testimonials/           # Customer photos
│   └── icons/                  # Custom icons
├── videos/                     # Video files
│   └── product-demos/          # Product demonstration videos
├── documents/                  # PDF and document files
│   ├── brochures/              # Marketing brochures
│   └── guides/                 # User guides and manuals
└── favicons/                   # Favicon files (to be created)
```

## How to Add Files

1. **Images**: Place in appropriate subdirectories

   - Hero images: `images/hero/`
   - Product screenshots: `images/products/`
   - Logos: `images/logos/`

2. **Videos**: Place in `videos/` or `videos/product-demos/`

   - Recommended formats: MP4, WebM
   - Include poster images in `images/` directory

3. **Documents**: Place in `documents/brochures/` or `documents/guides/`
   - Recommended format: PDF
   - Use language suffixes: `-en.pdf`, `-ar.pdf`

## Usage in Components

Access files using absolute paths from root:

- `/images/hero/background.jpg`
- `/videos/demo.mp4`
- `/documents/brochure.pdf`

## Naming Conventions

- Use lowercase letters
- Use hyphens for spaces: `product-demo.mp4`
- Include language codes: `brochure-en.pdf`, `brochure-ar.pdf`
- Use descriptive names: `pos-dashboard-screenshot.png`

## Optimization Tips

- Compress images before uploading
- Use WebP format when possible
- Include multiple video formats (MP4 + WebM)
- Keep file sizes reasonable for web performance
