//OPERADORES LÓGICOS

// && 'E' As duas condições
//devem ser VERDADEIRAS
//para que o resultado
//final seja VERDADEIRO.

// || 'OU' UMA das condições
// devem ser VERDADEIRAS
// para que o resultado
//final seja VERDADEIRO.

// ! 'NÃO' NEGA uma condição//

// EXEMPLOS //

console.log(5 == 5 && 6 == 6)

// EXPLICAÇÃO
// 5 é igual a 5 
// && 'E' 6 é igual a 6//

// OBS: A condição de NEGAÇÃO !
// se colocada na frente de 
// operadores relacionais/comparativos
// vai tornar a lógica falsa
// pq eu vou NEGAR uma proposição
// que é verdadeira
// do contrário tbm
//  A negação ! 'NÃO' vai contrariar
// a setença já afimada//

// EXEMPLO //

console.log(!5 == 5 && !6 == 6)

// EXPLICAÇÃO //
// coloquei a negação !
// e afirmei que
// 5 NÃO É iual a 5
// bem como 6 NÃO É
// igual a 6
// claro que é

// operadores lógicos é lógica//

// PRÁTICA//

//verificar se a pessoa é maior
// de 18 anos
// se sim, deixar entrar
// senão, bloquear a entrada//

var idade = 17
if (!(idade >= 18) && idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

// vc pode AGRUPAR os operadores
// DENTRO da CONDIÇÃO if//

// OPERADORES ARITIMÉTICOS//
// Existe PRECEDENCIA de ORDEM

// 1 - ()
// 2 - ** (elevado/potencia)
// 3- * / % (por cento é resto da divisao)
// 4 + - (ultimo)
// OBS: da esq p/ direita sempre na ordem de precedencia

//AUTO ATRIBUIÇÃO//
// significa auto atribuir um valor a variável//
// ex: var n = 2
//     n = n + 4 (aqui ele vai somar o 4 mais 2 ja atribuída lá em cima a variável)
// o resultado da variável será 6

// SIMPLIFICAÇÃO DA AUTO ATRIBUIÇÃO//
// encurtamento do caminho da variável//
// n = n + 4 (to dizendo que n recebe n mais 4)
// n+ = 4 (msm coisa só que de maneira simplificada)
// coloque a variavel, operador aritmetico, recebe o número que vem dps do operador//

//INCREMENTO//
// é a forma mais simples ainda de simplificar//
// n = n + 4 (ele sempre vai pegar o valor que vc definiu na VARIAVEL)
// n ++ (msm coisa)