// Función para activar el modo claro
function light() {
    // Cambiar el cuerpo de la página a modo claro
    document.body.classList.remove('dark-mode');

    // Cambiar el estilo del botón de modo claro
    document.getElementById('light-button').classList.add('btn-light-mode');
    document.getElementById('dark-button').classList.remove('btn-dark-mode');
}

// Función para activar el modo oscuro
function dark() {
    // Cambiar el cuerpo de la página a modo oscuro
    document.body.classList.add('dark-mode');

    // Cambiar el estilo del botón de modo oscuro
    document.getElementById('dark-button').classList.add('btn-dark-mode');
    document.getElementById('light-button').classList.remove('btn-light-mode');
}
