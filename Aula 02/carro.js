let larguraCarro = 60;
let alturaCarro = 30;

let xCarroOrigem = 550;

let xCarro1 = xCarroOrigem;
let yCarro1 = 45;

let xCarro2 = xCarroOrigem;
let yCarro2 = 102;

let xCarro3 = xCarroOrigem;
let yCarro3 = 153;

let velocidadeCarro1 = 2;
let velocidadeCarro2 = 2.5;
let velocidadeCarro3 = 3.2;

function exibirCarro() {
  image(imagemCarro1, xCarro1, yCarro1, larguraCarro, alturaCarro);
  image(imagemCarro2, xCarro2, yCarro2, larguraCarro, alturaCarro);
  image(imagemCarro3, xCarro3, yCarro3, larguraCarro, alturaCarro);
}

function movimentarCarro() {
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  
  if(xCarro1 < larguraCarro * -1) {
    xCarro1 = xCarroOrigem;     
  }
  
  if(xCarro2 < larguraCarro * -1) {
    xCarro2 = xCarroOrigem;     
  }
  
  if(xCarro3 < larguraCarro * -1) {
    xCarro3 = xCarroOrigem;     
  }
}