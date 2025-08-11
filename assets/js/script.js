const btnContador = document.querySelector('#btnContador');
const btnGaleria = document.querySelector('#btnGaleria');
const contador = document.querySelector('#contador');
const galeria = document.querySelector('#galeria');
const btnClaro = document.querySelector('#btnClaro');
const btnEscuro = document.querySelector('#btnEscuro');
const body = document.querySelector('body');

btnContador.addEventListener('click', function ()  {

    contador.style.display = 'block';
    galeria.style.display = 'none';
})
btnGaleria.addEventListener('click', function ()  {

    contador.style.display = 'none';
    galeria.style.display = 'block';
})

const input = document.querySelector('input');
const span = document.querySelector('span');
const incremento = document.getElementById('incremento');
const decremento = document.getElementById('decremento');

let resultado = 0;
span.textContent = resultado;

function incrementar() {
    resultado+= Number(input.value)
    span.textContent = resultado;
}
incremento.addEventListener('click', incrementar);
function decrementar() {
    resultado -= Number(input.value);
    span.textContent = resultado;
}
decremento.addEventListener('click', decrementar);
btnClaro.addEventListener('click', function () {
    body.className = 'tema-claro';
})

btnEscuro.addEventListener('click', function () {
    body.className = 'tema-escuro';
})