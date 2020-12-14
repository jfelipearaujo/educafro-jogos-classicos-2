// Dividindo o código e sempre exibindo os carros

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
