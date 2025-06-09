# Active Sefton Shortcut App

A minimal Progressive Web App (PWA) that redirects users to the Active Sefton site finder.

## Files

- `index.html` - Main HTML file with redirect functionality
- `manifest.json` - PWA manifest for home screen installation
- `icon.svg` - Placeholder icon (needs to be converted to PNG)

## Setup

1. Convert `icon.svg` to `icon.png` in both 192x192 and 512x512 sizes
2. Deploy to a web server (GitHub Pages, Netlify, etc.)
3. Visit the URL on mobile devices to install to home screen

## Icon Conversion

You can convert the SVG to PNG using:
- Online tools like `svg2png.com`
- Command line: `convert icon.svg -resize 192x192 icon-192.png`
- Image editing software like GIMP or Photoshop

Make sure to create both 192x192 and 512x512 versions, or use a single 512x512 that browsers can scale down.

## Deployment

This app can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

The app will immediately redirect to: https://activesefton.gladstonego.cloud/site-finder
