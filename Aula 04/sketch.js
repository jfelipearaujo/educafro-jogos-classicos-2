function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  
  exibirAtor();
  exibirCarro();
  
  movimentarCarro();
  movimentarAtor();
  
  verificarColisao();
  
  exibirPontos();
  
  marcarPontos();
}

