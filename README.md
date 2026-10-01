# Mohammed Jamai — Portfolio

Static website, no build step. Open `index.html` in a browser or push to GitHub Pages / any web host.

## Structure

```
Portfolio-main/
├── index.html                 Markup of the 5 views
├── css/style.css              All styles + responsive rules (colors in :root)
├── js/
│   ├── main.js                Navigation, phone menu, Resources rendering
│   └── resources.js           YOUR Resources content (edit this file)
└── assets/
    ├── img/profile.jpg        Profile photo (square)
    ├── img/projects/          Project images
    ├── resume/                Resume PDFs (EN / FR / AR)
    └── resources/             Files shared in Resources
```

## Content guidelines

Each piece of information lives in **one place only**. Before adding something,
check this table so the site stays organized and nothing is duplicated.

| Information | Where it lives | Not repeated in |
|---|---|---|
| Logo, name, navigation, availability | Sidebar (desktop) / top bar (tablet, phone) | — |
| Photo, title, location, bio, GitHub / Jupyter / LinkedIn buttons | Home — business card | Sidebar |
| Core capabilities, technical skills | Home | Experiences (only skills used in each job) |
| Education, certifications, languages | Home | Experiences |
| Jobs, internships, academic projects | Experiences | Home |
| Resume PDFs (download box) | Bottom of Experiences + one row in Contact | — |
| Personal and technical projects | Projects | Experiences |
| Articles, documents, recommendations | Resources (`js/resources.js`) | — |
| Email, LinkedIn profile, location | Contact | Sidebar |

Rules:

1. **Sidebar = navigation only.** Logo (back to Home), name, the 4 links and the availability line. No contact details.
2. **Home = who you are.** Profile, skills, education, certifications, languages.
3. **Experiences = what you did for employers and schools.** Each entry: index, company, dates · role (place), description, skill tags.
4. **Projects = what you built.** Each project uses the same block: image, index, title, description, Domain / Tools / Year, links. Keep the numbering in order (01, 02…).
5. **Resources = what you share.** Three fixed categories: Articles & Notes, Documents & Tools, Recommendations. Add entries in `js/resources.js`, never in the HTML.
6. **Contact = how to reach you.** Email, location, LinkedIn, resumes.
7. Keep the same tone and format inside a section (dates as `Mon YYYY – Mon YYYY`, tags short, descriptions 1–3 sentences).

## Things to fill in

1. **GitHub and Jupyter URLs** — in `index.html`, search for `Replace the GitHub and Jupyter URLs`.
2. **Certifications** — replace "Issuer · Year", fill the 2 grey placeholders and remove their `cert-placeholder` class.
3. **Projects** — check each description and tool list, fill the Year, add links and images (`assets/img/projects/`).
4. **Resources** — add entries in `js/resources.js`.
5. **Resumes** — replace the PDFs in `assets/resume/` (keep the same file names).

## Responsive behavior

| Screen | Layout |
|---|---|
| ≥ 1600 px (large monitors) | Wider sidebar, content column up to 1040–1120 px, centered |
| 1201–1599 px (desktop / laptop) | Sidebar 240 px, content column up to 960 px, centered |
| 901–1200 px (small laptop) | Sidebar 210 px, skill tags move under each experience |
| 601–900 px (tablet) | Top bar with logo and links, 2-column grids |
| ≤ 600 px (phone) | Top bar with Menu button, everything in one column |
