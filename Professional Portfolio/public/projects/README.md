# Project Screenshots Folder

This folder contains screenshots for each of your portfolio projects.

## Folder Structure

Organize your project screenshots in separate folders, one for each project:

```
public/
  └── projects/
      ├── project-1/          ← Folder for Project 1 screenshots
      │   ├── screenshot1.png
      │   ├── screenshot2.png
      │   └── ...
      ├── project-2/          ← Folder for Project 2 screenshots
      │   ├── screenshot1.png
      │   └── ...
      └── project-3/          ← Folder for Project 3 screenshots
          └── ...
```

## How to Use in Your Code

When referencing these images in your React components (like in `Projects.jsx`), use paths starting with `/`:

```jsx
// Example usage in Projects.jsx
<img src="/projects/project-1/screenshot1.png" alt="Project 1 Screenshot" />
```

## Naming Convention

- Use descriptive folder names (e.g., `project-1`, `e-commerce-app`, `portfolio-website`)
- Use descriptive image names (e.g., `homepage.png`, `dashboard.png`, `mobile-view.png`)
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`

## Example Structure

```
public/
  └── projects/
      ├── e-commerce-app/
      │   ├── homepage.png
      │   ├── product-page.png
      │   └── checkout.png
      ├── portfolio-website/
      │   ├── desktop-view.png
      │   └── mobile-view.png
      └── task-manager/
          ├── dashboard.png
          └── task-detail.png
```

