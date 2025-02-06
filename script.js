document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Smooth scroll for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle button
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('night-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
