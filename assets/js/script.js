const btnContador = document.querySelector('#btnContador');
const btnGaleria = document.querySelector('#btnGaleria');
const contador = document.querySelector('#contador');
const galeria = document.querySelector('#galeria');
const btnClaro = document.querySelector('#btnClaro');
const btnEscuro = document.querySelector('#btnEscuro');
const body = document.querySelector('body');

btnContador.addEventListener('click', function () {
    contador.style.display = 'block';
    galeria.style.display = 'none';
});

btnGaleria.addEventListener('click', function () {
    contador.style.display = 'none';
    galeria.style.display = 'block';
});

const input = document.querySelector('input');
const span = document.querySelector('span');
const incremento = document.getElementById('incremento');
const decremento = document.getElementById('decremento');

let resultado = 0;
span.textContent = resultado;

incremento.addEventListener('click', function () {
    let passo = Number(input.value) || 1; 
    resultado += passo;
    span.textContent = resultado;
});

decremento.addEventListener('click', function () {
    let passo = Number(input.value) || 1; 
    resultado -= passo;
    span.textContent = resultado;
});

btnClaro.addEventListener('click', function () {
    body.className = 'tema-claro';
});

btnEscuro.addEventListener('click', function () {
    body.className = 'tema-escuro';
});

const imagens = [
    './assets/img/onibus1.jfif',
    './assets/img/onibus2.jfif',
    './assets/img/onibus3.jfif',
    './assets/img/onibus4.jfif',
    './assets/img/onibus5.jfif',
    './assets/img/onibus6.jfif'
];

const imagemPrincipal = document.querySelector('#imagem-principal img');
const min = document.querySelector('#imagem-outras');

imagens.forEach((src, index) => {
    let img = document.createElement('img');
    img.src = src;
    if (index === 0) img.classList.add('selecionada');
    img.addEventListener('click', function () {
        imagemPrincipal.src = src;
        document.querySelectorAll('#imagem-outras img').forEach(i => i.classList.remove('selecionada'));
        img.classList.add('selecionada');
    });
    min.appendChild(img);
});
