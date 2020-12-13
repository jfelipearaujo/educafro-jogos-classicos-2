let yOrigemAtor = 366;

let xAtor = 250;
let yAtor = yOrigemAtor;

let tamanhoAtor = 30;

let xVelocidadeAtor = 2;
let yVelocidadeAtor = 2;

let colidiu = false;

let pontos = 0;

function exibirAtor() {
  image(imagemAtor, xAtor, yAtor, tamanhoAtor, tamanhoAtor);
}

function movimentarAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= yVelocidadeAtor;
  }
  else if(keyIsDown(DOWN_ARROW)) {
    yAtor += yVelocidadeAtor;
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    xAtor -= xVelocidadeAtor;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    xAtor += xVelocidadeAtor;
  }
}

function verificarColisao() {
  for(let i = 0; i < imagensCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, tamanhoAtor - 15);
    
    if(colidiu) {
      resetarPosicaoAtor();
    }
  }
}

function exibirPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(pontos, width / 5, 26);
}

function marcarPontos() {
  if(yAtor <= 15) {
    pontos++;
    
    resetarPosicaoAtor();
  }
}

function resetarPosicaoAtor(){
  yAtor = yOrigemAtor;
}