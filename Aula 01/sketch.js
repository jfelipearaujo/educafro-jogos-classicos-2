let imagemEstrada;
let imagemAtor;

let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let larguraCarro = 60;
let alturaCarro = 30;

let xAtor = 100;
let yAtor = 366;

let xCarro1 = 550;
let yCarro1 = 45;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  
  exibirAtor();
  exibirCarro();
  
  movimentarCarro();
  movimentarAtor();
}

function exibirAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function exibirCarro() {
  image(imagemCarro1, xCarro1, yCarro1, larguraCarro, alturaCarro);
}

function movimentarCarro() {
  xCarro1 -= 2;
  
  if(xCarro1 < larguraCarro * -1) {
    xCarro1 = 550;     
  }
}

function movimentarAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  else if(keyIsDown(DOWN_ARROW)) {
    yAtor += 2;
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}