function semRetorno(...args:string[]): void {
    console.log(args.join(''))
}
semRetorno('asdasd')

const pessoa= {
    nome:'Maciel',
    idade: 21,
    apelido: 'Macias',
    exibirNome(): void{
        console.log(this.nome + '' + this.apelido)
    },
}

export{pessoa}