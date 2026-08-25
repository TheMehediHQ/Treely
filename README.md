# Treely

A plant care management app — track your plants, get care guides, and manage your collection.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4, DaisyUI, Framer Motion, GSAP, Firebase Auth
- **Backend:** Express 5, MongoDB
- **Monorepo:** Turborepo + npm workspaces
- **Deployment:** Vercel (frontend + API)

## Project Structure

```
trelly/
├── apps/
│   ├── web/           # React + Vite frontend
│   └── server/        # Express API
├── api/               # Vercel serverless entry point
├── package.json       # Workspace root
├── turbo.json         # Build orchestration
└── vercel.json        # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or bun/pnpm)

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in `apps/server/`:

```
NAME=<mongodb_username>
PASS=<mongodb_password>
```

### Run Locally

```bash
# Start both apps
npm run dev

# Or individually
npm run dev:web       # frontend only
npm run dev:server    # backend only
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Build

```bash
npm run build         # build all
npm run build:web     # build frontend only
```

## API Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/plants`            | Get all plants      |
| GET    | `/plants/:id`        | Get plant by ID     |
| POST   | `/plants`            | Add a new plant     |
| PUT    | `/plants-update/:id` | Update a plant      |
| DELETE | `/plants/:id`        | Delete a plant      |

## Deployment

Everything deploys to **Vercel** from a single project:
- Frontend → static build from `apps/web/dist`
- API → serverless function from `api/`
