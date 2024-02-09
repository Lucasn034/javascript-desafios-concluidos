let nome = prompt("Qual o seu nome?");
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você esta estudando');

alert(`Olá ${nome}, você tem ${idade} e já esta aprendendo ${linguagem}!`);
console.log (`Olá ${nome}, você tem ${idade} e já esta aprendendo ${linguagem}!`);

let pergunta = prompt(`Você gosta de estudar ${linguagem}? 1 "Sim" ou 2 "Não"`);

if(pergunta == "1"){

    alert("Muito bom! Continue estudando e você terá muito sucesso");

}if(pergunta == "2"){

    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}