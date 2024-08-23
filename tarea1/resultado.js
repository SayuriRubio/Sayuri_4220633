// Obtener el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const total = params.get('total');

// Obtener el elemento del DOM
const parrafo = document.getElementById("resultado");

// Verificar que el elemento y el parámetro existen antes de usarlos
if (parrafo && total !== null) {
    parrafo.innerText = `Veces que se ha ingresado ${total}`;
} else {
    console.error("El elemento con ID 'resultado' no se encontró o el parámetro 'total' no está en la URL.");
}

