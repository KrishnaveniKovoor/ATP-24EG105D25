# Week 7: Blog Application

## Overview
This week contains a full blog application project split into backend and frontend implementations under the `BLOG/` folder.

## Project Structure

```
Week-7/
└── BLOG/
    ├── Blog_Backend/
    ├── Blog_Frontend/
    ├── node_modules/
    ├── package-lock.json
    └── package.json
```

## Blog Backend
The backend project is located in `Week-7/BLOG/Blog_Backend/`.

### Key files and folders
- `server.js` — Express server entry point
- `APIs/` — API route handlers for blog operations
- `middlewares/` — middleware for authentication and request handling
- `models/` — database schema definitions
- `config/` — configuration files
- `uploads/` — file upload storage
- `admin-req.http`, `author-req.http`, `user-req.http` — HTTP request files for testing API endpoints
- `.env` — environment configuration file

### How to run backend
```bash
cd Week-7/BLOG/Blog_Backend
npm install
npm start
```

## Blog Frontend
The frontend project is located in `Week-7/BLOG/Blog_Frontend/`.

### Key files and folders
- `src/` — React application source code
- `public/` — static public assets
- `index.html` — application entry HTML
- `package.json` — project dependencies and scripts
- `vite.config.js` — Vite configuration

### How to run frontend
```bash
cd Week-7/BLOG/Blog_Frontend
npm install
npm run dev
```

## Notes
- The `Week-7/BLOG/` folder contains shared package files for the blog workspace.
- For more detailed backend and frontend guides, refer to the individual `README.md` files inside `Blog_Backend/` and `Blog_Frontend/`.
