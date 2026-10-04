const UI_ARROW_UR = `<svg aria-hidden="true" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:-0.08em"><path d="M4 12L12 4M6 4H12V10" stroke="currentColor" stroke-width="1.35" stroke-linecap="square" stroke-linejoin="miter"/></svg>`;
const UI_ARROW_DOWN = `<svg aria-hidden="true" width="0.85em" height="0.85em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:-0.06em"><path d="M8 3V13M4.5 9.5L8 13L11.5 9.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="square" stroke-linejoin="miter"/></svg>`;
/* Curated lead-in: latest major result and notable results; full archive stays chronological. */
(function () { const target = document.getElementById('achievement-featured'); if (!target || !window.achievements)
    return; const picks = [['AIO', 2026, '500'], ['PCTC Round 2', 2026, 'Top 3'], ['ICO', 2025, 'Top Score']]; const esc2 = x => String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); target.innerHTML = picks.map(([title, year, match]) => { const a = window.achievements.find(x => x.title === title && x.year === year && x.preview.includes(match)); if (!a)
    return ''; return `<a class="spotlight-card" href="${esc2(a.link)}" target="_blank" rel="noopener noreferrer"><span class="label">${year} / FEATURED</span><strong>${esc2(a.title)}</strong><p>${esc2(a.preview)}</p><span class="spot-foot">COMPETITION SITE ${UI_ARROW_UR}</span></a>`; }).join(''); })();
document.querySelector('.menu')?.addEventListener('click', e => { const n = document.querySelector('#nav'); const open = n.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(open)); });
document.querySelector('.footer a[href="#top"]')?.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = u => /^https:\/\//.test(u || '') ? u : null;
if (document.querySelector('#achievements-grid')) {
    let year = 'All', query = '';
    const data = [...window.achievements].reverse();
    const years = ['All', ...new Set(data.map(x => String(x.year)))];
    const filters = document.querySelector('#year-filters');
    filters.innerHTML = years.map(y => `<button data-year="${esc(y)}" class="${y === 'All' ? 'active' : ''}">${esc(y)}</button>`).join('');
    const root = document.querySelector('#achievements-grid');
    root.className = 'achievement-timeline';
    let observer;
    function render() { if (observer)
        observer.disconnect(); const filtered = data.filter(x => (year === 'All' || String(x.year) === year) && [x.title, x.preview, x.desc].join(' ').toLowerCase().includes(query)); document.querySelector('#achievement-count').textContent = `${filtered.length} RESULTS`; const rows = []; for (let i = 0; i < filtered.length; i += 5)
        rows.push(filtered.slice(i, i + 5)); root.innerHTML = rows.map((items, rowIndex) => `<section class="timeline-row" style="--count:${items.length}"><div class="timeline-row-head"><span>${esc(items[0].year)} / ${String(rowIndex + 1).padStart(2, '0')}</span></div><div class="timeline-cards">${items.map((x, i) => { const u = safeUrl(x.link); return `<div class="timeline-entry" style="--delay:${i * 100}ms"><span class="timeline-year">${esc(x.year)}</span><${u ? 'a' : 'article'} class="timeline-card" ${u ? `href="${esc(u)}" target="_blank" rel="noopener noreferrer"` : ''}><h3>${esc(x.title)}</h3><span class="award">${esc(x.preview)}</span><p class="description">${esc(x.desc)}</p><span class="linkout">${u ? 'COMPETITION SITE ${UI_ARROW_UR}' : 'MILESTONE'}</span></${u ? 'a' : 'article'}><span class="timeline-node" aria-hidden="true"></span></div>`; }).join('')}</div><div class="timeline-rule" aria-hidden="true"></div></section>`).join('') || '<p class="timeline-empty">No matching achievements.</p>'; observer = new IntersectionObserver(entries => { for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    } }, { threshold: .09, rootMargin: '0px 0px 40px 0px' }); root.querySelectorAll('.timeline-row,.timeline-entry').forEach(el => observer.observe(el)); }
    filters.addEventListener('click', e => { if (!e.target.matches('button'))
        return; year = e.target.dataset.year; filters.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === e.target)); render(); });
    document.querySelector('#achievement-search').addEventListener('input', e => { query = e.target.value.toLowerCase(); render(); });
    render();
}
if (document.querySelector('#project-grid')) {
    const icons = ['♟', '♞', '⌘', '◈', '⚙', '◇', '{ py }'];
    const projects = [...window.projectItems].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
    document.querySelector('#project-grid').innerHTML = projects.map((x, i) => { const u = safeUrl(x.link); return `<${u ? 'a' : 'article'} class="project-card" ${u ? `href="${esc(u)}" target="_blank" rel="noopener noreferrer"` : ''}><span class="year">${esc(x.year)} / ${esc(x.sourceLabel)}</span><div class="art">${icons[i % icons.length]}</div><div class="bottom"><div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></div><span class="source">${u ? UI_ARROW_UR : 'PRIVATE'}</span></div></${u ? 'a' : 'article'}>`; }).join('');
}
/* Page-wide progressive enhancement: animation never hides content without JS. */
(() => { const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; const progress = document.querySelector('.reading-progress'); const nav = document.querySelector('.nav'); let ticking = false; function onScroll() { if (ticking)
    return; ticking = true; requestAnimationFrame(() => { const max = document.documentElement.scrollHeight - innerHeight; progress?.style.setProperty('transform', `scaleX(${max > 0 ? Math.max(0, Math.min(1, scrollY / max)) : 0})`); nav?.classList.toggle('scrolled', scrollY > 16); ticking = false; }); } window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll, { passive: true }); onScroll(); const reveal = [...document.querySelectorAll('.polish-reveal')]; if (!reduced && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
    } }); }, { threshold: .07, rootMargin: '0px 0px 70px 0px' });
    reveal.forEach((el, i) => { el.style.setProperty('--reveal-delay', `${Math.min(i % 3, 2) * 65}ms`); obs.observe(el); });
}
else
    reveal.forEach(el => el.classList.add('is-visible')); const menu = document.querySelector('.menu'), links = document.querySelectorAll('#nav a'); links.forEach(a => a.addEventListener('click', () => { document.querySelector('#nav')?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); })); document.addEventListener('keydown', e => { if (e.key === 'Escape') {
    document.querySelector('#nav')?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
} }); })();

