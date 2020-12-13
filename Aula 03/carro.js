let larguraCarro = 60;
let alturaCarro = 30;

let xCarroOrigem = 550;

let xCarros = [xCarroOrigem, xCarroOrigem, xCarroOrigem];
let yCarros = [45, 102, 153];
let velocidadeCarros = [2, 2.5, 3.2];

function exibirCarro() {    
  for(let i = 0; i < imagensCarros.length; i++) {
    image(imagensCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentarCarro() {
  for(let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
    
    if(xCarros[i] < larguraCarro * -1) {
      xCarros[i] = xCarroOrigem;     
    }
  }
}