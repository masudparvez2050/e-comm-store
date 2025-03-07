# E-Commerce Frontend Application

A modern e-commerce platform built with Next.js 13, featuring App Router, Server Components, and a beautiful UI with Tailwind CSS.

## Features

- **Modern UI/UX**
  - Responsive design for all devices
  - Dark/Light mode support
  - Smooth animations and transitions
  - Beautiful UI components using shadcn/ui

- **User Features**
  - User authentication (Login/Register)
  - Password recovery
  - Profile management
  - Wishlist functionality
  - Shopping cart
  - Order history
  - Product reviews and ratings

- **Shopping Experience**
  - Product catalog with categories
  - Advanced search and filtering
  - Product details with image gallery
  - Related products
  - Add to cart/wishlist
  - Secure checkout process

- **Admin Dashboard**
  - Product management
  - Order management
  - Customer management
  - Analytics and reporting
  - Settings configuration

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Data Fetching**: Server Components + API Routes
- **Authentication**: JWT with HTTP-only cookies

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API server running (see server README)

## Project Structure

```
client/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── account/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── cart/
│   │   ├── categories/
│   │   ├── checkout/
│   │   ├── product/
│   │   ├── search/
│   │   ├── wishlist/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── admin/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── product/
│   │   └── ui/
│   └── lib/
│       ├── cart.ts
│       ├── products.ts
│       └── utils.ts
├── public/
├── .env
├── package.json
└── README.md
```

## Page Structure

- `/` - Homepage with featured products and categories
- `/about` - About page
- `/auth/*` - Authentication pages
  - `/auth/login`
  - `/auth/register`
  - `/auth/forgot-password`
- `/account` - User account management
- `/admin/*` - Admin dashboard
  - `/admin/products`
  - `/admin/orders`
  - `/admin/customers`
  - `/admin/settings`
- `/cart` - Shopping cart
- `/categories/*` - Product categories
- `/checkout/*` - Checkout process
- `/product/*` - Product details
- `/search` - Product search
- `/wishlist` - User's wishlist

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env.local file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Key Features Implementation

### Authentication
- JWT-based authentication
- Protected routes with middleware
- Persistent login state
- Password reset functionality

### Shopping Cart
- Local storage persistence
- Real-time updates
- Quantity management
- Price calculations

### Product Management
- Dynamic product loading
- Infinite scroll
- Advanced filtering
- Search functionality
- Category organization

### Checkout Process
- Multi-step checkout
- Address management
- Payment integration
- Order confirmation

### Admin Dashboard
- Sales analytics
- Order management
- Product CRUD operations
- Customer management
- Settings configuration

## Components

### Layout Components
- Navbar with dynamic menu
- Footer with site links
- Authentication button
- Cart button with counter
- Theme switcher

### Home Page Components
- Hero section
- Featured products grid
- Featured brands
- Service highlights

### Product Components
- Product card
- Product gallery
- Product information
- Related products
- Review system

### Cart Components
- Cart item
- Cart summary
- Quantity adjuster
- Price calculator

### Checkout Components
- Checkout form
- Order summary
- Payment selector
- Address form

### Admin Components
- Admin header
- Sidebar navigation
- Dashboard stats
- Sales charts
- Product manager
- Order manager

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Next.js best practices
- Implement proper error handling
- Write meaningful comments
- Use proper component composition

### Performance Optimization
- Implement lazy loading
- Use Next.js Image component
- Optimize API calls
- Implement caching strategies
- Use proper bundle splitting

### State Management
- Use React Context for global state
- Implement proper state updates
- Handle loading states
- Manage form state efficiently

### API Integration
- Implement proper error handling
- Use loading states
- Handle token management
- Implement request caching
- Handle offline scenarios

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.
