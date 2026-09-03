const valorContador = document.getElementById('valor-contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMultiplicar = document.getElementById('btn-multiplicar');
const btnTema = document.getElementById('btn-tema');

let contador = 0;
let temaOscuro = false;

function incrementar() {
    contador = contador + 1;
    valorContador.textContent = contador;
}

function decrementar() {
    contador = contador - 1;
    valorContador.textContent = contador;
}

function multiplicar() {
    contador = contador * 2;
    valorContador.textContent = contador;
}

function cambiarTema() {
    temaOscuro = !temaOscuro;
    document.body.classList.toggle('tema-oscuro');
    
    if (temaOscuro) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Oscuro';
    }
}

btnSumar.addEventListener('click', incrementar);
btnRestar.addEventListener('click', decrementar);
btnMultiplicar.addEventListener('click', multiplicar);
btnTema.addEventListener('click', cambiarTema);