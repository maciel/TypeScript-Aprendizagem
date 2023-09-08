
let nome: string = 'Luiz'
let idade: number = 2
let adulto: boolean = true //nao pode 0 ou 1 por exemplo: só true ou false
let simbolo: symbol = Symbol('simbolo')
// let big: bigint = 20n
// os tipos que ja tem no js é letra minusscula
// quando for criar outros tipos, usa letra maiscula
// Vale ressaltar que está sendo reduntante.

// Arrays

let numbersArray: Array<number> = [1, 2]
let stringArray: string[] = ['s1', 'es']
let stringArrayOther: Array<string> = ['a', 'b'] 

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} ={
    idade: 20,
    nome: 'Caio'
}  //adulto é opcional, por isso o interrogação
console.log(pessoa.nome)


//Funções

function soma (x:number, y:number) {
    return x+y
}
const retorna = soma(2, 2)

const soma_2: (x:number, y:number) => number = (x,y) => x+y