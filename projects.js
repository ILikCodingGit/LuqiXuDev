const projectItems = [
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
        sortDate: "2026-02-03",
        dateLabel: "2026",
        title: "Normanhurst Nitro Scouting App",
        description: "Helped develop a scouting app with Normanhurst Nitro for collecting and reviewing FRC match data. No public link available.",
        category: "project",
        tag: "Project",
        sourceLabel: "Private project"
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

const timelineElement = document.getElementById("timeline");
const resultsCountElement = document.getElementById("results-count");
const revealElements = document.querySelectorAll(".reveal");

function renderProjects() {
    const sortedItems = [...projectItems].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

    resultsCountElement.textContent = `${sortedItems.length} item${sortedItems.length === 1 ? "" : "s"}`;

    const groupedItems = {};

    sortedItems.forEach((item) => {
        if (!groupedItems[item.year]) {
            groupedItems[item.year] = [];
        }

        groupedItems[item.year].push(item);
    });

    const yearKeys = Object.keys(groupedItems).sort((a, b) => Number(b) - Number(a));

    timelineElement.innerHTML = yearKeys.map((year) => {
        const cardsHtml = groupedItems[year].map((item, index) => {
            const safeLink = item.link ? item.link : "#";
            const openAttributes = item.link ? `target="_blank" rel="noopener noreferrer"` : "";
            const metaText = item.link ? "Open ↗" : "No public link";

            return `
                <a class="timeline-card reveal stagger-card" href="${safeLink}" ${openAttributes} style="transition-delay:${index * 100}ms">
                    <div class="card-top">
                        <span class="card-date">${item.dateLabel}</span>
                        <span class="card-category ${item.category}">${item.tag}</span>
                    </div>

                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>

                    <div class="card-meta">
                        <span>${item.sourceLabel}</span>
                        <span class="card-link">${metaText}</span>
                    </div>
                </a>
            `;
        }).join("");

        return `
            <section class="year-group reveal">
                <div class="year-heading">${year}</div>
                ${cardsHtml}
            </section>
        `;
    }).join("");

    observeReveals();
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
    });
}, {
    threshold: 0.12
});

function observeReveals() {
    const allRevealElements = document.querySelectorAll(".reveal");

    allRevealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}

observeReveals();
renderProjects();