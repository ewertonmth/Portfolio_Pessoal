 function scrollCarousel(id, direction) {
        const container = document.getElementById(id);
        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }

    function highlightCenterCards() {
        document.querySelectorAll('.carousel').forEach(carousel => {
            const cards = carousel.querySelectorAll('.card');
            let minDiff = Infinity;
            let centerCard = null;

            const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

            cards.forEach(card => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const diff = Math.abs(carouselCenter - cardCenter);
                if (diff < minDiff) {
                    minDiff = diff;
                    centerCard = card;
                }
            });

            cards.forEach(card => card.classList.remove('active-card'));
            if (centerCard) centerCard.classList.add('active-card');
        });
    }

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.carousel').forEach(carousel => {
        carousel.addEventListener('scroll', highlightCenterCards);
    });

    window.addEventListener('load', () => {
        document.body.style.opacity = 1;
        highlightCenterCards();
    });

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }