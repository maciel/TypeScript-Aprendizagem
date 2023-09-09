//Tipo Enum não existe no JS, mas existe no TS


enum Cores {
    VERMELHO,
    AZUL,
    AMARELO
}

function escolheCor(cor: Cores): void {
    console.log(Cores[cor])
}
escolheCor(0)
//enum não é tão bom =(