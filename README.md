# Mohammed Jamai — Portfolio

Static website, no build step. Open `index.html` in a browser or upload the whole folder to any web host.

## Structure

```
portfolio/
├── index.html              Page markup (5 views)
├── css/
│   └── style.css           All styles (variables, layout, components, responsive)
├── js/
│   └── main.js             View switching (navigation)
└── assets/
    ├── img/
    │   └── profile.jpg     Profile photo (3:4)
    └── resume/
        ├── README.txt
        ├── Mohammed_Jamai_Resume_EN.pdf   ← add
        ├── Mohammed_Jamai_Resume_FR.pdf   ← add
        └── Mohammed_Jamai_Resume_AR.pdf   ← add
```

## Resume downloads

Download buttons are on the Resume page (top block) and on the Contact page.
Add your three PDFs to `assets/resume/` with the names above.

## Changing colors

All colors are CSS variables at the top of `css/style.css` (`:root`).
