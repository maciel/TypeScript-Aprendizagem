const objeto:{
    nome:string
    idade: number
    telefone?:string, //readonly para quando vc nao quer alterar o valor do objeto
    [key: string]: unknown //Util para quando vc nao sabe o objeto que ta recebendo
} = {
    nome:'ola',
    idade: 18
}
objeto.telefone = '2'
objeto.endereco = '2'

