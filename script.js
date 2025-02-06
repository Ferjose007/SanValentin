// Obtener referencias a los elementos del DOM
const modal = document.getElementById('customModal');
const video = document.getElementById('valentineVideo');
const yesBtn = document.getElementById('yesBtn');
const closeBtn = document.querySelector('.close');
const closeModalBtn = document.getElementById('closeModal');

// Mostrar el modal y reproducir el video cuando se hace clic en "Sí"
yesBtn.addEventListener('click', function() {
    modal.style.display = 'flex'; // Mostrar el modal
    video.play(); // Reproducir el video automáticamente
});

// Cerrar el modal y pausar el video cuando se hace clic en la "X"
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar el modal
    video.pause(); // Pausar el video
    video.currentTime = 0; // Reiniciar el video al principio
});

// Cerrar el modal y pausar el video cuando se hace clic en el botón "Cerrar"
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar el modal
    video.pause(); // Pausar el video
    video.currentTime = 0; // Reiniciar el video al principio
});

// Cerrar el modal y pausar el video cuando se hace clic fuera del modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal
        video.pause(); // Pausar el video
        video.currentTime = 0; // Reiniciar el video al principio
    }
});

// Mover el botón "No" cuando se pasa el mouse sobre él
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const button = this;
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
