// Array OU Vetores //
// o Array refere-se a posições, agrupamentos dos objetos/elementos//

// COMO ESCREVER OS ARRAYS?//
// usando [] colchetes//
// COMO REFERENCIAR OS ARRAYS?//
// usando números que referem-se a que posição ele ocupa//

// EXEMPLO //

// escreve normal o nome da variável, o sinal de recebe, 
// só que depois do sinal de recebe, aí é que entra o array
// escreve o []
// a partir daí segue normal
// escrevendo todo o código como objeto
// no final, ou seja, quando vc pedi para mostrar o resultado da expressão
// vc referencia o objeto juntamente com a posição em que cada objeto se encontra
// a posição do array inicia-se em zero O

// Vamos à prática//
// agrupamento dos objetos em uma única variável//
var alunos = [{
        nome: 'Saymon', // string//
        nota: 9.8 //number//
    },


    {
        nome: 'Fer', // string//
        nota: 9.0 //number//

    },

    {
        nome: 'Bia', // string//
        nota: 9.2 //number//

    },

    {
        nome: 'Ju', // string//
        nota: 9.6 //number//

    }
]

//Acessando os objetos/proriedades no array//

var media = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota) / 4
console.log(media)

var nomeDeAlunos = ['bia', 'peu', 'ca']
console.log(nomeDeAlunos) // espera-se que mostre os nomes dos alunos//
console.log(alunos) // espera-se que mostre todo o contexto, tanto os nomes dos alunos e as notas //
console.log(alunos[2].nota) // espera-se que mostre a nota do aluno referente a posição de número 2 //