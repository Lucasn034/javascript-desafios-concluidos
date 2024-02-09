//Definir um numero inicial de 1 a 10 que será adivinhado.
//Perguntar qual o valor do chute.
//Caso acerte irá te parabenizar em caso de falha dar 2 tentaitvas. 
//Caso não consiga acertar em 3 tentativas ele irá imprimir o número inicial. 

let numeroAdivinhar = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(numeroAdivinhar); 

let tentativas = 1;
let textoTentativa = 'tentativa';

    alert('Bem vindo ao Jogo do número secreto!');
    alert('Digite um número de 1 a 10!')

let numeroChute = prompt('Digite o número:');

while(tentativas < 3 && numeroChute != numeroAdivinhar){
    numeroChute = prompt('Digite o número:');
    tentativas ++;
    console.log(`Número de tentativas é igual ${tentativas}`);
}

if(tentativas > 1){
    textoTentativa = 'tentativas';
}

if(numeroChute == numeroAdivinhar){
    alert(`Parabéns você acertou o número secreto com ${tentativas} ${textoTentativa}!`);

}else{
    alert(`Que pena você não conseguiu adivinhar em ${tentativas} ${textoTentativa}!`);
    alert(`O número secreto era ${numeroAdivinhar}`);
}