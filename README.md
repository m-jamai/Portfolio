# Mohammed Jamai — Portfolio

Static website, no build step. Open `index.html` in a browser or push to GitHub Pages / any web host.

## Structure

```
Portfolio-main/
├── index.html                 Markup of the 5 views (Profile, Experiences, Projects, Resources, Contact)
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
| Logo + name (both link to Profile), navigation, availability | Sidebar (desktop) / top bar (tablet, phone) | — |
| Photo, title, subtitle, location, bio, GitHub / Jupyter / LinkedIn buttons | Profile — business card | Sidebar |
| 4 core capabilities, 4 key skills (overview) | Profile | — |
| Full technical skills list | Projects (below the projects) | Profile (only the 4 key skills) |
| Education, certifications, languages | Profile | Experiences |
| Jobs, internships, academic projects | Experiences | Profile |
| Resume PDFs (download box) | Bottom of Experiences + one row in Contact | — |
| Personal and technical projects | Projects | Experiences |
| Articles, documents, recommendations | Resources (`js/resources.js`) | — |
| Email, LinkedIn profile, location | Contact | Sidebar |

Rules:

1. **Sidebar = navigation only.** Logo and name (both open Profile), the 5 links and the availability line. No contact details.
2. **Profile = who you are, at a glance.** Business card, 4 capabilities, 4 key skills (titles of 2 words, 3 maximum), education, certifications, languages. Keep it short: details belong on the other pages.
3. **Experiences = what you did for employers and schools.** Each entry: index, company, dates · role (place), description, skill tags.
4. **Projects = what you built and the tools behind it.** Each project uses the same block: image, index, title, description, Domain / Tools / Year, links. Keep the numbering in order (01, 02…). The full Technical Skills list sits below the projects.
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
The sidebar and the content are wrapped in one container that is centered in the
window (`--layout-max` in `css/style.css`), so left and right margins are always equal.

| Screen | Layout |
|---|---|
| ≥ 2200 px (very large / ultrawide) | Container 1560 px, centered, framed by thin borders |
| 1600–2199 px (large monitors) | Container 1440 px, centered |
| 1201–1599 px (desktop / laptop) | Container 1360 px (full width below that), content column 920 px |
| 901–1200 px (small laptop) | Sidebar 210 px, capabilities in 2×2, skill tags under each experience |
| 601–900 px (tablet) | Top bar with logo and links, 2-column grids |
| ≤ 600 px (phone) | Top bar with Menu button, one column, key skills in 2×2 |

## Icons

GitHub and Jupyter icons come from Simple Icons, the LinkedIn icon from Font Awesome,
both loaded from jsDelivr with a pinned version (see `brand-icon` in `index.html`).
If the CDN cannot be reached, the icons are simply hidden and the buttons keep their text.
