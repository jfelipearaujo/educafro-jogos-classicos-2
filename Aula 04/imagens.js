let imagemEstrada;
let imagemAtor;

let qtdCarros = 6;
let imagensCarros = [];

let indice = -1;
let ultimoIndice = -1;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  
  for (let i = 0; i < 6; i++) {
    imagensCarros[i] = loadImage(`imagens/carro-${obtemIndiceImagem()}.png`);
  }
}

function obtemIndiceImagem() {
  // O codigo abaixo randomiza qual imagens será carregada
  indice = getRandomInt(1, 4);

  while (ultimoIndice == indice) {
    indice = getRandomInt(1, 4);
  }

  ultimoIndice = indice;
  
  return indice;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}