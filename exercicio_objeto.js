// Agora que você já sabe o que é um OBJETO
// CRIE então OBJETOS
// para CADA OJETO, estabeleça suas PROPRIEDADES
// depois, estabeleça alguma condição para que o computador retorne alguma mensagem//

var animal01 = {

    nome: 'Cachorro',
    idade: 2


}

var animal02 = {

    nome: 'Chinchila',
    idade: 1


}

var animal03 = {

    nome: 'Gato',
    idade: 3


}

var idade = (animal01.idade + animal02.idade + animal03.idade)
console.log(idade)

if (idade >= 3) {
    console.log('Animal idoso')
} else {
    console.log('animal jovem')
}