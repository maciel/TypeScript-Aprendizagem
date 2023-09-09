const dadosCliente: [number, string] = [1, 'Caio']
dadosCliente[0] = 100
dadosCliente [1] = 'João'

dadosCliente.pop() //Usar o readonly para nao dar problema
console.log(dadosCliente)

const reTeste: readonly string[] = ['a']
//ou
const reTeste_: ReadonlyArray<string> = ['b']
const vamos: Array<Object> = [{
    nome: 'Caio',
    idade: 21
}]

// const arrayObjects: [{nome:string, idade: number, array: Array<string>, arrayObj:[ {amigo: string, idade: number}]}, number] = [{
//     nome: 'Leo',
//     idade: 10,
//     array: ['c'],
//     arrayObj:[{
//         amigo: 'Santiago',
//         idade: 22
//     }]
// }, 1]


//Teste com array de Objetos =)
interface Alu {
    amigo: string,
    idade: number
}
interface Aluno {
    nome: string,
    idade: number,
    array: Array<string>,
    arrayObj: Array<Alu>
    
}
const arrayObj : Array<Aluno> = [{
    nome: 'Leo',
    idade: 10,
    array: ['c'],
    arrayObj:[{
        amigo: 'João',
        idade: 22
    }]
}]
const arrayObjTeste = [{
    nome: 'Leo',
    idade: 10,
    array: ['c'],
    arrayObj:[{
        amigo: 'João',
        idade: 22
    }]
}]
// console.log(arrayObj[0].arrayObj[0].idade)
arrayObjTeste[0].nome = 'a',
arrayObjTeste[0].arrayObj[0].amigo = 'Santiago'
