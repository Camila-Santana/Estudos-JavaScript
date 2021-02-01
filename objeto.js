// OBJETO //

// REPRESENTAÇÃO //

// são representados através das chaves{ e tudo aqui dentro será PROPRIEDADES} 
// PROPRIEDADES por suas vez são as CARACTERÍSTICAS que esse objeto possui

// EXEMPLOS//

var aluno01 = { //tudo dentro da chave são objetos que por sua vez tem propriedades/características//

    nome: 'Kaleb',
    nota: 8.8
}

var aluno02 = { //tudo dentro da chave são objetos que por sua vez tem propriedades/características//

    nome: 'Saymon',
    nota: 7.8
}

var aluno03 = { //tudo dentro da chave são objetos que por sua vez tem propriedades/características//

    nome: 'Miguel',
    nota: 6.8
}

// ACESSANDO AS PROPRIEDADES DO OBJETO //
// para acessar, basta atribuir o ponto . //

var media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(media)

// EXPLICAÇÃO//

// variável aluno 03 vai RECEBER as PROPRIEDADES do objeto criado através das {}
// essas PROPRIEDADES são: nome e nota
// as PROPRIEDADES são criadas utilizando dois pontos - se for string/texto - usa-se aspas
// para separar as PROPRIEDADES, usa-se a vírgula

// OBSERVAÇÃO //
// como você já sabe que para acessar o OBJETO precisa de ponto .
// o console.log por sua vez é um OBJETO
// e tudo o que vc acessa dentro do console.log (aqui são as propriedades/metodos)