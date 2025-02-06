// Mostrar el modal cuando se hace clic en "Sí"
document.getElementById('yesBtn').addEventListener('click', function() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'flex';
});

// Cerrar el modal cuando se hace clic en la "X"
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic en el botón "Cerrar"
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
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