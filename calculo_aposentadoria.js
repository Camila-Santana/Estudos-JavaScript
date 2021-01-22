//Crie um programa para calcular a aposentadoria de uma pessoa.

//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

//COMECE CRIANDO VARIÁVEIS para ARMAZENAR, NOME, SEXO, IDADE e CONTRIBUIÇÃO(em anos)

var name = 'Mateus'
var sexo = 'M' //sao valores apenas para o pc pegar como referencia, tem que definir algo//
var idade = 30
var contribuicao = 10

// Baseado nos valores acima utilize as fórmulas a seguir para CALCULAR SE a pessoa está APTA ou NÃO para se aposentar e no fim IMPRIMA UMA MENSAGEM NA TELA.

if (sexo == "F" && +(idade + contribuicao) >= 85) { // se o sexo for igual a feminino E (aqui eu concatenei usando + como concatenação e depois usei esse mesmo + como adição)
    console.log('APTA a aposentar')
} else {
    console.log('NÃO apta')
}

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;