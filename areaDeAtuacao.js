//Verificar se o colaborador quer seguir FRONT-END ou BACK-END.
//Caso seja Front-End se quer aprender React ou aprender Vue.
//Caso seja Back-End se quer aprender C# ou Java.
//Independente das escolhas anteriores se quer especialização ou tornar-se Fullstack.
//Exibir uma tela de mensagem para cada escolha.
//Questão perguntando se tem mais alguma linguagem a aprender após confirmar perguntar novamente se tem mais alguma?.
//Apresentar um cometario sobre a linguagem escolhida. 

let primeiraQuestao = prompt('Qual área voce quer seguir?');

if(primeiraQuestao.toLowerCase() == 'front-end'){
    alert('Front-End');
}

if(primeiraQuestao.toLowerCase() == 'back-end'){
    alert('Back-End');
}

//Front-End 
if(primeiraQuestao.toLowerCase() == 'front-end'){

let segundaQuestao = prompt('Você quer aprender React ou Vue?');

if(segundaQuestao.toLowerCase() == 'react'){
    alert('React');
}

if(segundaQuestao.toLowerCase() == 'vue'){
    alert('Vue');

    }
}
//Back-End
if(primeiraQuestao == 'back-end'){
let segundaQuestao = prompt('Você quer aprender C# ou JAVA?');

if(segundaQuestao.toLowerCase() == 'c#'){
    alert('C#');
}

if(segundaQuestao.toLowerCase() == 'java'){
    alert('JAVA');
    }
}

let terceiraQuestao = prompt('Você busca por especialização ou tornar-se Fullstack?');

if(terceiraQuestao.toLowerCase() == 'especialização'){
    alert('Especialização');
}

if(terceiraQuestao.toLowerCase() == 'fullstack'){
    alert('Fullstack');
}

let quartaQuestao = prompt('Você gostaria de se especializar ou conhecer?');

while(quartaQuestao == 'sim'){

    let tecnologia = prompt('Qual?');
    alert(`Legal ${tecnologia} é uma linguagem muito interessante!`);
    quartaQuestao = prompt('Quais as tecnologias que você gostaria de se especializar ou conhecer?');

}
    alert('Tudo bem, obrigado pelas informações!');