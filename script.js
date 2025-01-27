const links = document.querySelectorAll('nav ul li a');
const screens = document.querySelectorAll('.screen');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-screen');
        showScreen(target);
    });
});

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === screenId) {
            screen.classList.add('active');
        }
    });
}
