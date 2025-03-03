// Animaciones y funcionalidades para la página

// 1. Scroll suave para los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID de la sección
        const targetSection = document.getElementById(targetId); // Selecciona la sección

        // Scroll suave hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Animación al hacer scroll (reveal effect)
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// 3. Validación del formulario de contacto
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación de campos
        if (nombre && email && asunto && mensaje) {
            // Mensaje de éxito
            showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
            form.reset(); // Limpia el formulario
        } else {
            // Mensaje de error
            showMessage('Por favor, completa todos los campos.', 'error');
        }
    });
}

// Función para mostrar mensajes de éxito o error
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    // Añadir el mensaje antes del formulario
    form.parentNode.insertBefore(messageDiv, form);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// 4. Cambiar el color del header al hacer scroll
window.addEventListener('scroll', changeHeaderColor);

function changeHeaderColor() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ffffff'; // Cambia el color del header
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#ffffff'; // Color original
        header.style.boxShadow = 'none';
    }
}

// 5. Animación de los íconos de servicios al aparecer
const servicios = document.querySelectorAll('.servicio');
servicios.forEach(servicio => {
    servicio.addEventListener('mouseenter', () => {
        servicio.querySelector('i').style.transform = 'rotate(360deg)';
    });
    servicio.addEventListener('mouseleave', () => {
        servicio.querySelector('i').style.transform = 'rotate(0deg)';
    });
});

// 6. Efecto de aparición para las secciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 300);
});

// 7. Animación de los botones sociales al pasar el mouse
const botonesSociales = document.querySelectorAll('.btn-social');
botonesSociales.forEach(boton => {
    boton.addEventListener('mouseenter', () => {
        boton.style.transform = 'translateY(-5px)';
    });
    boton.addEventListener('mouseleave', () => {
        boton.style.transform = 'translateY(0)';
    });
});

// 8. Validación del campo de email en el formulario
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailInput.setCustomValidity('Por favor, ingresa un email válido.');
        } else {
            emailInput.setCustomValidity('');
        }
    });
}

// 9. Botón "Subir al principio" que aparece al hacer scroll
window.addEventListener('scroll', mostrarBotonSubir);

function mostrarBotonSubir() {
    const botonSubir = document.getElementById('boton-subir');
    if (window.scrollY > 300) {
        botonSubir.style.display = 'block'; // Muestra el botón
    } else {
        botonSubir.style.display = 'none'; // Oculta el botón
    }
}

// Función para subir al principio de la página con scroll suave
document.getElementById('boton-subir').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});