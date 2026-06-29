# KERNEL — Digital Headquarters

A next-generation tech collective building the future through AI-native engineering, cinematic interfaces, and precision-crafted digital products.

## Tech Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Backend**: Base44 SDK
- **Routing**: React Router DOM
- **State Management**: TanStack React Query

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn
- Base44 CLI (for full development workflow)

### Installation

```bash
npm install
```

### Development

For frontend-only development against the hosted Base44 backend:

```bash
npm run dev
```

For full development with local Base44 backend:

```bash
base44 dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Available Scripts

- `dev` — Start Vite development server
- `build` — Build for production
- `lint` — Run ESLint
- `lint:fix` — Fix ESLint errors
- `typecheck` — Run TypeScript type checking
- `preview` — Preview production build locally

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── hq/        # Headquarters-themed components (BootSequence, HUDFrame, NavBar, etc.)
│   └── ui/        # Radix UI component wrappers
├── pages/          # Page components (Home, Login, Register, etc.)
├── lib/            # Utility libraries and context providers
├── api/            # API clients including Base44 SDK client
├── hooks/          # Custom React hooks
└── App.jsx         # Main application entry
```

## Environment Variables

Create a `.env.local` file for local-only environment values. See `.gitignore` for sensitive files that should not be committed.

## Base44 Integration

This project uses the Base44 SDK for backend integration. Key files:

- `src/api/base44Client.js` — Base44 SDK client configuration
- `vite.config.js` — Vite plugin setup with Base44 integration

For Base44-specific workflows, refer to the [Base44 CLI documentation](https://docs.base44.com/developers/references/cli/get-started/overview.md).

## License

Private project — All rights reserved.