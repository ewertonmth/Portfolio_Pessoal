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

    document.body.style.opacity = 0;
    window.addEventListener('load', () => {
        document.body.style.opacity = 1;
    });

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }