# accidental-truth

## Local live preview (macOS)

This repo contains the Next.js app in `accidental-truths/`.

### 1) Open the project folder

```bash
cd "/Users/samhalverson/Development/accidental-truth/accidental-truths"
```

### 2) Ensure Node.js is current

Check your version:

```bash
node -v
```

Use Node 20+ for best compatibility with Next.js 16.

If needed (with `nvm`):

```bash
nvm install 20
nvm use 20
```

### 3) Install dependencies

```bash
npm install
```

### 4) Start the dev server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. The app hot-reloads as you edit files.

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

Then open `http://localhost:3001`.