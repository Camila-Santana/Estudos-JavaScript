 // Cálculo de IMC//
 //CRIE um PROGRAMA para CALCULAR o IMC e NÍVEL DE OBESIDADE de uma pessoa.
 //Comece CRIANDO VARIÁVEIS para armazenar o NOME, PESO, ALTURA de uma pessoa//

 var name = 'Saymon'
 var peso = 70
 var altura = 1.88

 //A partir desses dados armazene em uma VARIÁVEL chamada IMC o cálculo do índice de massa corporal definido pela fórmula abaixo:
 //peso / (altura * altura)//
 var imc = peso / (altura * altura)

 //Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

 //SE o IMC for maior ou igual a 30: Carlos você está acima do peso//
 if (imc >= 30) {
     console.log('Saymon, você está acima do peso')

 } else {
     console.log('Saymon, você não está acima do peso')
 }

 //SE o IMC for menor que 29.9: Carlos você não está acima do peso//