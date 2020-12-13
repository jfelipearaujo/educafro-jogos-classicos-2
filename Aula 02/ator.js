let xAtor = 100;
let yAtor = 366;

let tamanhoAtor = 30;

let xVelocidadeAtor = 2;
let yVelocidadeAtor = 2;

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