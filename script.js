const valorContador = document.getElementById('valor-contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMultiplicar = document.getElementById('btn-multiplicar');
const btnDividir = document.getElementById('btn-dividir');
const btnPotenciar = document.getElementById('btn-potenciar');
const btnResetear = document.getElementById('btn-resetear');
const btnTema = document.getElementById('btn-tema');
const inputMaximo = document.getElementById('input-maximo');
const inputMinimo = document.getElementById('input-minimo');

let contador = 0;
let temaOscuro = false;

function obtenerLimites() {
    let maximo = Number(inputMaximo.value);
    let minimo = Number(inputMinimo.value);

    if (isNaN(maximo)) maximo = 10;
    if (isNaN(minimo)) minimo = 0;
    if (minimo > maximo) {
        minimo = maximo;
    }

    return { maximo, minimo };
}

function aplicarLimites(valor) {
    const { maximo, minimo } = obtenerLimites();
    if (valor < minimo) return minimo;
    if (valor > maximo) return maximo;
    return valor;
}

function mostrar() {
    valorContador.textContent = contador;
}

function incrementar() {
    contador = aplicarLimites(contador + 1);
    mostrar();
}

function decrementar() {
    contador = aplicarLimites(contador - 1);
    mostrar();
}

function multiplicar() {
    contador = aplicarLimites(contador * 2);
    mostrar();
}

function dividir() {
    contador = aplicarLimites(contador / 2);
    mostrar();
}

function potenciar() {
    contador = aplicarLimites(contador * contador);
    mostrar();
}

function resetear() {
    contador = obtenerLimites().minimo;
    mostrar();
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
btnDividir.addEventListener('click', dividir);
btnPotenciar.addEventListener('click', potenciar);
btnResetear.addEventListener('click', resetear);
btnTema.addEventListener('click', cambiarTema);

inputMaximo.addEventListener('change', () => {
    contador = aplicarLimites(contador);
    mostrar();
});
inputMinimo.addEventListener('change', () => {
    contador = aplicarLimites(contador);
    mostrar();
});