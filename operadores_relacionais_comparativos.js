/* OPERADORES DE COMPARAÇÃO 

>   Maior
<   Menor
>=  Maior igual a
<=  Menor igual a
==  Igual a
=== Igual e do mesmo tipo
!=  Diferente de
!== Diferente, inclusive do tipo */

// DESAFIO 1 //

// verificar se a pessoa é maior ou igual a 18 anos

var idade = 17


// se sim, deixar entrar, se não, bloquear a entrada

if (idade >= 18) { // if logo em seguida entre parenteses uma condição, depois o console.log que é a mensagem desejada//
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}

// se a pessoa tiver 17 anos
// avisar pra voltar quando fizer 18 anos//

if (idade == 17) {
    console.log('Volte quando fizer 18 anos')
}