document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('[data-carousel-group]').forEach((group) => {
        const carousel = group.querySelector('[data-carousel]');
        const prevButton = group.querySelector('[data-carousel-prev]');
        const nextButton = group.querySelector('[data-carousel-next]');

        if (!carousel || !prevButton || !nextButton) {
            return;
        }

        const getStep = () => {
            const firstCard = carousel.querySelector('.carousel-item');
            if (!firstCard) {
                return 280;
            }

            const style = window.getComputedStyle(carousel);
            const gapValue = Number.parseFloat(style.columnGap || style.gap || '0') || 0;
            return firstCard.getBoundingClientRect().width + gapValue;
        };

        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: getStep(), behavior: 'smooth' });
        });
    });
});
