/************************************************************
  Objetivo: Trabalhando com Array
 * Data: 24/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versâo: 1.0 
 * *********************************************************/


//  [ ] - Significa que estamos manipulando um array de dados
// { } - Significa que estamos manipulando um formato Json de dados

const listaNomes = [
    'José',
    'Maria',
    'Luiz',
    'Carlos',
    'luizinho',
    'Zezinho'
];

const listaProdutos = [
    'Teclado',
    'Mouse',
    'Monitor',
    'Computador',
    'Fone',
    'Impressora',
    'Scanner',
    'WebCam'
]



const manipulanadoElementos = function() {

    console.log(listaNomes); //Exibe todos os elementos do array
    console.log(listaNomes[0]); //Exibe apenas um elemento conforme seu indice
    console.log(typeof(listaNomes[1])); //Verifica o tipo de dados de um indice (item) do array
    console.log('O nome do usuário é ' + listaNomes[0]);

    console.log(`O nome do usuário é ${listaNomes[1]}`);
    console.log(`A qntde de itens do meu array é: ${listaNomes.length}`);

    //Verifica p tipo de dados do elemento listaNomes
    //console.log(typeof(listaNomes));


    let cont = 0; //start
    let qntdeItens = listaNomes.length; //stop

    console.log('Exibindo dados do array com WHILE');
    while (cont <= qntdeItens) {
        console.log(`Nome: ${listaNomes[cont]}`);
        cont += 1;
    }


    console.log('Exibindo dados do array com FOR');
    let qntdeNomes = listaNomes.length; //stop
    for (let cont = 0; cont < qntdeNomes; cont++)
        console.log(`Nome: ${listaNomes[cont]}`)


    console.log('Exibindo dados do array com FOREACH');
    listaNomes.forEach(function(nome) { // é um método de um objeto array que retorna uma função de callback
        console.log(`Nome: ${nome}`)

    })

    //Adicionando elementos novos no array

    //PUSH - Adiciona elementos no final do array
    listaNomes.push('Alexandre')
    console.log(listaNomes);

    //UNSHIFT - adiciona elemento no inicio do array 
    //(ele muda a posiçãode todos os próximos elementos)
    listaNomes.unshift('Ana Maria', 'Leonardo');
    console.log(listaNomes);


    // removendo elementoa do array

    // REMOVER - remove o ultimo elemento do array
    listaNomes.pop()
    console.log(listaNomes);

    // SHIFT - remove o primeiro elemento do array (reorganiza todos os próximos elementos)
    listaNomes.shift();
    console.log(listaNomes);
};

const filtrandoElementos = function() {
    // filtros

    // INDEXOF - permite buscar elementos dentro de um array
    console.log(listaProdutos);
    // console.log(listaProdutos.indexOf('Fone'));
    // console.log(listaProdutos.indexOf('Fone de ouvido'));

    if (listaProdutos.indexOf('Monitor') >= 0)
        console.log('O item pesquisado foi encontrado');
    else
        console.log('Item não encontrado');

    // SLICE - permite criar uma cópia do array, podendoo selecionar os itens
    //const novosProdutos = listaProdutos.slice();
    const novosProdutos = listaProdutos.slice(0, 3);

    console.log(listaProdutos);
    console.log(novosProdutos);
};

const removerElemento = function() {
    let nome = nomeProduto;
    let indice = novaLista.indexOf(nome);
    let status;


    if (indice >= 0) {
        novaLista.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    if (status) {
        return novaLista
    } else {
        return status;
    }
};

console.log(listaProdutos);

/* !!! forma errada de manipulação de conjunto de dados!!!
const nome1 = 'José';
const nome2 = 'Maria';
const nome3 = 'Luiz';
const nome4 = 'Carlos';
*/