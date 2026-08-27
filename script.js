const valorContador = document.getElementById('valor-contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

let contador = 0;

function incrementar() {
    contador = contador + 1;
    valorContador.textContent = contador;
}

function decrementar() {
    contador = contador - 1;
    valorContador.textContent = contador;
}

btnSumar.addEventListener('click', incrementar);
btnRestar.addEventListener('click', decrementar);