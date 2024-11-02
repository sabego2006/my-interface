// script.js

// Código para interactividad básica
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#contenido button').addEventListener('click', function () {
        alert('Bienvenido a la Pantalla de Contenido!');
    });
});

// Código para llamadas a la API
fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(data => {
        const apiList = document.getElementById('contenido');
        data.entries.slice(0, 5).forEach(entry => {
            const item = document.createElement('p');
            item.textContent = `${entry.API}: ${entry.Description}`;
            apiList.appendChild(item);
        });
    })
    .catch(error => console.error('Error al cargar la API:', error));
