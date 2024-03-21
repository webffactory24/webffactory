// Cargar el diccionario
let dictionary;

fetch('diccionario.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        updateContent();
    });

// Función para cambiar el contenido según el idioma
function updateContent() {
    const lang = document.getElementById('language').value;
    document.getElementById('inicio').textContent = dictionary.inicio[lang];
    document.getElementById('mensaje').textContent = dictionary.mensaje[lang];
    // Actualiza otras partes de la página según sea necesario
}