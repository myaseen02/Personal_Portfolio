# Project Screenshots Setup Instructions

## Where to Place Your Project Screenshots

Place all project screenshots in the `public/projects/` folder, with each project having its own subfolder.

### Recommended Folder Structure:

```
Professional Portfolio/
  └── public/
      ├── projects/                    ← Main projects folder
      │   ├── project-1/              ← Folder for Project 1
      │   │   ├── screenshot1.png
      │   │   ├── screenshot2.png
      │   │   └── ...
      │   ├── project-2/              ← Folder for Project 2
      │   │   ├── screenshot1.png
      │   │   └── ...
      │   └── project-3/              ← Folder for Project 3
      │       └── ...
      ├── resume.pdf
      └── README.md
```

## Steps to Add Your Screenshots:

1. **Navigate to the projects folder:**
   ```
   public/projects/
   ```

2. **Create a folder for each project:**
   - Name them descriptively (e.g., `e-commerce-app`, `portfolio-website`, `task-manager`)
   - Or use simple names (e.g., `project-1`, `project-2`, `project-3`)

3. **Add your screenshots:**
   - Place all screenshots for Project 1 in `project-1/` folder
   - Place all screenshots for Project 2 in `project-2/` folder
   - And so on...

## How to Reference in Your Code:

In your `Projects.jsx` file, you can reference images like this:

```jsx
// Example project object
{
  id: 1,
  title: 'E-Commerce App',
  description: 'A full-stack e-commerce application...',
  screenshots: [
    '/projects/project-1/screenshot1.png',
    '/projects/project-1/screenshot2.png'
  ],
  mainImage: '/projects/project-1/screenshot1.png'
}
```

Then use it in your component:
```jsx
<img src={project.mainImage} alt={project.title} />
```

## Important Notes:

- ✅ Images in the `public` folder are served from the root path (`/`)
- ✅ Use forward slashes (`/`) in paths, even on Windows
- ✅ Paths are case-sensitive in production builds
- ✅ Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
- ✅ Keep file sizes reasonable for web performance (optimize images if needed)

## Example Folder Names:

You can name your project folders however you like:
- `project-1`, `project-2`, `project-3` (simple)
- `e-commerce-app`, `portfolio-website`, `task-manager` (descriptive)
- `ecommerce`, `portfolio`, `taskmanager` (short)

Just make sure the folder names match what you use in your code!

