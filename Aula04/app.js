/************************************************************
  Objetivo: Criar um app  com entrada de 02 valores e realize
   as quatro operações matemáticas (CORREÇÃO COM PROFESSOR)
 * Data: 03/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versâo: 2.0 
 * ********************************************************/

console.log('CALCULADORA - MODO PROFESSOR')

var matematica = require('./modulo/calculadora.js');

//import da biblioteca para entrada de dados
var readline = require('readline');

// cria o objeto para receber a entrada de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados
entradaDados.question('Valor1: \n', function(numero1) {
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('Valor2: \n', function(numero2) {
        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação: { SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR }: \n', function(tipoCalculo) {

            // toUpperCase = ABCDE (Converte a string para MAIUSCULO )
            // toLowerCase = abcde (Converte a string para minusculo )

            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            // Validação de entrada de dados
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular sem preencher todos os dados')
                entradaDados.close();

                /*Validação para verificar se os dados digitados são números
                 - Podemos utilizar isNan ou o typeof
                 - Só que se usarmos o tyoeof é preciso garantir que o tipo
                de dados não é genérico (string)*/

                //   } else if (typeof(valor1) != 'number' || (valor2) != 'number') {

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('EERO: Não é possível calcular sem a entrada de valores numéricos');
                entradaDados.close();

            } else {

                resultado = matematica.calcular(valor1, valor2, operacao);
                console.log(resultado);

            }

        })

    });

});