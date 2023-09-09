// Esse tipo é que nem o any, porém mais SEGURO!!
// Para o exemplo abaixo, o tipo any deixaria eu fazer a op. mat, ja o unknown nao deixa, ele exige uma verificação

let x: unknown
x= 10
x='a'
x=[1]
x = 30
const y = 300
if(typeof x === 'number') console.log(x+y)
