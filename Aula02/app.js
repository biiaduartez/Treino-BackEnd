/**************************************************************** 
 * Objetivo: Realizar a media escolar de 4 notas dos alunos
 * Data: 27/01/2023
 * Autor: Bianca Ferreira Duarte
 * Versâo: 1.0
 ****************************************************************/
console.log('Sistema de Calculo de Média Escolares')

//import da biblioteca de dados
var readline = require('readline');

//criamos um objeto para manipular a entrada de dados via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função de CallBack  para retornar o nome do aluno
entradaDeDados.question('Digite o nome do aluno:\n', function(nome) {

    // Variavel local para recebero nome do aluno, que vai retornar pela função
    let nomeAluno = nome;

    //Função de CallBack para entrada das notas
    entradaDeDados.question('Digite a nota1:\n', function(nota1) {
        let primeiraNota = nota1;

        entradaDeDados.question('Digite a nota2:\n', function(nota2) {
            let segundaNota = nota2;

            entradaDeDados.question('Digite a nota3:\n', function(nota3) {
                let terceiraNota = nota3;

                entradaDeDados.question('Digite a nota4:\n', function(nota4) {
                    let quartaNota = (nota4);


                    //Validação para tratar os itens
                    if (primeiraNota == '' || segundaNota == '' ||
                        terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário digitar agum valor nas entradas')

                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) ||
                        isNaN(terceiraNota) || isNaN(quartaNota)) {

                        console.log('ERRO: É necessário que todos os dados digitados sejam números')

                    } else {

                        console.log(media);

                        let media = 0;
                        media = (Number(primeiraNota) + Number(segundaNota) +
                            Number(terceiraNota) + Number(quartaNota)) / 4;
                    }

                });
            });
        });
    });
});