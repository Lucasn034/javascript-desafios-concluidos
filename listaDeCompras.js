//Parte 1
//Perguntar se quer adicionar uma comida na lista de compras, responder sim ou não.
//Pedir para colocar o nome da comida.
//Perguntar qual a categoria da comida, opções pré definidas (laticinios, congelados, doces, frutas) separar as comidas por grupo.
//Caso tenha acabado a lista responder não na primeira pergunta e a lista com os alimentos categorizados devem ser impressos no console.

//Parte 2
//Perguntar se deseja remover algum item da lista.
//Mostrar os itens disponiveis para remoção para que a pessoa escolha.
//Mostrar uma confirmação de que o elemento foi removido da lista.
//Remover um item apenas se tiver algum elemento na lista.
//Caso não encontre o elemente apresentar uma mensagem.
//Após remoção voltar para a primeira pergunta e continuar o ciclo.

//lista para armazenar os produtos
let laticinios = [];
let congelados = [];
let doces = [];
let frutas = [];

let nome = '';
let categoria = '';

let perguntaAdicionar = 'sim';
let perguntaRemover;
let nomeElemento;

while(perguntaAdicionar != 'não'){

    perguntaAdicionar = prompt('Você quer adicionar alguma comida na sua lista de compra?').toLowerCase();
    
    while(perguntaAdicionar != 'sim' && perguntaAdicionar != 'não'){
    alert('Responda sim ou não!');
    perguntaAdicionar = prompt('Você quer adicionar alguma comida na sua lista de compra?').toLowerCase();

    }

    if(perguntaAdicionar == 'não'){

            alert('Lista de compras finalizada!')
            alert(`Lista Final:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
            console.log(`Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
            break;
        }

         //Pedir o nome da comida
        nome = prompt('Coloque o nome da comida que você quer adicionar:').toLowerCase();
        
        //Pedir a categoria da comida.
        categoria = prompt('Digite a categoria: Laticinios, Congelados, Doces, Frutas').toLowerCase();
 
        if(categoria == 'laticinios'){
        laticinios.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);

        }else if(categoria == 'congelados'){
        congelados.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);

        }else if(categoria == 'doces'){
        doces.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);

        }else if(categoria == 'frutas'){
        frutas.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);
        }

        while(categoria != 'laticinios' && categoria != 'congelados' && categoria != 'doces' && categoria != 'frutas' ){
        
        alert('Categoria não localizada, digite novamente!');
        categoria = prompt('Digite a categoria: Laticinios, Congelados, Doces, Frutas').toLowerCase();
        
        if(categoria == 'laticinios'){
        laticinios.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);
        break;

        }else if(categoria == 'congelados'){
        congelados.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);
        break;

        }else if(categoria == 'doces'){
        doces.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);
        break;

        }else if(categoria == 'frutas'){
        frutas.push(nome);
        alert(`${nome} foi adicionado na categoria ${categoria} com sucesso!`);
        break;
        }
      
    }

    while(laticinios.length || congelados.length || doces.length || frutas.length){
        perguntaRemover = prompt('Você quer remover algum item da lista?').toLowerCase();
        
        if(perguntaRemover != 'sim' && perguntaRemover != 'não'){
            alert('Responda sim ou não');
        }

        if(perguntaRemover == 'sim'){
            alert(`Itens disponiveis para remoção:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
            nomeElemento = prompt('Qual o item que deseja remover?').toLowerCase();

            if (laticinios.includes(nomeElemento.toString())){
                laticinios.pop(nomeElemento);
                alert(`O item ${nomeElemento} foi removido da lista com sucesso`);
                alert(`Lista Atual:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
                }
    
            else if (congelados.includes(nomeElemento.toString())) {
                congelados.pop(nomeElemento);
                alert(`O item ${nomeElemento} foi removido da lista com sucesso`);
                alert(`Lista Atual:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
                }
    
            else if (doces.includes(nomeElemento.toString())) {
                doces.pop(nomeElemento);
                alert(`O item ${nomeElemento} foi removido da lista com sucesso`);
                alert(`Lista Atual:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
                }
    
            else if (frutas.includes(nomeElemento.toString())) {
                frutas.pop(nomeElemento);
                alert(`O item ${nomeElemento} foi removido da lista com sucesso`);  
                alert(`Lista Atual:\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}`);
            
            }else{
                alert(`Item não localizado, tente novamente`);
            }
        }

        if(perguntaRemover === 'não'){
            break;
        }
    }
}