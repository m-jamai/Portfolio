# Mohammed Jamai — Portfolio

Static website, no build step. Open `index.html` in a browser or upload the whole folder to any web host.

## Structure

```
portfolio/
├── index.html              Page markup (Home, Resume, Projects, Library, Contact)
├── css/style.css           All styles (colors in :root at the top)
├── js/
│   ├── main.js             Navigation + Library rendering
│   └── library.js          YOUR Library content (edit this file)
└── assets/
    ├── img/profile.jpg     Profile photo (square)
    ├── resume/             Your 3 resume PDFs (EN / FR / AR)
    └── library/            Files you share in the Library
```

## Things to fill in

1. **Profile links** (Home card): in `index.html`, search for `Replace the GitHub and Jupyter URLs` and put your own URLs.
2. **Resumes**: replace the PDFs in `assets/resume/` (keep the same file names).
3. **Certifications**: in `index.html`, section `Certifications`. Replace "Issuer · Year", and fill the 2 grey placeholders (remove the `cert-placeholder` class once filled).
4. **Projects**: each `<article class="project-row">` in `index.html`. To use a real image, replace the text inside `project-image-slot` with `<img src="assets/img/your-image.jpg" alt="...">`.
5. **Library**: open `js/library.js`, copy an example into `LIBRARY_ITEMS`. Filters by type appear automatically.
