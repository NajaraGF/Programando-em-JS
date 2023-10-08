console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 17;
const estaAcompanhada = false; //booleano
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = true;
while(contador<3){
    
   if(listaDeDestinos[contador] == destino){
    console.log("Destino existe");
    let destinoExiste = true;
    break;
   
   }
    contador += 1;
}

console.log("Destino existe", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Ops ococrreu um erro inesperado!");
}


for(let cont = 0; cont<3 ; cont ++ ){
    
    if(listaDeDestinos[contador] == destino){
     console.log("Destino existe");
     let destinoExiste = true;
     
    }
    
 }