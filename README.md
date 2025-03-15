# LUMM Web - Developer Documentation

## Project Overview

LUMM Web is a React-based website featuring a homepage, about section, contact page, and an online shop with Stripe payment integration. The project is built with Vite and uses React Router for navigation.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 4 + Custom CSS
- **Routing**: React Router 7
- **Payment Processing**: Stripe (integration in progress)
- **Animation Effects**: react-powerglitch, react-fast-marquee, react-scroll-parallax
- **HTTP Client**: Axios

## Project Structure

```
lumm_web/
├── public/               # Static assets
│   ├── images/           # Image assets (including shop product images)
│   └── videos/           # Video assets (including animated logo)
├── src/
│   ├── assets/           # Frontend assets
│   ├── components/       # Reusable React components
│   │   └── shop/         # Shop-specific components 
│   ├── config/           # Application configuration
│   ├── pages/            # Page-level components
│   └── styles/           # CSS stylesheets
```

## Current State & Development Branch

The project is currently on the `stripe-integration` branch, integrating Stripe payments with the shop functionality. The backend is not included in this repository and must be set up separately.

## Key Components

### Pages

- **Home.jsx**: Landing page with animated logo video
- **About.jsx**: Information about the association
- **Contact.jsx**: Contact form and information
- **Shop.jsx**: Main shop page with product grid
- **ProductDetail.jsx**: Detailed view of a specific product
- **ShopSuccess.jsx**: Order confirmation page after Stripe checkout

### Shop Components

- **ProductGrid.jsx**: Displays products grouped by category
- **ProductCard.jsx**: Individual product display with hover effects and "Add to Basket" functionality
- **BasketModal.jsx**: Shopping cart overlay with checkout functionality using Stripe

## Styling Approach

The project uses TailwindCSS for styling with some custom CSS:

- Utility classes from Tailwind for layout and basic styling
- Custom CSS classes for specific components (particularly in the shop)
- Font families: 'Oswald' for headings, 'Atkinson Hyperlegible Mono' for body text
- Custom utility classes like `.flex-centered` and `.shift-hover`
- Dark theme with a primarily black background and light text

## State Management

- Local React state using useState and useEffect hooks
- Shopping basket state is maintained in the Shop component
- Product data is fetched from an external API with a fallback to sample products

## External API Integration

The shop functionality expects to communicate with an external API:

- Product data is fetched from `${import.meta.env.VITE_SERVER_URL}/products`
- Checkout process uses `${import.meta.env.VITE_SERVER_URL}/create-checkout-session`
- Stripe integration with `loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)`

## Environment Variables

The application requires the following environment variables:

- `VITE_STRIPE_PUBLIC_KEY`: Stripe publishable key
- `VITE_SERVER_URL`: URL for the backend server API

## Development Workflow

```
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Browser Support

The project uses modern JavaScript features and React 19, targeting modern browsers. No explicit polyfills or backward compatibility measures are included.