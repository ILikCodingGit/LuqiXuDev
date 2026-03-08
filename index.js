const revealElements = document.querySelectorAll(".reveal");
const statCounters = document.querySelectorAll(".stat-number");

function animateCounter(counterElement) {
    if (counterElement.dataset.animated === "true") {
        return;
    }

    counterElement.dataset.animated = "true";

    const targetValue = Number(counterElement.dataset.target);
    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(targetValue * easedProgress);

        counterElement.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.textContent = targetValue;
        }
    }

    requestAnimationFrame(updateCounter);
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
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
    });
}, {
    threshold: 0.2
});

statCounters.forEach((counter) => {
    counterObserver.observe(counter);
});