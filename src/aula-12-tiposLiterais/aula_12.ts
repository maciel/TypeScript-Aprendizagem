let xa = 10
const ya = 10 // Por ser uma const, ya só PODE assumir valor number = 10. O que faz sentido já que não é uma variável!!! 
// Isso é consdirado um subTipo de NUMBER

// Utilzar o as Const no let é uma forma boa também de segurança

let pessoaAluno = 'Caio' as const
const objPessoas = {
    nome: 'Caio' as const,
    sobrenome: 'Maciel'
}

function escolheTime(time: 'Corinthians' | 'São Paulo' | 'Palmeiras') {
    return time
}

const timeCaio = 'Corinthians'
console.log(escolheTime(timeCaio))