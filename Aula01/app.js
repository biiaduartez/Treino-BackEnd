console.log('Testando o node.JS');
//escreve no terminal

var readline = require('readline')
    // import da biblioteca que faz entrada de dados pelo usuário

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// criamos umobjeto de entradaDados com as referencias do readline

entradaDados.question("Digite seu nome: \n", function(nome) {
    console.log('bem-vindo ' + nome + ',ao servidor node.Js')
        //o objeto entradaDados aguarda a digitação do usuário, após a digitação do conteúdo 
        //é acionado um call back para encaminhar os dados até oconsole.log
        //Esse conteúdo foi encaminhado através do parametro dados da função
});
//criamos uma função call back para receber o nome digitado pelo usuario
// --->> A função de call back é chamada para retornar o conteúdo em uma única instrução