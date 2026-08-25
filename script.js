// Seleccionamos el elemento donde se muestra el valor
const valorContador = document.getElementById('valor-contador');

// Seleccionamos el botón
const btnSumar = document.getElementById('btn-sumar');

// Inicializamos el contador en 0
let contador = 0;

// Función que incrementa el contador y actualiza la vista
function incrementarContador() {
    contador = contador + 1;      // Aumentamos en 1
    valorContador.textContent = contador;  // Mostramos el nuevo valor
}

// Escuchamos el evento 'click' del botón y ejecutamos la función
btnSumar.addEventListener('click', incrementarContador);