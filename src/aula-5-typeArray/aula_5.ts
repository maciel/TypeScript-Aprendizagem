var teste: Array<string>
function multiplicaArgs(...args: Array<number>) {
    console.log(args)
    return args.reduce((ac, valor) => ac *valor, 1)
}
console.log(multiplicaArgs(1,2,3))
function receberArray (x: number, y:Array<string>) {
    console.log (x)
    console.log(y)
}
receberArray(1, ['a', 'b', 'c'])
