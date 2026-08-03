# Dexmy EdTech — Frontend

React + Vite frontend for the Dexmy EdTech Platform.

## Stack
- React 18
- React Router v6
- Axios
- Socket.io Client
- Tailwind CSS
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env

# Start dev server
npm run dev
```

## Project Structure

```
src/
├── api/          # Axios instance + endpoint constants
├── assets/       # Images, icons, fonts
├── components/   # Reusable UI components
├── config/       # App configuration
├── constants/    # Roles, routes, permissions, app constants
├── context/      # Auth, Theme, User, Socket context
├── hooks/        # Custom React hooks
├── layouts/      # Page layout wrappers
├── pages/        # All page components by role/section
├── routes/       # Route guards and AppRoutes
├── services/     # API service modules per domain
├── store/        # Global state (Zustand/Redux placeholder)
├── styles/       # CSS variables and global styles
└── utils/        # Helpers, validators, formatters
```
