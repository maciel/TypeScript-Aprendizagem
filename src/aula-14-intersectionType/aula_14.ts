type Nome = {nome: string}
type Sobrenome = {sobrenome: string}
type Idade = {idade: number}
type Pessoa = Nome & Sobrenome & Idade // União de Types

const professores: Pessoa = {
nome: 'Caio',
idade: 21,
sobrenome: 'Maciel'
}

// Outra maneira: usar como conjunto
type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersection = AB & AC // Logo, interseccção é 'A'!!