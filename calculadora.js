//Criar uma calculadora, cada operação em uma função.
//Escollher uma opção de operação (+ - % *) e opção sair.
//Inserir 2 valores que deseja utilizar.
//O programa deverá imprimir o resultado.

alert('Bem vindo a Calculadora Numérica');

let perguntaInicial = 'Sim'.toLowerCase();

let resultadosSoma = [];
let resultadosSubtracao = [];
let resultadosDivisao = [];
let resultadosMultiplicacao = [];

while(perguntaInicial != 'Não'){
   
    perguntaInicial = prompt('Selecione a operação que deseja utilizar:\n SOMA \n SUBTRAÇÃO \n MULTIPLICAÇÃO \n DIVISÃO \n SAIR').toLowerCase();

    if(perguntaInicial == 'soma'){
    soma();
}
    else if(perguntaInicial == 'subtração'){
    subtracao();
}
    else if(perguntaInicial == 'divisão'){
    divisao();
}
    else if(perguntaInicial == 'multiplicação'){
    multiplicacao();
}
    else if(perguntaInicial == 'sair'){
    alert(' Obrigado por usar a Calcula Numérica!\n Até a próxima!');
    console.log(` Histórico Soma:\n ${resultadosSoma}\n Histórico Subtração:\n ${resultadosSubtracao}\n Histórico Multiplicação:\n ${resultadosMultiplicacao}\n Histórico Divisão:\n ${resultadosDivisao}`);
    break;
}
    else{
    alert (' Operação inválida!\n Escolha uma das seguintes opções:\n SOMA\n SUBTRAÇÃO\n MULTIPLICAÇÃO\n DIVISÃO\n SAIR!');
    }
}

function soma() {
    let numero1 = prompt('Digite o 1° número');
    let numero2 = prompt('Digite o 2° número');
    let resultadoSoma = parseInt(numero1) + parseInt(numero2);
    alert(`Resultado: ${numero1} + ${numero2} = ${resultadoSoma}`);
    resultadosSoma.push(`${numero1} + ${numero2} = ${resultadoSoma}\n`);
}

function subtracao() {
    let numero1 = prompt('Digite o 1° número');
    let numero2 = prompt('Digite o 2° número');
    let resultadoSubtracao = parseInt(numero1) - parseInt(numero2);
    alert(`Resultado: ${numero1} - ${numero2} = ${resultadoSubtracao}`);
    resultadosSubtracao.push(`${numero1} - ${numero2} = ${resultadoSubtracao}\n`);
}

function multiplicacao() {
    let numero1 = prompt('Digite o 1° número');
    let numero2 = prompt('Digite o 2° número');
    let resultadoMultiplicacao = parseInt(numero1) * parseInt(numero2);
    alert(`Resultado: ${numero1} x ${numero2} = ${resultadoMultiplicacao}`);
    resultadosMultiplicacao.push(`${numero1} x ${numero2} = ${resultadoMultiplicacao}\n`);
}

function divisao() {
    let numero1 = prompt('Digite o 1° número');
    let numero2 = prompt('Digite o 2° número');
    let resultadoDivisao = parseInt(numero1) / parseInt(numero2);
    alert(`Resultado: ${numero1} / ${numero2} = ${resultadoDivisao}`);
    resultadosDivisao.push(`${numero1} / ${numero2} = ${resultadoDivisao}\n`);
}








       
    
       
    
        
    
    
       
  
    
   


      


    
 









