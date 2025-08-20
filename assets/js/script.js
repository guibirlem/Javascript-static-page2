const btnContador = document.querySelector('#btnContador');
const btnGaleria = document.querySelector('#btnGaleria');
const btnCadastro = document.querySelector('#btnCadastro');
const contador = document.querySelector('#contador');
const galeria = document.querySelector('#galeria');
const cadastro = document.querySelector('#cadastro');
const btnClaro = document.querySelector('#btnClaro');
const btnEscuro = document.querySelector('#btnEscuro');
const body = document.querySelector('body');

btnContador.addEventListener('click', function () {
    contador.style.display = 'block';
    galeria.style.display = 'none';
    cadastro.style.display = 'none';
});

btnGaleria.addEventListener('click', function () {
    contador.style.display = 'none';
    galeria.style.display = 'block';
    cadastro.style.display = 'none';
    mostrarGaleria();
});

btnCadastro.addEventListener('click', function () {
    contador.style.display = 'none';
    galeria.style.display = 'none';
    cadastro.style.display = 'block';
});

btnClaro.addEventListener('click', function () {
    body.className = 'tema-claro';
});

btnEscuro.addEventListener('click', function () {
    body.className = 'tema-escuro';
});

const input = document.querySelector('#contador input');
const span = document.querySelector('#contador span');
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

const imagens = [
    { descricao: "Ônibus 1", url: "./assets/img/onibus1.jfif" },
    { descricao: "Ônibus 2", url: "./assets/img/onibus2.jfif" },
    { descricao: "Ônibus 3", url: "./assets/img/onibus3.jfif" },
    { descricao: "Ônibus 4", url: "./assets/img/onibus4.jfif" },
    { descricao: "Ônibus 5", url: "./assets/img/onibus5.jfif" },
    { descricao: "Ônibus 6", url: "./assets/img/onibus6.jfif" }
];

const btnSalvar = document.querySelector('#btnSalvar');
btnSalvar.addEventListener('click', function () {
    const descricao = document.querySelector('#descricao');
    const url = document.querySelector('#url');
    if (descricao.value === '' || url.value === '') {
        alert('Preencha todos os campos');
        return;
    }
    imagens.push({ descricao: descricao.value, url: url.value });
    descricao.value = '';
    url.value = '';
});

function mostrarGaleria() {
    const imagemPrincipal = document.querySelector('#imagem-principal img');
    const outras = document.querySelector('#imagem-outras');
    outras.innerHTML = '';
    imagens.forEach((obj, index) => {
        let img = document.createElement('img');
        img.src = obj.url;
        if (index === 0) {
            imagemPrincipal.src = obj.url;
            img.classList.add('selecionada');
        }
        img.addEventListener('click', function () {
            imagemPrincipal.src = obj.url;
            document.querySelectorAll('#imagem-outras img').forEach(i => i.classList.remove('selecionada'));
            img.classList.add('selecionada');
        });
        outras.appendChild(img);
    });
}
