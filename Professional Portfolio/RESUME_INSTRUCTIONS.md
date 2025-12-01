# Resume PDF Setup Instructions

## Where to Place Your Resume PDF

To enable the resume download button on the About page, follow these steps:

### Step 1: Locate the Public Folder
Navigate to the `public` folder in your project root directory:
```
Professional Portfolio/
  └── public/
```

### Step 2: Copy Your Resume
1. Copy your resume PDF file (`M Yaseen - Resume (NEWEST).pdf`)
2. Paste it into the `public` folder

### Step 3: Rename the File
Rename the file to exactly:
```
resume.pdf
```

### Final Structure Should Look Like:
```
Professional Portfolio/
  ├── public/
  │   └── resume.pdf  ← Your resume goes here
  ├── src/
  ├── package.json
  └── ...
```

### How It Works
- The About page has a "Download Resume (PDF)" button
- When clicked, it will download the file from `/resume.pdf`
- The downloaded file will be named `Mohammad_Yaseen_Resume.pdf`

### Testing
After placing the file:
1. Run `npm run dev` to start the development server
2. Navigate to the About page
3. Click the "Download Resume (PDF)" button
4. Verify the PDF downloads correctly

**Note:** If you don't place the file, the button will still work but the download will fail. Make sure the file is named exactly `resume.pdf` (lowercase, no spaces).

