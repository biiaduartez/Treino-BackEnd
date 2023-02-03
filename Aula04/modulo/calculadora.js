/************************************************************
Objetivo: Arquivo de funções para realizar calculos matemáticos(COM PROFESSOR)
* Data: 03/02/2023
* Autor: Bianca Ferreira Duarte
* Versâo: 2.0 
*********************************************************/

// Realizar calculo matemático das quatro operações: 
// SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR

function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;


    if (operacao == 'SOMAR')
        resultado = (valor1) + (valor2)

    else if (operacao == 'SUBTRAIR')
        resultado = (valor1) - (valor2)

    else if (operacao == 'MULTIPLICAR')
        resultado = (valor1) * (valor2)

    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) { // Validação do divisor 0
            console.log('ERRO: Não é possível fazer uma uma divisão por 0')
            entradaDados.close();
        } else
            resultado = (valor1) / (valor2)

    } else {
        console.log('ERRO: a informação não é uma operação válida')
        entradaDados.close(); // fecha o objeto de entrada de dados
    }

    //validação para tratar oa variável quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return false;


}

// exporta uma função ara ser utilizada em outro arquivo
module.exports = {
    calcular
}