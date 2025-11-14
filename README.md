# Solid.js PWA App

A Progressive Web App (PWA) built with Solid.js and Vite.

## Features

- Built with Solid.js for reactive UI
- Vite for fast development and building
- PWA support with offline capabilities
- Installable on desktop and mobile devices
- Service Worker for caching and offline functionality

## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run preview`

Preview the production build locally.

## PWA Features

### Manifest

The app includes a web manifest with:
- App name: "Solid.js PWA App"
- Theme colors and icons
- Standalone display mode

### Service Worker

- Automatic precaching of app shell files
- Runtime caching for external resources
- Offline support via Workbox

### Installation

When you visit the app in a supported browser, you'll see an "Install PWA" button if the app is installable.

## Customization

### Icons

Replace the icons in the `public/` directory:
- `pwa-192x192.png` - 192x192 icon
- `pwa-512x512.png` - 512x512 icon
- `apple-touch-icon.png` - Apple touch icon

### Configuration

Edit the PWA configuration in `vite.config.js` to customize:
- App name and description
- Theme colors
- Caching strategies

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)
