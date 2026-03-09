# Grimdark Portfolio (GitHub Pages)

Single-page personal portfolio using React, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this project to your GitHub repository.
2. Install dependencies:

```bash
npm install
```

3. Deploy:

```bash
npm run deploy
```

4. In GitHub repository settings:
- Open `Settings > Pages`
- Set source to `Deploy from a branch`
- Select branch `gh-pages` and folder `/ (root)`

## Notes

- This project is static and GitHub Pages friendly.
- `vite.config.js` uses `base: "./"` so assets load correctly under repository subpaths.
- If you later use custom SPA routing, add a 404 fallback strategy for GitHub Pages.

## Editable content

Update placeholders in `src/App.jsx`:
- `[Your Name]`
- `[Your Role]`
- `[Short Bio]`
- `[Project Title]`
- `[Project Description]`
- `[Project Link]`
- `[Email]`
- `[Social Links]`
