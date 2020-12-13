let imagemEstrada;
let imagemAtor;

let imagensCarros = [];

let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3];
}