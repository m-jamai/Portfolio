/* Navigation between views (Home, Resume, Projects, Journal, Contact) */

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
