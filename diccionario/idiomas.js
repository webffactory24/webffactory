let dictionary;

// Cargar el diccionario
fetch('diccionario/diccionario.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        console.log(dictionary)
        updateContent();
    })
    .catch(error => console.error('Error al cargar el diccionario:', error));

// Función para cambiar el contenido según el idioma
function updateContent() {
    const lang = document.getElementById('language').value;
    for (const key in dictionary) {
        if (dictionary.hasOwnProperty(key)) {
            const element = dictionary[key];
            document.getElementById(key).textContent = element[lang];
        }
    }
}