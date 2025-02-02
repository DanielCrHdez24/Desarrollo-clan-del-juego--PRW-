// Navegación y estructura del nav del sitio

const links = document.querySelectorAll('nav ul li a');
const screens = document.querySelectorAll('.screen');
const nav = document.querySelector('nav ul');
let currentUser = null;

// Manejo de navegación entre secciones

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

// Validación de formulario de registro

document.querySelector('#registro form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    
    if (username.length < 3) {
        alert('El nombre de usuario debe tener al menos 3 caracteres.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
    alert('Registro exitoso');
    currentUser = username;
    updateUserMenu();
    this.reset();
});

// Validación de formulario de inicio de sesión

document.querySelector('#login form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    
    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    if (username === 'Administrador_Clan' && password === 'nintendo64*') {
        alert('Inicio de sesión exitoso como Administrador_Clan');
        currentUser = username;
        updateUserMenu();
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
    this.reset();
});

// Validación de creación de publicaciones

document.querySelector('#crear-publicacion button').addEventListener('click', function() {
    const postContent = document.querySelector('#crear-publicacion textarea').value.trim();
    if (postContent.length < 10) {
        alert('La publicación debe contener al menos 10 caracteres.');
        return;
    }
    alert('Publicación añadida exitosamente');
    document.querySelector('#crear-publicacion textarea').value = '';
});

// Función para validar el formato de email

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Actualizar el menú con el nombre de usuario

function updateUserMenu() {
    if (currentUser) {
        const userGreeting = document.createElement('li');
        userGreeting.textContent = `Bienvenido Claner ${currentUser}`;
        userGreeting.style.float = 'right';
        nav.appendChild(userGreeting);

        const logoutButton = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Cerrar Sesión';
        logoutLink.addEventListener('click', logoutUser);
        logoutButton.appendChild(logoutLink);
        logoutButton.style.float = 'right';
        nav.appendChild(logoutButton);
    }
}

// Cerrar sesión

function logoutUser() {
    alert('Sesión cerrada');
    currentUser = null;
    location.reload();
}
