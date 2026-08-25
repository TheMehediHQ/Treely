# Treely

A plant care management app — track your plants, get care guides, and manage your collection.

## Tech Stack

- **Client:** React 19, Vite, Tailwind CSS 4, DaisyUI, Framer Motion, GSAP, Firebase Auth
- **Server:** Express 5, MongoDB, deployed on Vercel

## Project Structure

```
trelly/
├── packages/
│   ├── client/   # React + Vite frontend (Firebase hosting)
│   └── server/   # Express API (Vercel)
├── package.json  # Workspace root (Bun)
└── bun.lock
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh)
- Node.js 18+

### Install

```bash
bun install
```

### Environment Variables

Create a `.env` file in `packages/server/`:

```
NAME=<mongodb_username>
PASS=<mongodb_password>
```

### Run Locally

```bash
# Start both client and server
bun run dev

# Or individually
bun run dev:client
bun run dev:server
```

- Client: http://localhost:5173
- Server: http://localhost:5000

### Build

```bash
bun run build:client
bun run build:server
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

- **Client** → Firebase Hosting (see `.github/workflows/`)
- **Server** → Vercel (see `packages/server/vercel.json`)
