# Trelly

[![CI](https://github.com/TheMehediHQ/Treely/actions/workflows/ci.yml/badge.svg)](https://github.com/TheMehediHQ/Treely/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Trelly is a **plant care tracking and management web application** that helps users manage their plant collections, access care guides, and track watering schedules.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4, DaisyUI, Framer Motion, GSAP, Firebase Auth
- **Backend:** Express 5, MongoDB
- **Monorepo:** Turborepo + npm workspaces
- **Deployment:** Vercel (frontend + API)

## Features

- User authentication (Firebase)
- Add, update, and delete plants
- View plant details and care guides
- Dashboard for personal plant collection
- Responsive design with dark mode
- Animations and interactive UI components

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
- npm or bun
- MongoDB (local or Atlas)

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in `apps/web/` and `apps/server/`:

**apps/web/.env**
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**apps/server/.env**
```
NAME=your_mongodb_username
PASS=your_mongodb_password
PORT=5000
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

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
