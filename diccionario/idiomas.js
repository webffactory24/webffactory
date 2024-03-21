let dictionary;

// Cargar el diccionario
fetch('diccionario/diccionario.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        updateContent();
    })
    .catch(error => console.error('Error al cargar el diccionario:', error));

// Función para cambiar el contenido según el idioma
function updateContent() {
    const lang = document.getElementById('language').value;
    document.getElementById('titulo').textContent = dictionary.titulo[lang];
    document.getElementById('mensaje').textContent = dictionary.mensaje[lang];
    // Puedes agregar más elementos que quieras traducir aquí
}