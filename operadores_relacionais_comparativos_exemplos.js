console.log(4 == '4')
    // o igual a, é comparado o mesmo valor
    // ou seja, independente se vc colocar aspas
    // é um number - ou seja, do mesmo valor//

console.log(4 === '4')
    // o igual e do mesmo tipo, vai comparar que
    // além de ser igual (valor) tem que ser do
    // MESMO TIPO - ou seja, se é number
    // tem que ser number ... 
    // vai ser false, pq coloquei aspas
    // e passei de number para string (texto)

console.log(4 !== '4')
    // diferente inclusive do tipo
    // vai atender pelo menos uma condição o
    // diferente //

// EXERCÍCIO //

// verificar se a pessoa é maior
// de 18 anos

var idade = 17
    // se sim, informar está apta para tirar cnh
    // se não, retorne assim que fizer 18 anos//

if ($ { idade } >= 18) {
    console.log('está apta para tirar cnh')
} else {
    console.log('retorne assim que fizer 18 anos')
}