/* Navigation between views (Home, Resume, Projects, Library, Contact) */

function switchView(viewName) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => sec.classList.remove('active-view'));

    const activeTarget = document.getElementById(`view-${viewName}`);
    if(activeTarget) {
        activeTarget.classList.add('active-view');
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if(link.innerText.toLowerCase() === viewName.toLowerCase()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
}

/* Library: builds the list from LIBRARY_ITEMS (see js/library.js) */

const LIBRARY_LINK_LABELS = {
    article: 'Read',
    document: 'Download',
    resource: 'Open',
    recommendation: 'View',
    link: 'Visit',
    note: 'Open'
};

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return escapeHTML(iso);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderLibrary(filter) {
    const list = document.getElementById('library-list');
    const filters = document.getElementById('library-filters');
    if (!list || !filters) return;

    const items = (typeof LIBRARY_ITEMS !== 'undefined' ? LIBRARY_ITEMS : [])
        .filter(item => item && item.title && item.type)
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    const types = [...new Set(items.map(item => item.type.toLowerCase()))];

    if (types.length > 1) {
        filters.innerHTML = ['all', ...types].map(type =>
            `<button class="library-filter${type === filter ? ' active' : ''}" data-type="${escapeHTML(type)}">${type === 'all' ? 'All' : escapeHTML(type)}</button>`
        ).join('');
        filters.querySelectorAll('.library-filter').forEach(btn => {
            btn.addEventListener('click', () => renderLibrary(btn.dataset.type));
        });
    } else {
        filters.innerHTML = '';
    }

    const shown = filter === 'all' ? items : items.filter(item => item.type.toLowerCase() === filter);

    if (shown.length === 0) {
        list.innerHTML = '<div class="library-empty">No entries yet. Add your first one in js/library.js.</div>';
        return;
    }

    list.innerHTML = shown.map(item => {
        const type = item.type.toLowerCase();
        const isExternal = item.url && /^https?:\/\//.test(item.url);
        const label = item.linkLabel || LIBRARY_LINK_LABELS[type] || 'Open';
        const tags = (item.tags || []).map(t => `<li>${escapeHTML(t)}</li>`).join('');
        return `
            <article class="library-item">
                <div>
                    <div class="library-type">${escapeHTML(type)}</div>
                    ${item.date ? `<div class="library-date">${formatDate(item.date)}</div>` : ''}
                </div>
                <div>
                    <div class="library-title">${escapeHTML(item.title)}</div>
                    ${item.description ? `<div class="library-desc">${escapeHTML(item.description)}</div>` : ''}
                    ${item.text ? `<div class="library-note">${escapeHTML(item.text)}</div>` : ''}
                    ${tags ? `<ul class="skill-tags library-tags">${tags}</ul>` : ''}
                </div>
                <div>
                    ${item.url ? `<a class="library-link" href="${escapeHTML(item.url)}"${isExternal ? ' target="_blank" rel="noopener"' : ''}${type === 'document' && !isExternal ? ' download' : ''}>${escapeHTML(label)}</a>` : ''}
                </div>
            </article>`;
    }).join('');
}

renderLibrary('all');
