/******************************************************************************************************************
 * Objetivo: Realizar o cálculo de médias escolares (Condicionais, Tratamento de Erro, Variáveis)
 * Autor: Milla Regina Lopes Vieira
 * Data: 08/08/2025
 * Versão: 1.0
 * ****************************************************************************************************************/

//Import do arquivo de médias escolares
const { lstat } = require('fs')
var calculoMedia = require('./modulo/media.js')

//Import da biblioteca do readline
var readline = require('readline')


/******************************************************************************************************************************************
 *                    FORMAS DE CRIAÇÃO DE VARIÁVEIS
 * LET -> Permite criar variáveis dentro de um escopo de bloco, onde elas nacem e morrem dentro do bloco
 * 
 * VAR -> Permite criar uma variável dentro ou fora de um escopo de bloco, porém não se utiliza com frequência
 * 
 * CONST -> Permite criar um espaço em memória que não sofre alteração de conteúdo. Pode ser criado dentro ou fora de um escopo de bloco
 *          Escrita em Maiúsculo.
 * 
 * 
 *                 MÉTODOS DE CONVERSÃO DE TIPOS DE DADOS
 * 
 * String() -> Converte um objeto ou variável em String()
 * parseInt() -> Converte um objeto ou variável para número inteiro
 * parseFloat()Converte um objeto ou variável para número decimal
 * Number() -> Converte um objeto ou variável para número inteiro ou decimal, conforme a necessidade
 * Boolean() -> Converte um objeto ou variável para booleano
 * Object() -> Converte um objeto ou variável para objeto (array, json, classe)
 * 
 *                       OPERADORES DE COMPARAÇÃO
 * == Validação de igualdade de conteúdos
 * < Validação de menor
 * > Validação de maior
 * <= Validação de menor ou igualdade de conteúdos
 * >= Validação de maior ou igualdade de conteúdos
 * != Diferença de conteúdos
 * === Validação de tipos de dados de conteúdos
 * !== Validação de diferença de conteúdos e igualdade de tipos de dados
 * !=! Validação de diferença de conteúdos e diferença de tipos de dados
 * 
 *                       OPERADORES LÓGICOS
 * E      and    &&
 * OU     or     ||
 * NÃO    not     !
 *******************************************************************************************************************************************/


//Cria um objeto para criar uma Interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//MENSAGENS DE ERRO DA APLICAÇÃO
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Valor inapropriado, insira apenas números entre 0 e 10!'
const MESSAGE_ERROR_EMPTY = "ERRO: existem campos que não foram preenchidos"
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possível calcular com a entrada de letras'

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function (nome) {
    let nomeAluno = String(nome).toUpperCase()

    if (nomeAluno == '') {
        console.log(MESSAGE_ERROR_EMPTY)
        entradaDeDados.close()

    } else {

        //Entrada de dados da Nota 1
        entradaDeDados.question('Digite a nota 1:', function (valor1) {
            let nota1 = valor1

            if (nota1 == '' || Number(nota1) < 0 || Number(nota1) > 10) {
                console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                entradaDeDados.close
            } else {
                //Entrada de dados Nota 2
                entradaDeDados.question('Digite a nota 2:', function (valor2) {
                    let nota2 = valor2

                    if (nota2 == '' || Number(nota2) < 0 || Number(nota2) > 10) {
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                        entradaDeDados.close()
                    } else {
                        //Entrada de dados Nota 3
                        entradaDeDados.question('Digite a nota 3:', function (valor3) {
                            let nota3 = valor3

                            if (nota3 == '' || Number(nota3) < 0 || Number(nota3) > 10) {
                                console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                                entradaDeDados.close()
                            } else {
                                //Entrada de dados Nota 4
                                entradaDeDados.question('Digite a nota 4:', function (valor4) {
                                    let nota4 = valor4



                                    if (nota4 == '' || Number(nota4) < 0 || Number(nota4) > 10) {
                                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                                        entradaDeDados.close
                                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                        console.log(MESSAGE_ERROR_NOT_NUMBER)

                                    } else {

                                        //chama a função que calcula a média e retorna o valor na variável "media"
                                        let media = calculoMedia.mediaEscolar(nota1, nota2, nota3, nota4)
                                        //chama a função para validar o status do aluno
                                        let statusAluno = calculoMedia.validarStatus(media)

                                       if (statusAluno){
                                        console.log(`O aluno(a) ${nomeAluno}, teve a média ${media} e está ${statusAluno}`)
                                       }
                                       
                                       entradaDeDados.close()
                                    }
                                })//nota4
                            }
                        })//nota3
                    }
                })//nota2
            }

        })//nota1
    }
})//nome