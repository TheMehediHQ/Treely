# Contributing to Trelly

Thank you for your interest in contributing to Trelly! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating, you agree to uphold a respectful and inclusive environment.

## How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Describe the issue clearly with steps to reproduce
- Include screenshots or logs if applicable
- Mention your environment (OS, Node.js version, browser)

### Suggesting Features

- Open a GitHub issue with the `enhancement` label
- Describe the feature and its use case
- Consider whether it aligns with the project's scope

### Development Setup

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/Treely.git
cd Treely
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

```bash
cp apps/web/.env.example apps/web/.env
cp apps/server/.env.example apps/server/.env
```

5. Update the `.env` files with your local credentials (Firebase, MongoDB).

6. Start the development servers:

```bash
npm run dev
```

- Frontend runs at http://localhost:5173
- Backend runs at http://localhost:5000

### Project Structure

```
trely/
├── apps/
│   ├── web/           # React + Vite frontend
│   └── server/        # Express API
├── api/               # Vercel serverless entry point
└── package.json       # Workspace root
```

### Pull Request Process

1. Create a feature branch from `main`:

```bash
git checkout -b feat/your-feature-name
```

2. Make your changes and ensure they pass linting:

```bash
npm run lint
```

3. Commit your changes with a clear message:

```bash
git commit -m "feat: add description of feature"
```

4. Push to your fork and open a Pull Request against `main`

5. Ensure the PR description clearly describes the problem and solution

### Code Style

- Use ESLint configuration provided in the project
- Follow existing patterns in the codebase
- Write descriptive commit messages following conventional commits format
- Keep PRs focused on a single feature or fix

### Commit Message Convention

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, missing semicolons, etc.
- `refactor:` — code change that neither fixes a bug nor adds a feature
- `test:` — adding or updating tests
- `chore:` — maintenance tasks

## Questions?

Feel free to open an issue for any questions about contributing.
