const achievements = [
    {
        year: 2026,
        sortDate: "2026-03-07",
        dateLabel: "2026",
        title: "Noble Steed - Steam release",
        description: "Released demo of Noble Steed on Steam, currently at 659 downloads.",
        category: "project",
        tag: "Project",
        link: "https://store.steampowered.com/app/4179170/",
        sourceLabel: "Steam page"
    },
    
    {
        year: 2026,
        sortDate: "2026-02-01",
        dateLabel: "2026",
        title: "Normanhurst Nitro Scouting App",
        description: "Built a scouting app for Normanhurst Nitro for collecting and reviewing FRC match data. (site not publicly avaliable)",
        category: "project",
        tag: "Project",
        sourceLabel: "Project site"
    },

    {
        year: 2025,
        sortDate: "2025-07-08",
        dateLabel: "2025",
        title: "Ancient Tomb",
        description: "Released Ancient Tomb on itch.io.",
        category: "project",
        tag: "Project",
        link: "https://ilikcoding.itch.io/ancient-tomb",
        sourceLabel: "itch.io"
    },

    {
        year: 2025,
        sortDate: "2025-07-22",
        dateLabel: "2025",
        title: "Gearbound",
        description: "Released Gearbound on itch.io.",
        category: "project",
        tag: "Project",
        link: "https://ilikcoding.itch.io/gearbound",
        sourceLabel: "itch.io"
    },

    {
        year: 2025,
        sortDate: "2025-10-07",
        dateLabel: "2025",
        title: "Rotting Depths",
        description: "Released the Rotting Depths demo on itch.io.",
        category: "project",
        tag: "Project",
        link: "https://ilikcoding.itch.io/rotting-depths-demo",
        sourceLabel: "itch.io"
    },

    {
        year: 2024,
        sortDate: "2024-06-01",
        dateLabel: "2024",
        title: "PyBotball Documentation",
        description: "Built Python documentation for Botball at pybotball.org.",
        category: "project",
        tag: "Project",
        link: "https://pybotball.org",
        sourceLabel: "Project site"
    }
];

const timeline = document.getElementById("timeline");
const resultsCount = document.getElementById("results-count");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";

function renderTimeline() {
    const filtered = achievements
        .filter(item => activeFilter === "all" || item.category === activeFilter)
        .sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

    resultsCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;

    if (!filtered.length) {
        timeline.innerHTML = `<div class="empty-state">No achievements matched that filter. Which is impressive somehow.</div>`;
        return;
    }

    const grouped = {};
    filtered.forEach(item => {
        if (!grouped[item.year]) grouped[item.year] = [];
        grouped[item.year].push(item);
    });

    const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

    timeline.innerHTML = years.map(year => {
        const cards = grouped[year].map(item => {
            const safeLink = item.link && item.link !== "#" ? item.link : "#";
            const openInNewTab = safeLink !== "#" ? `target="_blank" rel="noopener noreferrer"` : "";
            const note = item.note ? `<p class="card-note">${item.note}</p>` : "";

            return `
                <a class="timeline-card" href="${safeLink}" ${openInNewTab}>
                    <div class="card-top">
                        <span class="card-date">${item.dateLabel}</span>
                        <span class="card-category ${item.category}">${item.tag}</span>
                    </div>

                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>

                    <div class="card-meta">
                        <span>${item.sourceLabel}</span>
                        ${safeLink !== "#" ? `<span class="card-link">Open ↗</span>` : `<span>No public link</span>`}
                    </div>

                    ${note}
                </a>
            `;
        }).join("");

        return `
            <section class="year-group">
                <div class="year-heading">${year}</div>
                ${cards}
            </section>
        `;
    }).join("");
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter;
        renderTimeline();
    });
});

renderTimeline();