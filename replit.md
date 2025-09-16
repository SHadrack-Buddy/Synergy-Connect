# Flash Connect - Team Collaboration Platform

## Overview

Flash Connect is a modern team collaboration platform inspired by Linear, Notion, and Slack. It provides real-time messaging, organization management, post feeds, and comprehensive settings in a clean, professional interface. The application features a full-stack TypeScript architecture with React frontend, Express backend, and PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development tooling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Framework**: Radix UI primitives with custom styled components using shadcn/ui
- **Styling**: Tailwind CSS with custom design system supporting light/dark themes
- **Component Structure**: 
  - Main layout with collapsible sidebar navigation
  - Page-based routing (Home, Messages, Posts, Organizations, Settings)
  - Reusable UI components with consistent styling patterns

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **API Structure**: RESTful API with `/api` prefix routing
- **Storage Interface**: Abstract storage layer with in-memory implementation for development
- **Session Management**: Prepared for session-based authentication

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Provider**: Neon Database with serverless connection pooling
- **Schema**: Zod integration for type-safe schema validation
- **Migration**: Drizzle Kit for database migrations and schema management
- **Current Schema**: Basic user table with username/password authentication

### Design System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Typography**: Inter font from Google Fonts for optimal readability
- **Color Palette**: Professional blue primary (217 91% 60%) with neutral backgrounds
- **Layout System**: CSS Grid and Flexbox with consistent spacing units
- **Theme Support**: Complete light/dark mode implementation with CSS custom properties
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Development Tooling
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Experience**: Hot module replacement and error overlay integration
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **State Management**: TanStack React Query for server state

### UI and Styling
- **Component Library**: Radix UI primitives (30+ components)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Design Tokens**: Class Variance Authority for component variants
- **Utilities**: clsx for conditional classes, tailwind-merge for class merging

### Database and Backend
- **Database**: Neon Database (PostgreSQL) with connection pooling
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for schema validation and type inference
- **Session Storage**: connect-pg-simple for PostgreSQL session store

### Development Dependencies
- **Type Checking**: TypeScript with @types packages for Node.js and Vite
- **Development Server**: tsx for TypeScript execution
- **Error Handling**: Custom error overlay and Replit integration tools

### Planned Integrations
- **Email**: SendGrid for transactional emails
- **Real-time**: WebSocket support prepared for live messaging
- **File Storage**: Asset handling system with attached_assets directory
- **Authentication**: Session-based auth with prepared user management